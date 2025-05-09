import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { Friend, FriendsService } from '../friends.service';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-friend-detail',
  standalone: true,
  imports: [NavbarComponent, RouterLink],
  templateUrl: './friend-detail.component.html',
  styleUrl: './friend-detail.component.css'
})
export class FriendDetailComponent {

  friend: Friend | null = null;

  constructor(private route: ActivatedRoute, private friendsService: FriendsService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    if(id) {
      this.friend = this.getFriend(id)
    } else {
      alert('missing pathparam id')
    }
  }

  getFriend(id: string): Friend {
    return this.friendsService.getArtist(id);
  }

  removeFriend(friend : Friend | null) {
    if (this.friend) {
      this.friendsService.removeFriend(this.friend);
      this.friend = null; // Clear the friend after removal
    }
  }
}
