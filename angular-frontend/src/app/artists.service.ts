import { Injectable } from '@angular/core';
import { Friend } from './friends.service';

export type Artist = {
  name: string;
  img: string;
  liked?: boolean;
  commonFriends?: Friend[];
};

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  getAllArtists(): Artist[] {
    return [
      {
        name: 'Spiritbox',
        img: 'artists/paleface.jpg',
        liked: false,
        commonFriends: [
          { name: 'friend4', img: 'friends/Friend4.jpg' },
          { name: 'friend2', img: 'friends/Friend2.jpg' },
          { name: 'friend6', img: 'friends/Friend6.jpg' },
        ],
      },
      {
        name: 'To the Grave',
        img: 'artists/paleface.jpg',
        liked: false,
      },
      {
        name: 'Whitechapel',
        img: 'artists/paleface.jpg',
        liked: false,
      },
      {
        name: 'Ghostkid',
        img: 'artists/paleface.jpg',
        liked: false,
      },
      {
        name: 'Within Destruction',
        img: 'artists/paleface.jpg',
        liked: false,
        commonFriends: [
          { name: 'friend4', img: 'friends/Friend4.jpg' },
          { name: 'friend2', img: 'friends/Friend2.jpg' },
          { name: 'friend6', img: 'friends/Friend6.jpg' },
        ],
      },
      {
        name: 'Shadow of Intent',
        img: 'artists/paleface.jpg',
        liked: false,
        commonFriends: [
          { name: 'friend4', img: 'friends/Friend4.jpg' },
          { name: 'friend1', img: 'friends/Friend1.jpg' },
          { name: 'friend4', img: 'friends/Friend4.jpg' },
          { name: 'friend2', img: 'friends/Friend2.jpg' },
          { name: 'friend6', img: 'friends/Friend6.jpg' },
          { name: 'friend5', img: 'friends/Friend5.jpg' },
          { name: 'friend1', img: 'friends/Friend1.jpg' },
          { name: 'friend4', img: 'friends/Friend4.jpg' },
          { name: 'friend2', img: 'friends/Friend2.jpg' },
          { name: 'friend1', img: 'friends/Friend1.jpg' },
          { name: 'friend4', img: 'friends/Friend4.jpg' },
          { name: 'friend2', img: 'friends/Friend2.jpg' },
          { name: 'friend1', img: 'friends/Friend1.jpg' },
          { name: 'friend4', img: 'friends/Friend4.jpg' },
          { name: 'friend2', img: 'friends/Friend2.jpg' },
          { name: 'friend1', img: 'friends/Friend1.jpg' },
          { name: 'friend4', img: 'friends/Friend4.jpg' },
          { name: 'friend2', img: 'friends/Friend2.jpg' },
        ],
      },
      {
        name: 'Architects',
        img: 'artists/paleface.jpg',
        liked: false,
        commonFriends: [{ name: 'friend3', img: 'friends/Friend3.jpg' }],
      },
      {
        name: 'Parkway Drive',
        img: 'artists/paleface.jpg',
        liked: false,
        commonFriends: [{ name: 'friend3', img: 'friends/Friend3.jpg' }],
      },
      {
        name: 'Paleface',
        img: 'artists/paleface.jpg',
        liked: false,
        commonFriends: [
          { name: 'friend4', img: 'friends/Friend4.jpg' },
          { name: 'friend2', img: 'friends/Friend2.jpg' },
          { name: 'friend6', img: 'friends/Friend6.jpg' },
        ],
      },
      {
        name: 'DJ Hashbang',
        img: 'artists/paleface.jpg',
        liked: false,
      },
      {
        name: 'Lil C',
        img: 'artists/paleface.jpg',
        liked: false,
        commonFriends: [
          { name: 'friend1', img: 'friends/Friend1.jpg' },
          { name: 'friend6', img: 'friends/Friend6.jpg' },
          { name: 'friend3', img: 'friends/Friend3.jpg' },
        ],
      },
      {
        name: 'Fatal StageOverflow',
        img: 'artists/paleface.jpg',
        liked: false,
        commonFriends: [
          { name: 'friend1', img: 'friends/Friend1.jpg' },
          { name: 'friend4', img: 'friends/Friend4.jpg' },
          { name: 'friend3', img: 'friends/Friend3.jpg' },
        ],
      },
      {
        name: 'Make Them Suffer',
        img: 'artists/paleface.jpg',
        liked: false,
      },
      {
        name: 'Novelists',
        img: 'artists/paleface.jpg',
        liked: false,
      },
      {
        name: 'Sleep Token',
        img: 'artists/paleface.jpg',
        liked: false,
      },
      {
        name: 'Vulvodynia',
        img: 'artists/paleface.jpg',
        liked: false,
        commonFriends: [{ name: 'friend2', img: 'friends/Friend2.jpg' }],
      },
      {
        name: 'Fit for a King',
        img: 'artists/paleface.jpg',
        liked: false,
        commonFriends: [
          { name: 'friend2', img: 'friends/Friend2.jpg' },
          { name: 'friend6', img: 'friends/Friend6.jpg' },
          { name: 'friend1', img: 'friends/Friend1.jpg' },
        ],
      },
      {
        name: 'Thy Art Is Murder',
        img: 'artists/paleface.jpg',
        liked: false,
      },
    ];
  }

  getArtist(id: string): Artist {
    return {
      name: 'PALEFACE SWISS THE REAL',
      img: 'artists/paleface.jpg',
      liked: false,
      commonFriends: [
        { name: 'friend4', img: 'friends/Friend4.jpg' },
        { name: 'friend2', img: 'friends/Friend2.jpg' },
        { name: 'friend6', img: 'friends/Friend6.jpg' },
      ],
    };
  }

  toggleLikeArtist(artist: Artist, likeStatus: boolean) {
    
  }
}
