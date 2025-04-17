import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FriendsService, Friend } from '../friends.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friends',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './friend.component.html',
  styleUrl: './friend.component.css'
})
export class FriendComponent {

  constructor(private friendsService : FriendsService, private router : Router) {}

  getRequests() : Friend[] {
    return this.friendsService.getAllFriendRequests(); 
  }

  getFriends() : Friend[] {
    return this.friendsService.getAllFriends(); 
  }

  acceptFriendRequest(friend: Friend) {
    this.friendsService.acceptFriendRequest(friend);
  }

  rejectFriendRequest(friend: Friend) {
    this.friendsService.rejectFriendRequest(friend);
  }

  goToFriendDetail(friendName: string): void {
    this.router.navigate(['/friend', friendName]);
  }

}
