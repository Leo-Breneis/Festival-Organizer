import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Festival-Frontend';

  private setViewportHeight = (): void => {
    const vh = window.innerHeight * 0.01; // Get 1% of the viewport height
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    console.log(`Viewport height set to: ${vh}px`); // Debugging
  };

  ngOnInit(): void {
    this.setViewportHeight();

    // Update the height on window resize
    window.addEventListener('resize', this.setViewportHeight);
  }

  ngOnDestroy(): void {
    // Clean up the event listener
    window.removeEventListener('resize', this.setViewportHeight);
  }
}
