import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { ArtistService, Artist, Friend } from '../artists.service';


@Component({
  selector: 'app-artist',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.css'
})
export class ArtistComponent {

  constructor(private artistService: ArtistService) {}

  getArtists(): Artist[] {
    return this.artistService.getAllArtists();
  }
}
