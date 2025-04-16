import { Component, inject, signal } from '@angular/core';
import { TimetableService, Act, Day } from '../timetable.service';
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
  protected router = inject(Router);
  constructor(private timetableService: TimetableService) {}

  currentTimePosition: number = 1;
  private intervalId: any;

  ngOnInit(): void {
    this.updateCurrentTimeRow();
    this.intervalId = setInterval(() => {
      this.updateCurrentTimeRow();
    }, 60000); // Update every minute
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
  
    // Each row represents 10 minutes, and each row is 10px tall
    this.currentTimePosition = (totalMinutes / 5) * 10;
  
    console.log('Current Time Position (px):', this.currentTimePosition); // Debugging
  }

  stages = signal<string[]>(['Stage 1', "Lil C's terminal", 'Stage 3']);

  days: Day[] = [
    { id: "tag-1", month: "Mai", day: "1", weekday: "Do", active: false },
    { id: "tag-2", month: "Mai", day: "2", weekday: "Fr", active: true },
    { id: "tag-3", month: "Mai", day: "3", weekday: "Sa", active: false },
    { id: "tag-4", month: "Mai", day: "4", weekday: "So", active: false },
  ];

  getActs(stage: string): Act[] {
    return this.timetableService.getAllActs(stage);
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

  selectDay(id: string) {
    this.days.forEach((day) => (day.active = day.id === id));
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