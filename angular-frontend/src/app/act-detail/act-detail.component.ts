import { Component, inject } from '@angular/core';
import { Artist, ArtistService } from '../artists.service';

@Component({
  selector: 'app-act-detail',
  standalone: true,
  imports: [],
  templateUrl: './act-detail.component.html',
  styleUrl: './act-detail.component.css'
})
export class ActDetailComponent {

  artistService = @inject(ArtistService)

  artist: Artist? = null;
    
  getArtist(id: number): Artist {
    return this.artistService.getArtist(id);
  }

}
