import { Injectable } from '@angular/core';

export type Artist = {
  name: string;
  img: string;
};

export type Friend = {
  name: string;
  img: string;
  commonArtists?: Artist[];
};

@Injectable({
  providedIn: 'root',
})
export class FriendsService {
  getAllFriends(): Friend[] {
    return [
      {
        name: 'Pipo',
        img: 'friends/Friend1.jpg',
        commonArtists: [
          { name: 'Spiritbox', img: 'artists/paleface.jpg' },
          { name: 'Paleface Swiss', img: 'artists/paleface.jpg' },
          { name: 'De mama', img: 'artists/paleface.jpg' },
        ],
      },
      {
        name: 'Friend2',
        img: 'friends/Friend2.jpg',
      },
      {
        name: 'Karpfen',
        img: 'friends/Friend3.jpg',
        commonArtists: [
          { name: 'Paleface Swiss', img: 'artists/paleface.jpg' },
          { name: 'De mama', img: 'artists/paleface.jpg' },
        ],
      },
      {
        name: 'Sami',
        img: 'friends/Friend4.jpg',
      },
    ];
  }

  getAllFriendRequests(): Friend[] {
    return [
      {
        name: 'Friend5',
        img: 'friends/Friend5.jpg',
      },
      {
        name: 'Friend6',
        img: 'friends/Friend6.jpg',
      },
    ];
  }

  acceptFriendRequest(friend: Friend) {
    // Logic to accept a friend request
    console.log(`Accepted friend request from ${friend.name}`);
  }

  rejectFriendRequest(friend: Friend) {
    // Logic to reject a friend request
    console.log(`Rejected friend request from ${friend.name}`);
  }

  getArtist(id: string): Friend {
    return {
      name: 'Pipo',
      img: 'friends/Friend1.jpg',
      commonArtists: [
        { name: 'Paleface', img: 'artists/paleface.jpg' },
        { name: 'Heaven Shall Burn', img: 'artists/paleface.jpg' },
        { name: 'To the Grave', img: 'artists/paleface.jpg' },
      ],
    };
  }

  addFriend(name: string) : string {
    // Logic to add a new friend
    console.log(`Added new friend: ${name}`);
    return 'Friend request sent successfully!';
  }

  removeFriend(friend: Friend) {
    // Logic to remove a friend
    console.log(`Removed friend: ${friend.name}`);
  }
}
