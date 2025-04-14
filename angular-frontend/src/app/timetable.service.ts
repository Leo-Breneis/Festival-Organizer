import { Injectable } from '@angular/core';

export type Act = {
  name: string;
  beginTime: Date;
  endTime: Date;
  artistImg: string;
  friends?: Friend[];
};

export type Day = {
  id: string;
  month: string;
  day: string;
  weekday: string;
  active: boolean;
};

export type Friend = {
  name: string
  img: string
}

@Injectable({
  providedIn: 'root',
})
export class TimetableService {
  getAllActs(stage: string): Act[] {
    console.log('Getting acts for stage', stage);
    if (stage === 'Stage 1') {
      return [
        {
          name: 'Spiritbox',
          beginTime: new Date('2023-10-01T11:50:00'),
          endTime: new Date('2023-10-01T13:00:00'),
          friends: [
            {
              name: "friend4", 
              img: 'friends/Friend4.jpg'
            },
            {
              name: "friend2", 
              img: 'friends/Friend2.jpg'
            },{
              name: "friend6", 
              img: 'friends/Friend6.jpg'
            }, 
          ],
          artistImg: 'artists/paleface.jpg',
        },
        {
          name: 'To the Grave',
          beginTime: new Date('2023-10-01T13:35:00'),
          endTime: new Date('2023-10-01T14:30:00'),
          artistImg: 'artists/paleface.jpg',
        },
        {
          name: 'Whitechapel',
          beginTime: new Date('2023-10-01T16:00:00'),
          endTime: new Date('2023-10-01T16:30:00'),
          artistImg: 'artists/paleface.jpg',
        },
        {
          name: 'Ghostkid',
          beginTime: new Date('2023-10-01T17:00:00'),
          endTime: new Date('2023-10-01T19:00:00'),
          artistImg: 'artists/paleface.jpg',
        },
        {
          name: 'Within Destruction',
          beginTime: new Date('2023-10-01T20:00:00'),
          endTime: new Date('2023-10-01T21:00:00'),
          artistImg: 'artists/paleface.jpg',
          friends: [
            {
              name: "friend4", 
              img: 'friends/Friend4.jpg'
            },
            {
              name: "friend2", 
              img: 'friends/Friend2.jpg'
            },{
              name: "friend6", 
              img: 'friends/Friend6.jpg'
            }, 
          ]
        },
        {
          name: 'Shadow of Intent',
          beginTime: new Date('2023-10-01T21:30:00'),
          endTime: new Date('2023-10-01T22:30:00'),
          artistImg: 'artists/paleface.jpg',
          friends: [
            {
              name: "friend4", 
              img: 'friends/Friend4.jpg'
            },
            {
              name: "friend1", 
              img: 'friends/Friend1.jpg'
            },{
              name: "friend5", 
              img: 'friends/Friend5.jpg'
            },
            {
              name: "friend4", 
              img: 'friends/Friend4.jpg'
            },
            {
              name: "friend2", 
              img: 'friends/Friend2.jpg'
            },{
              name: "friend6", 
              img: 'friends/Friend6.jpg'
            }, 
            {
              name: "friend4", 
              img: 'friends/Friend4.jpg'
            },
            {
              name: "friend1", 
              img: 'friends/Friend1.jpg'
            },{
              name: "friend5", 
              img: 'friends/Friend5.jpg'
            }, 
            {
              name: "friend1", 
              img: 'friends/Friend1.jpg'
            },
            {
              name: "friend6", 
              img: 'friends/Friend6.jpg'
            },{
              name: "friend3", 
              img: 'friends/Friend3.jpg'
            }, 
          ]
        },
      ];
    } else if (stage === "Lil C's terminal") {
      return [
        {
          name: 'Architects',
          beginTime: new Date('2023-10-01T11:00:00'),
          endTime: new Date('2023-10-01T12:00:00'),
          artistImg: 'artists/paleface.jpg',
        },
        {
          name: 'Parkway Drive',
          beginTime: new Date('2023-10-01T12:30:00'),
          endTime: new Date('2023-10-01T14:00:00'),
          artistImg: 'artists/paleface.jpg',
        },
        {
          name: 'August Burns Red',
          beginTime: new Date('2023-10-01T15:00:00'),
          endTime: new Date('2023-10-01T15:30:00'),
          artistImg: 'artists/paleface.jpg',
        },
        {
          name: 'DJ Hashbang',
          beginTime: new Date('2023-10-01T16:00:00'),
          endTime: new Date('2023-10-01T18:00:00'),
          artistImg: 'artists/paleface.jpg',
        },
        {
          name: 'Lil C',
          beginTime: new Date('2023-10-01T19:20:00'),
          endTime: new Date('2023-10-01T21:50:00'),
          artistImg: 'artists/paleface.jpg',
          friends: [
            {
              name: "friend1", 
              img: 'friends/Friend1.jpg'
            },
            {
              name: "friend6", 
              img: 'friends/Friend6.jpg'
            },{
              name: "friend3", 
              img: 'friends/Friend3.jpg'
            }, 
          ]
        },
        {
          name: 'Fatal StageOverflow',
          beginTime: new Date('2023-10-01T22:00:00'),
          endTime: new Date('2023-10-01T23:30:00'),
          artistImg: 'artists/paleface.jpg',
          friends: [
            {
              name: "friend1", 
              img: 'friends/Friend1.jpg'
            },
            {
              name: "friend4", 
              img: 'friends/Friend4.jpg'
            },{
              name: "friend3", 
              img: 'friends/Friend3.jpg'
            }, 
          ]
        },
      ];
    } else if (stage === 'Stage 3') {
      return [
        {
          name: 'Make Them Suffer',
          beginTime: new Date('2023-10-01T13:00:00'),
          endTime: new Date('2023-10-01T13:30:00'),
          artistImg: 'artists/paleface.jpg',
        },
        {
          name: 'Novelists',
          beginTime: new Date('2023-10-01T14:30:00'),
          endTime: new Date('2023-10-01T15:00:00'),
          artistImg: 'artists/paleface.jpg',
        },
        {
          name: 'Sleep Token',
          beginTime: new Date('2023-10-01T15:00:00'),
          endTime: new Date('2023-10-01T15:30:00'),
          artistImg: 'artists/paleface.jpg',
        },
        {
          name: 'Vulvodynia',
          beginTime: new Date('2023-10-01T16:00:00'),
          endTime: new Date('2023-10-01T18:00:00'),
          artistImg: 'artists/paleface.jpg',
          friends: [
            {
              name: "friend2", 
              img: 'friends/Friend2.jpg'
            } 
          ]
        },
        {
          name: 'Fit for a King',
          beginTime: new Date('2023-10-01T19:30:00'),
          endTime: new Date('2023-10-01T20:20:00'),
          artistImg: 'artists/paleface.jpg',
          friends: [
            {
              name: "friend2",
              img: 'friends/Friend2.jpg'
            },
            {
              name: "friend6",
              img: 'friends/Friend6.jpg'
            },{
              name: "friend1",
              img: 'friends/Friend1.jpg'
            }, 
          ]  
        },
        {
          name: 'Thy Art Is Murder',
          beginTime: new Date('2023-10-01T20:30:00'),
          endTime: new Date('2023-10-01T21:30:00'),
          artistImg: 'artists/paleface.jpg',
        },
      ];
    } else {
      return [];
    }
  }

  constructor() {}
}
