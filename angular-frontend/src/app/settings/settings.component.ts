import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { SettingsService } from '../settings.service';

@Component({
  standalone: true,
  imports: [FormsModule], // Add FormsModule here
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent {
  startTime: number;
  endTime: number;

  constructor(private settingsService: SettingsService) {
    this.startTime = this.settingsService.getStartTime();
    this.endTime = this.settingsService.getEndTime();
  }

  saveSettings(): void {
    this.settingsService.setStartTime(this.startTime);
    this.settingsService.setEndTime(this.endTime);
  }

  validateTime(field: 'startTime' | 'endTime'): void {
    if (this[field] > 23) {
      this[field] = 0; // Wrap around to 0 if above 23
    } else if (this[field] < 0) {
      this[field] = 23; // Wrap around to 23 if below 0
    }
  }

  isFullDay(): boolean {
    const totalHours = (this.endTime > this.startTime)
      ? this.endTime - this.startTime
      : 24 - this.startTime + this.endTime;
    return totalHours === 24;
  }

  isInvalidTimeRange(): boolean {
    const totalHours = (this.endTime > this.startTime)
      ? this.endTime - this.startTime
      : 24 - this.startTime + this.endTime;
    return totalHours <= 0 || totalHours > 24; // Invalid if totalHours is non-positive or exceeds 24
  }
}