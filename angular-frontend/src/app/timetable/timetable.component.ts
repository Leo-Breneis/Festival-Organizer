import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  signal,
  ViewChild,
} from '@angular/core';
import { TimetableService, Act, Day, Stage } from '../timetable.service';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-timetable',
  standalone: true,
  imports: [NavbarComponent, DatePipe],
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css'],
})
export class TimetableComponent {
  @ViewChild('timetableBody') timetableBody!: ElementRef<HTMLDivElement>;

  protected router = inject(Router);
  constructor(
    private timetableService: TimetableService,
    private cdr: ChangeDetectorRef
  ) {}

  isCollapsed: boolean = false;
  showInfo: boolean = false;
  holdTimeout: any;
  currentTimePosition: number = 1;
  private intervalId: any;

  allActs: Act[] = [];
  days = signal<Day[]>([]);
  stages = signal<Stage[]>([]);

  intervalsPerHour = 12;
  totalIntervals = 24 * this.intervalsPerHour;
  selectedDayId: string = '';

  ngOnInit(): void {
    this.allActs = this.timetableService
      .getAllActs()
      .flatMap((stage) => stage.acts);
    const days = this.extractDaysFromActs(this.allActs);
    this.days.set(days);
    this.stages.set(this.getMergedStages(this.allActs));
    this.updateCurrentTimeRow();
    console.log(this.days().length + "<- days | intervals ->" + this.totalIntervals);
    this.intervalId = setInterval(() => {
      this.updateCurrentTimeRow();
    }, 60000);
  }

  getAllGridIntervals(): number[] {
    return Array.from({ length: this.days().length * this.totalIntervals }, (_, i) => i);
  }

  ngAfterViewInit(): void {
    this.scrollToCurrentTime();
    if (this.timetableBody) {
      this.timetableBody.nativeElement.addEventListener('scroll', this.updateActiveDayOnScroll.bind(this));
    }
  }

updateActiveDayOnScroll(): void {
  if (!this.timetableBody) return;
  const container = this.timetableBody.nativeElement;
  const scrollTop = container.scrollTop;
  const dayHeight = this.totalIntervals * 10; // 10px per row
  const dayIndex = Math.floor(scrollTop / dayHeight);
  this.currentDayIndex = dayIndex;
  this.cdr.detectChanges();
}

getCurrentDayIndex(): number {
  return this.currentDayIndex;
}
  
  updateActiveDayOnScroll(): void {
    if (!this.timetableBody) return;
    const container = this.timetableBody.nativeElement;
    const scrollTop = container.scrollTop;
    const dayHeight = this.totalIntervals * 10; // 10px per row
    const dayIndex = Math.floor(scrollTop / dayHeight);
    const days = this.days();
    days.forEach((d, i) => d. = i === dayIndex);
    this.days.set([...days]);
    this.cdr.detectChanges();
  }

  extractDaysFromActs(acts: Act[]): Day[] {
    const dayMap = new Map<string, Day>();
    acts.forEach((act) => {
      const date = new Date(act.beginTime);
      const dayKey = date.toISOString().split('T')[0];
      if (!dayMap.has(dayKey)) {
        dayMap.set(dayKey, {
          id: dayKey,
          date: new Date(date.getFullYear(), date.getMonth(), date.getDate()),
        });
      }
    });
    return Array.from(dayMap.values()).sort(
      (a, b) => a.date.getTime() - b.date.getTime()
    );
  }

  scrollToFirstEventOfDay(dayId: string): void {
    // Find the first act for this day after 3 AM
    const firstAct = this.allActs
      .filter(act => {
        const actDay = new Date(act.beginTime).toISOString().split('T')[0];
        return actDay === dayId && act.beginTime.getHours() >= 3;
      })
      .sort((a, b) => a.beginTime.getTime() - b.beginTime.getTime())[0];
  
    if (firstAct && this.timetableBody) {
      const dayIndex = this.days().findIndex(day => day.id === dayId);
      const row = this.getStartRow(firstAct, dayIndex);
      const scrollTop = (row - 1) * 10; // 10px per row
      this.timetableBody.nativeElement.scrollTo({
        top: scrollTop,
        behavior: 'smooth'
      });
    }
  }

