import { Injectable } from '@angular/core';
import { Artist } from './artists.service';
import { Friend } from './friends.service';

export type Act = {
  id: string;
  stage: string;
  beginTime: Date;
  endTime: Date;
  going: boolean;
  artist: Artist;
  friends?: Friend[];
};

export type Day = {
  id: string;
  month: string;
  day: string;
  weekday: string;
  active: boolean;
};

export type Stage = {
  name: string;
  acts: Act[];
};

@Injectable({
  providedIn: 'root',
})
export class TimetableService {
  getAllActs(): Stage[] {
    
    return [
      {
        name: 'Stage 1',
        acts: 
        [
          {
            id: 'eineid1',
            stage: 'Stage 1',
            beginTime: new Date('2023-10-01T11:50:00'),
            endTime: new Date('2023-10-01T13:00:00'),
            going: false,
            artist: {
              name: 'Spiritbox',
              img: 'artists/paleface.jpg',
            },
            friends: [
              { name: "friend4", img: 'friends/Friend4.jpg' },
              { name: "friend2", img: 'friends/Friend2.jpg' },
              { name: "friend6", img: 'friends/Friend6.jpg' },
            ],
          },
          {
            id: 'eineid2',
            stage: 'Stage 1',
            beginTime: new Date('2023-10-01T13:35:00'),
            endTime: new Date('2023-10-01T14:30:00'),
            going: true,
            artist: {
              name: 'To the Grave',
              img: 'artists/paleface.jpg',
            },
          },
          {
            id: 'eineid3',
            stage: 'Stage 1',
            beginTime: new Date('2023-10-01T16:00:00'),
            endTime: new Date('2023-10-01T16:30:00'),
            going: false,
            artist: {
              name: 'Whitechapel',
              img: 'artists/paleface.jpg',
            },
          },
          {
            id: 'eineid4',
            stage: 'Stage 1',
            going: false,
            beginTime: new Date('2023-10-01T17:00:00'),
            endTime: new Date('2023-10-01T19:00:00'),
            artist: {
              name: 'Ghostkid',
              img: 'artists/paleface.jpg',
            },
          },
          {
            id: 'eineid5',
            stage: 'Stage 1',
            beginTime: new Date('2023-10-01T20:00:00'),
            endTime: new Date('2023-10-01T21:00:00'),
            going: false,
            artist: {
              name: 'Within Destruction',
              img: 'artists/paleface.jpg',
            },
            friends: [
              { name: "friend4", img: 'friends/Friend4.jpg' },
              { name: "friend2", img: 'friends/Friend2.jpg' },
              { name: "friend6", img: 'friends/Friend6.jpg' },
            ],
          },
          {
            id: 'eineid6',
            stage: 'Stage 1',
            beginTime: new Date('2023-10-01T21:30:00'),
            endTime: new Date('2023-10-01T23:55:00'),
            going: true,
            artist: {
              name: 'Shadow of Intent',
              img: 'artists/paleface.jpg',
            },
            friends: [
              { name: "friend4", img: 'friends/Friend4.jpg' },
              { name: "friend1", img: 'friends/Friend1.jpg' },
              { name: "friend5", img: 'friends/Friend5.jpg' },
              { name: "friend6", img: 'friends/Friend6.jpg' },
              { name: "friend3", img: 'friends/Friend3.jpg' },
            ],
          },
        ]
      },
      {
        name: "Lil C's terminal",
        acts: 
        [
          {
            id: 'eineid7',
            stage: "Lil C's terminal",
            beginTime: new Date('2023-10-01T11:00:00'),
            endTime: new Date('2023-10-01T12:00:00'),
            going: false,
            artist: {
              name: 'Architects',
              img: 'artists/paleface.jpg',
            },
            friends: [
              { name: "friend3", img: 'friends/Friend3.jpg' },
              { name: "friend4", img: 'friends/Friend4.jpg' },
              { name: "friend1", img: 'friends/Friend1.jpg' },
              { name: "friend5", img: 'friends/Friend5.jpg' },
              { name: "friend6", img: 'friends/Friend6.jpg' },
              { name: "friend1", img: 'friends/Friend1.jpg' },
              { name: "friend6", img: 'friends/Friend6.jpg' },
              { name: "friend3", img: 'friends/Friend3.jpg' },
            ],
          },
          {
            id: 'eineid8',
            stage: "Lil C's terminal",
            beginTime: new Date('2023-10-01T12:30:00'),
            endTime: new Date('2023-10-01T14:00:00'),
            going: false,
            artist: {
              name: 'Parkway Drive',
              img: 'artists/paleface.jpg',
            },
            friends: [{ name: "friend3", img: 'friends/Friend3.jpg' }],
          },
          {
            id: 'eineid9',
            stage: "Lil C's terminal",
            beginTime: new Date('2023-10-01T15:00:00'),
            endTime: new Date('2023-10-01T15:30:00'),
            going: false,
            artist: {
              name: 'August Burns Red',
              img: 'artists/paleface.jpg',
            },
          },
          {
            id: 'eineid10',
            stage: "Lil C's terminal",
            beginTime: new Date('2023-10-01T16:00:00'),
            endTime: new Date('2023-10-01T18:00:00'),
            going: false,
            artist: {
              name: 'DJ Hashbang',
              img: 'artists/paleface.jpg',
            },
          },
          {
            id: 'eineid11',
            stage: "Lil C's terminal",
            beginTime: new Date('2023-10-01T19:20:00'),
            endTime: new Date('2023-10-01T21:50:00'),
            going: false,
            artist: {
              name: 'Lil C',
              img: 'artists/paleface.jpg',
            },
            friends: [
              { name: "friend1", img: 'friends/Friend1.jpg' },
              { name: "friend6", img: 'friends/Friend6.jpg' },
              { name: "friend3", img: 'friends/Friend3.jpg' },
            ],
          },
          {
            id: 'eineid12',
            stage: "Lil C's terminal",
            beginTime: new Date('2023-10-01T22:00:00'),
            endTime: new Date('2023-10-01T23:45:00'),
            going: false,
            artist: {
              name: 'Fatal StageOverflow',
              img: 'artists/paleface.jpg',
            },
            friends: [
              { name: "friend1", img: 'friends/Friend1.jpg' },
              { name: "friend4", img: 'friends/Friend4.jpg' },
              { name: "friend3", img: 'friends/Friend3.jpg' },
            ],
          },
        ]
      },
      {
        name: 'Stage 3',
        acts: 
        [
          {
          id: 'eineid13',
          stage: 'Stage 3',
          beginTime: new Date('2023-10-01T13:00:00'),
          endTime: new Date('2023-10-01T13:30:00'),
          going: false,
          artist: {
            name: 'Make Them Suffer',
            img: 'artists/paleface.jpg',
          },
        },
        {
          id: 'eineid14',
          stage: 'Stage 3',
          beginTime: new Date('2023-10-01T14:30:00'),
          endTime: new Date('2023-10-01T15:00:00'),
          going: false,
          artist: {
            name: 'Novelists',
            img: 'artists/paleface.jpg',
          },
        },
        {
          id: 'eineid15',
          stage: 'Stage 3',
          beginTime: new Date('2023-10-01T15:00:00'),
          endTime: new Date('2023-10-01T15:30:00'),
          going: true,
          artist: {
            name: 'Sleep Token',
            img: 'artists/paleface.jpg',
          },
        },
        {
          id: 'eineid16',
          stage: 'Stage 3',
          beginTime: new Date('2023-10-01T16:00:00'),
          endTime: new Date('2023-10-01T18:00:00'),
          going: true,
          artist: {
            name: 'Vulvodynia',
            img: 'artists/paleface.jpg',
          },
          friends: [{ name: "friend2", img: 'friends/Friend2.jpg' }],
        },
        {
          id: 'eineid17',
          stage: 'Stage 3',
          beginTime: new Date('2023-10-01T19:30:00'),
          endTime: new Date('2023-10-01T20:20:00'),
          going: false,
          artist: {
            name: 'Fit for a King',
            img: 'artists/paleface.jpg',
          },
          friends: [
            { name: "friend2", img: 'friends/Friend2.jpg' },
            { name: "friend6", img: 'friends/Friend6.jpg' },
            { name: "friend1", img: 'friends/Friend1.jpg' },
          ],
        },
        {
          id: 'eineid18',
          stage: 'Stage 3',
          beginTime: new Date('2023-10-01T20:30:00'),
          endTime: new Date('2023-10-01T21:30:00'),
          going: false,
          artist: {
            name: 'Thy Art Is Murder',
            img: 'artists/paleface.jpg',
          },
        },
      ]
      }
    ]
  }

  getAct(id: string) : Act {
    return {
      id: 'eineid6',
      stage: 'Stage 3',
      beginTime: new Date('2023-10-01T21:05:00'),
      endTime: new Date('2023-10-01T23:55:00'),
      going: true,
      artist: {
        name: 'Shadow of Intent',
        img: 'artists/paleface.jpg',
      },
      friends: [
        { name: "friend4", img: 'friends/Friend4.jpg' },
        { name: "friend1", img: 'friends/Friend1.jpg' },
        { name: "friend5", img: 'friends/Friend5.jpg' },
        { name: "friend6", img: 'friends/Friend6.jpg' },
        { name: "friend3", img: 'friends/Friend3.jpg' },
      ],
    }
  }

  markAsGoing(act: Act) {

  }

  constructor() {}
}
