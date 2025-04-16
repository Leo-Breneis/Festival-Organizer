import { Injectable } from '@angular/core';

export type Artist = {
  name: string;
  img: string;
  commonFriends: Friend[];
};

export type Friend = {
  name: string;
  img: string;
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
          commonFriends: [
            { name: 'friend4', img: 'friends/Friend4.jpg' },
            { name: 'friend2', img: 'friends/Friend2.jpg' },
            { name: 'friend6', img: 'friends/Friend6.jpg' },
          ],
        },
        {
          name: 'To the Grave',
          img: 'artists/paleface.jpg',
          commonFriends: [],
        },
        {
          name: 'Whitechapel',
          img: 'artists/paleface.jpg',
          commonFriends: [],
        },
        {
          name: 'Ghostkid',
          img: 'artists/paleface.jpg',
          commonFriends: [],
        },
        {
          name: 'Within Destruction',
          img: 'artists/paleface.jpg',
          commonFriends: [
            { name: 'friend4', img: 'friends/Friend4.jpg' },
            { name: 'friend2', img: 'friends/Friend2.jpg' },
            { name: 'friend6', img: 'friends/Friend6.jpg' },
          ],
        },
        {
          name: 'Shadow of Intent',
          img: 'artists/paleface.jpg',
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
          commonFriends: [{ name: 'friend3', img: 'friends/Friend3.jpg' }],
        },
        {
          name: 'Parkway Drive',
          img: 'artists/paleface.jpg',
          commonFriends: [{ name: 'friend3', img: 'friends/Friend3.jpg' }],
        },
        {
          name: 'August Burns Red',
          img: 'artists/paleface.jpg',
          commonFriends: [],
        },
        {
          name: 'DJ Hashbang',
          img: 'artists/paleface.jpg',
          commonFriends: [],
        },
        {
          name: 'Lil C',
          img: 'artists/paleface.jpg',
          commonFriends: [
            { name: 'friend1', img: 'friends/Friend1.jpg' },
            { name: 'friend6', img: 'friends/Friend6.jpg' },
            { name: 'friend3', img: 'friends/Friend3.jpg' },
          ],
        },
        {
          name: 'Fatal StageOverflow',
          img: 'artists/paleface.jpg',
          commonFriends: [
            { name: 'friend1', img: 'friends/Friend1.jpg' },
            { name: 'friend4', img: 'friends/Friend4.jpg' },
            { name: 'friend3', img: 'friends/Friend3.jpg' },
          ],
        },
        {
          name: 'Make Them Suffer',
          img: 'artists/paleface.jpg',
          commonFriends: [],
        },
        {
          name: 'Novelists',
          img: 'artists/paleface.jpg',
          commonFriends: [],
        },
        {
          name: 'Sleep Token',
          img: 'artists/paleface.jpg',
          commonFriends: [],
        },
        {
          name: 'Vulvodynia',
          img: 'artists/paleface.jpg',
          commonFriends: [{ name: 'friend2', img: 'friends/Friend2.jpg' }],
        },
        {
          name: 'Fit for a King',
          img: 'artists/paleface.jpg',
          commonFriends: [
            { name: 'friend2', img: 'friends/Friend2.jpg' },
            { name: 'friend6', img: 'friends/Friend6.jpg' },
            { name: 'friend1', img: 'friends/Friend1.jpg' },
          ],
        },
        {
          name: 'Thy Art Is Murder',
          img: 'artists/paleface.jpg',
          commonFriends: [],
        },
      ];
    }
}