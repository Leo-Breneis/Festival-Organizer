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
          ]
        },
        {
          name: 'Sami',
          img: 'friends/Friend4.jpg',
        },
      ]
    }
}