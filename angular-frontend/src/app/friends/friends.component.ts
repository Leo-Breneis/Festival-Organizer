import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FriendsService, Friend } from '../friends.service';

@Component({
  selector: 'app-friends',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './friends.component.html',
  styleUrl: './friends.component.css'
})
export class FriendsComponent {

  constructor(private friendsService : FriendsService) {}

  getFriends() : Friend[] {
    return this.friendsService.getAllFriends(); 
  }
}
