import { Component, inject } from '@angular/core';
import { Artist, ArtistService } from '../artists.service';
import { NavbarComponent } from "../navbar/navbar.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist-detail',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './artist-detail.component.html',
  styleUrl: './artist-detail.component.css'
})
export class ArtistDetailComponent {

  constructor(private artistService : ArtistService, private route : ActivatedRoute) {}

  artist: Artist | null = null;
  
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    if(id) {
      this.artist = this.getArtist(id)
    } else {
      alert('missing pathparam id')
    }
  }

  getArtist(id: string): Artist {
    return this.artistService.getArtist(id);
  }

}
