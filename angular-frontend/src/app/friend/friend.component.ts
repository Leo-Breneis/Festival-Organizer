import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FriendsService, Friend } from '../friends.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friends',
  standalone: true,
  imports: [NavbarComponent, FormsModule],
  templateUrl: './friend.component.html',
  styleUrl: './friend.component.css'
})
export class FriendComponent {

  isAddFriend: boolean = false; // Track the popup state
  newFriendName: string = '';
  feedbackMessage: string = '';

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

  addFriend() {
    if (this.newFriendName.trim() !== '') {
      this.feedbackMessage = this.friendsService.addFriend(this.newFriendName);
      this.newFriendName = ''; // Clear the input field after adding
    }
  }

  toggleAddFriend(): void {
    this.isAddFriend = !this.isAddFriend; // Toggle the collapsed state
  }
}
