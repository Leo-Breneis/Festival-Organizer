import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { ArtistService, Artist } from '../artists.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.css'
})
export class ArtistComponent {

  constructor(private artistService: ArtistService, private router : Router) {}

  getArtists(): Artist[] {
    return this.artistService.getAllArtists();
  }

  goToArtistDetail(artistName: string): void {
    // Navigate to the artist detail page using the artist's name as the ID
    this.router.navigate(['/artists', artistName]);
  }

  toggleLike(artist: any, event: Event): void {
    event.stopPropagation(); // Prevent triggering the click on the parent div
    artist.liked = !artist.liked;
  }
}
