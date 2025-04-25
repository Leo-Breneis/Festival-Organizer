import { ChangeDetectorRef, Component, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { TimetableService, Act, Day, Stage } from '../timetable.service';
import { Router } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";


@Component({
  selector: 'app-timetable',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent {
  @ViewChild('timetableBody') timetableBody!: ElementRef<HTMLDivElement>;

  protected router = inject(Router);
  constructor(private timetableService: TimetableService, private cdr : ChangeDetectorRef) {}

  isCollapsed: boolean = false;
  showInfo: boolean = false;
  holdTimeout: any;
  currentTimePosition: number = 1;
  private intervalId: any;

  days = signal<Day[]>([]); // List of all days
  activeDay = signal<Day | null>(null); // Currently selected day

  stages = signal<Stage[]>([]); // Define a signal for acts

  ngOnInit(): void {
    this.days.set(this.timetableService.getAllDays());
    this.activeDay.set(this.days().find((day) => day.active) || this.days()[0]); // Set the first active day by default
    this.stages.set(this.timetableService.getAllActs(this.activeDay()!));
    this.updateCurrentTimeRow();
    this.intervalId = setInterval(() => {
      this.updateCurrentTimeRow();
    }, 60000); // Update every minute
  }

  ngAfterViewInit(): void {
    this.scrollToCurrentTime();
  }
  
  scrollToCurrentTime(): void {
    if (this.timetableBody) {
      const container = this.timetableBody.nativeElement;
      const scrollPosition = this.currentTimePosition - container.clientHeight / 2 + 50; // Adjust the scroll position to center the current time row (60 is just an about fixxer for navbar and stuff)
      console.log('Scroll Position:', scrollPosition); // Debugging
      container.scrollTo({
        top: scrollPosition > 0 ? scrollPosition : 0,
        behavior: 'smooth', // Smooth scrolling animation
      });
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  selectDay(id: string): void {
    const updatedDays = this.days().map((day) => ({
      ...day,
      active: day.id === id,
    }));
    this.days.set(updatedDays);
    this.activeDay.set(updatedDays.find((day) => day.id === id) || null);

    // Update stages for the newly selected day
    if (this.activeDay()) {
      this.stages.set(this.timetableService.getAllActs(this.activeDay()!));

      this.cdr.detectChanges();
      this.scrollToCurrentTime();
    }
  }
  
  private updateCurrentTimeRow(): void {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const totalMinutes = hours * 60 + minutes;
  
    // Each row represents 10 minutes, and each row is 10px tall
    this.currentTimePosition = (totalMinutes / 5) * 10;
  
    console.log('Current Time Position (px):', this.currentTimePosition); // Debugging
  }

  getAllActs(day : Day): Stage[] {
    return this.timetableService.getAllActs(day);
  }

  intervalsPerHour = 12;
  totalIntervals = 24 * this.intervalsPerHour;

  getIntervals(): number[] {
    return Array.from({ length: this.totalIntervals }, (_, i) => i);
  }

  getStartRow(act: Act): number {
    const hours = act.beginTime.getHours();
    const minutes = act.beginTime.getMinutes();
    return hours * this.intervalsPerHour + Math.floor(minutes / 5) + 1;
  }

  getRowSpan(act: Act): number {
    const durationMinutes = (act.endTime.getTime() - act.beginTime.getTime()) / 60000;
    return Math.ceil(durationMinutes / 5);
  }

  picStillFits(act: Act): boolean {
    let totalRows = this.getRowSpan(act) / this.intervalsPerHour * 4; // Convert total rows to hours the to 15 mins
    let usedRows = 2; // Assume the title and time use 3 rows (adjust as needed)
    if(act.friends != null) {
      usedRows += 2; 
    }
    return totalRows > usedRows; // Check if there's space left for the picture
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
  
    console.log('Hold action started:', act);

    // Store the initial mouse position
    const onMouseMove = (event: MouseEvent) => {
      if (!initialX || !initialY) {
        initialX = event.clientX;
        initialY = event.clientY;
      }
  
      // Cancel the hold if the mouse moves significantly
      if (Math.abs(event.clientX - initialX) > 5 || Math.abs(event.clientY - initialY) > 5) {
        this.clearHold();
        document.removeEventListener('mousemove', onMouseMove);
      }
    };

    // Start the hold timer
    this.holdTimeout = setTimeout(() => {
      act.going = !act.going;
      this.timetableService.markAsGoing(act);
      document.removeEventListener('mousemove', onMouseMove); // Remove the mousemove listener
      console.log('Hold action triggered:', act);
    }, 500); // 1 second hold duration
  
    // Add the mousemove listener
    document.addEventListener('mousemove', onMouseMove);
  }
  
  clearHold(): void {
    clearTimeout(this.holdTimeout); // Clear the timeout if the hold is released
    document.removeEventListener('mousemove', () => {}); // Remove the mousemove listener
    console.log('Hold action cancelled');
  }

  onMouseDown(event: MouseEvent, act: Act): void {
    console.log('MouseDown Event:', event);
    console.log('Act:', act);
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed; // Toggle the collapsed state
  }

  toggleInfo(): void {
    this.showInfo = !this.showInfo; // Toggle the visibility of the speech bubble
  }

  hasEvents(): boolean {
    return this.stages().some(stage => stage.acts.length > 0);
  }
}


//todo ideas
/*
artist detail page
  "show" detail page
  at preview from a "show", max the pictures from friends to smh between 3 or 5, make them random,
  or mabe dont even make a max, just show freinds one after another and make it y overflow so that the user can scroll the friends 
  also the artist pfp should be at the top then a face into the title and below that there should be as said the freinds //? perhaps the time again so that you dont have to read it from the side?

  look at how eros did authguard in ticket project
*/