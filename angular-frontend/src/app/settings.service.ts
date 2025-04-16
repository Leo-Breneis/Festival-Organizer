// filepath: src/app/settings.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private startTime: number = 0; // Default start time (3 AM)
  private endTime: number = 0; // Default end time (3 AM next day)

  getStartTime(): number {
    return this.startTime;
  }

  getEndTime(): number {
    return this.endTime;
  }

  setStartTime(hour: number): void {
    this.startTime = hour;
  }

  setEndTime(hour: number): void {
    this.endTime = hour;
  }
}