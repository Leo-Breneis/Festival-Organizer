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

  isCollapsed: boolean = true;
  newFriendName: string = '';

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
      this.friendsService.addFriend(this.newFriendName);
      this.newFriendName = ''; // Clear the input field after adding
    }
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed; // Toggle the collapsed state
  }
}