  scrollToCurrentTime(): void {
    if (this.timetableBody) {
      const container = this.timetableBody.nativeElement;
      const scrollPosition =
        this.currentTimePosition - container.clientHeight / 2 + 50;
      container.scrollTo({
        top: scrollPosition > 0 ? scrollPosition : 0,
        behavior: 'smooth',
      });
    }
  }

  getMergedStages(acts: Act[]): Stage[] {
    const stageMap = new Map<string, Stage>();
    acts.forEach((act) => {
      if (!stageMap.has(act.stage)) {
        stageMap.set(act.stage, { name: act.stage, acts: [act] });
      } else {
        stageMap.get(act.stage)!.acts.push(act);
      }
    });
    for (const stage of stageMap.values()) {
      stage.acts.sort((a, b) => a.beginTime.getTime() - b.beginTime.getTime());
    }
    return Array.from(stageMap.values());
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private updateCurrentTimeRow(): void {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const totalMinutes = hours * 60 + minutes;
    this.currentTimePosition = (totalMinutes / 5) * 10;
  }

  getIntervals(): number[] {
    return Array.from({ length: this.totalIntervals }, (_, i) => i);
  }

  getActsForStageAndDay(stage: Stage, dayId: string): Act[] {
    return stage.acts.filter((act) => {
      const actDay = new Date(act.beginTime).toISOString().split('T')[0];
      return actDay === dayId;
    });
  }

  getDayIndexForAct(act: Act): number {
    const actDay = new Date(act.beginTime).toISOString().split('T')[0];
    return this.days().findIndex(day => day.id === actDay);
  }

  getStartRow(act: Act, dayOffset: number): number {
    const hours = act.beginTime.getHours();
    const minutes = act.beginTime.getMinutes();
    return (
      dayOffset * this.totalIntervals +
      hours * this.intervalsPerHour +
      Math.floor(minutes / 5) +
      1
    );
  }

  getRowSpan(act: Act): number {
    const durationMinutes =
      (act.endTime.getTime() - act.beginTime.getTime()) / 60000;
    return Math.ceil(durationMinutes / 5);
  }

  picStillFits(act: Act): boolean {
    let totalRows = (this.getRowSpan(act) / this.intervalsPerHour) * 4;
    let usedRows = 2;
    if (act.friends != null) {
      usedRows += 2;
    }
    return totalRows > usedRows;
  }

  sliceText(text: string, start: number, end: number): string {
    return text.length > end ? text.slice(start, end) + '...' : text;
  }

  goToActDetail(id: string) {
    this.router.navigate(['/acts', id]);
  }

  startHold(act: Act): void {
    let initialX: number;
    let initialY: number;

    const onMouseMove = (event: MouseEvent) => {
      if (!initialX || !initialY) {
        initialX = event.clientX;
        initialY = event.clientY;
      }
      if (
        Math.abs(event.clientX - initialX) > 5 ||
        Math.abs(event.clientY - initialY) > 5
      ) {
        this.clearHold();
        document.removeEventListener('mousemove', onMouseMove);
      }
    };

    this.holdTimeout = setTimeout(() => {
      act.going = !act.going;
      this.timetableService.markAsGoing(act);
      document.removeEventListener('mousemove', onMouseMove);
    }, 500);

    document.addEventListener('mousemove', onMouseMove);
  }

  clearHold(): void {
    clearTimeout(this.holdTimeout);
    document.removeEventListener('mousemove', () => {});
  }

  onMouseDown(event: MouseEvent, act: Act): void {
    // Optional: implement if needed
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleInfo(): void {
    this.showInfo = !this.showInfo;
  }

  hasEvents(): boolean {
    return this.stages().some((stage) => stage.acts.length > 0);
  }
}
