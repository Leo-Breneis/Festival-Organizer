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
  getAllActs(day: Day): Stage[] {
    if (day.id === 'tag-4') {
      // Saturday, June 14
      return [
        {
          name: 'Red Stage',
          acts: [
            {
              id: 'act1',
              stage: 'Red Stage',
              beginTime: new Date('2025-06-14T11:30:00'),
              endTime: new Date('2025-06-14T12:15:00'),
              going: false,
              artist: {
                name: "Wendi's Böhmische Blasmusik",
                img: 'artists/wendis.jpg',
              },
            },
            {
              id: 'act2',
              stage: 'Red Stage',
              beginTime: new Date('2025-06-14T12:40:00'),
              endTime: new Date('2025-06-14T13:20:00'),
              going: false,
              artist: { name: 'Django 3000', img: 'artists/django3000.jpg' },
            },
            {
              id: 'act3',
              stage: 'Red Stage',
              beginTime: new Date('2025-06-14T13:50:00'),
              endTime: new Date('2025-06-14T14:30:00'),
              going: false,
              artist: { name: 'Versengold', img: 'artists/versengold.jpg' },
            },
            {
              id: 'act4',
              stage: 'Red Stage',
              beginTime: new Date('2025-06-14T15:00:00'),
              endTime: new Date('2025-06-14T16:00:00'),
              going: false,
              artist: { name: 'Imminence', img: 'artists/imminence.jpg' },
            },
            {
              id: 'act5',
              stage: 'Red Stage',
              beginTime: new Date('2025-06-14T16:30:00'),
              endTime: new Date('2025-06-14T17:40:00'),
              going: false,
              artist: { name: 'Landmvrks', img: 'artists/landmvrks.jpg' },
            },
            {
              id: 'act6',
              stage: 'Red Stage',
              beginTime: new Date('2025-06-14T18:10:00'),
              endTime: new Date('2025-06-14T19:20:00'),
              going: false,
              artist: { name: 'Dragonforce', img: 'artists/dragonforce.jpg' },
            },
            {
              id: 'act7',
              stage: 'Red Stage',
              beginTime: new Date('2025-06-14T19:50:00'),
              endTime: new Date('2025-06-14T21:05:00'),
              going: false,
              artist: { name: 'Skillet', img: 'artists/skillet.jpg' },
            },
            {
              id: 'act8',
              stage: 'Red Stage',
              beginTime: new Date('2025-06-14T21:35:00'),
              endTime: new Date('2025-06-14T22:50:00'),
              going: false,
              artist: {
                name: 'Heaven Shall Burn',
                img: 'artists/heavenshallburn.jpg',
              },
            },
            {
              id: 'act9',
              stage: 'Red Stage',
              beginTime: new Date('2025-06-14T23:25:00'),
              endTime: new Date('2025-06-15T00:55:00'),
              going: false,
              artist: {
                name: 'Dream Theater',
                img: 'artists/dreamtheater.jpg',
              },
            },
          ],
        },
        {
          name: 'Red Bull Stage',
          acts: [
            {
              id: 'act10',
              stage: 'Red Bull Stage',
              beginTime: new Date('2025-06-14T14:15:00'),
              endTime: new Date('2025-06-14T14:45:00'),
              going: false,
              artist: { name: 'Voting Act #3', img: 'artists/votingact3.jpg' },
            },
            {
              id: 'act11',
              stage: 'Red Bull Stage',
              beginTime: new Date('2025-06-14T15:15:00'),
              endTime: new Date('2025-06-14T15:45:00'),
              going: false,
              artist: {
                name: 'Leons Massacre',
                img: 'artists/leonsmassacre.jpg',
              },
            },
            {
              id: 'act12',
              stage: 'Red Bull Stage',
              beginTime: new Date('2025-06-14T16:15:00'),
              endTime: new Date('2025-06-14T16:55:00'),
              going: false,
              artist: { name: 'Halflives', img: 'artists/halflives.jpg' },
            },
            {
              id: 'act13',
              stage: 'Red Bull Stage',
              beginTime: new Date('2025-06-14T17:25:00'),
              endTime: new Date('2025-06-14T18:05:00'),
              going: false,
              artist: {
                name: 'Self Deception',
                img: 'artists/selfdeception.jpg',
              },
            },
            {
              id: 'act14',
              stage: 'Red Bull Stage',
              beginTime: new Date('2025-06-14T18:35:00'),
              endTime: new Date('2025-06-14T19:25:00'),
              going: false,
              artist: {
                name: 'Paleface Swiss',
                img: 'artists/palefaceswiss.jpg',
              },
            },
            {
              id: 'act15',
              stage: 'Red Bull Stage',
              beginTime: new Date('2025-06-14T19:55:00'),
              endTime: new Date('2025-06-14T20:45:00'),
              going: false,
              artist: { name: 'Adept', img: 'artists/adept.jpg' },
            },
            {
              id: 'act16',
              stage: 'Red Bull Stage',
              beginTime: new Date('2025-06-14T21:15:00'),
              endTime: new Date('2025-06-14T22:30:00'),
              going: false,
              artist: { name: 'Danko Jones', img: 'artists/dankojones.jpg' },
            },
          ],
        },
        {
          name: 'Blue Stage',
          acts: [
            {
              id: 'act17',
              stage: 'Blue Stage',
              beginTime: new Date('2025-06-14T13:30:00'),
              endTime: new Date('2025-06-14T14:00:00'),
              going: false,
              artist: {
                name: 'All Faces Down',
                img: 'artists/allfacesdown.jpg',
              },
            },
            {
              id: 'act18',
              stage: 'Blue Stage',
              beginTime: new Date('2025-06-14T14:20:00'),
              endTime: new Date('2025-06-14T14:55:00'),
              going: false,
              artist: {
                name: 'The Butcher Sisters',
                img: 'artists/thebutchersisters.jpg',
              },
            },
            {
              id: 'act19',
              stage: 'Blue Stage',
              beginTime: new Date('2025-06-14T15:25:00'),
              endTime: new Date('2025-06-14T16:15:00'),
              going: false,
              artist: {
                name: 'Me First & The Gimme Gimmes',
                img: 'artists/mefirst.jpg',
              },
            },
            {
              id: 'act20',
              stage: 'Blue Stage',
              beginTime: new Date('2025-06-14T16:45:00'),
              endTime: new Date('2025-06-14T17:35:00'),
              going: false,
              artist: { name: 'Mehnersmoos', img: 'artists/mehnersmoos.jpg' },
            },
            {
              id: 'act21',
              stage: 'Blue Stage',
              beginTime: new Date('2025-06-14T18:05:00'),
              endTime: new Date('2025-06-14T19:05:00'),
              going: false,
              artist: { name: 'Idles', img: 'artists/idles.jpg' },
            },
            {
              id: 'act22',
              stage: 'Blue Stage',
              beginTime: new Date('2025-06-14T19:35:00'),
              endTime: new Date('2025-06-14T20:50:00'),
              going: false,
              artist: { name: 'Alligatoah', img: 'artists/alligatoah.jpg' },
            },
            {
              id: 'act23',
              stage: 'Blue Stage',
              beginTime: new Date('2025-06-14T21:30:00'),
              endTime: new Date('2025-06-14T22:45:00'),
              going: false,
              artist: { name: 'Wanda', img: 'artists/wanda.jpg' },
            },
            {
              id: 'act24',
              stage: 'Blue Stage',
              beginTime: new Date('2025-06-14T23:00:00'),
              endTime: new Date('2025-06-15T01:00:00'),
              going: false,
              artist: {
                name: 'Electric Callboy',
                img: 'artists/electriccallboy.jpg',
              },
            },
          ],
        },
      ];
    } else if (day.id === 'tag-3') {
      // Friday, June 13
      return [
        {
          name: 'Red Stage',
          acts: [
            {
              id: 'act1',
              stage: 'Red Stage',
              beginTime: new Date('2025-06-13T13:45:00'),
              endTime: new Date('2025-06-13T14:15:00'),
              going: false,
              artist: { name: 'Sawyer Hill', img: 'artists/sawyerhill.jpg' },
            },
            {
              id: 'act2',
              stage: 'Red Stage',
              beginTime: new Date('2025-06-13T14:40:00'),
              endTime: new Date('2025-06-13T15:20:00'),
              going: false,
              artist: {
                name: 'Deine Cousine',
                img: 'artists/deinecousine.jpg',
              },
            },
            {
              id: 'act3',
              stage: 'Red Stage',
              beginTime: new Date('2025-06-13T15:50:00'),
              endTime: new Date('2025-06-13T16:35:00'),
              going: false,
              artist: { name: 'Krautschädl', img: 'artists/krautschaedl.jpg' },
            },
            {
              id: 'act4',
              stage: 'Red Stage',
              beginTime: new Date('2025-06-13T17:05:00'),
              endTime: new Date('2025-06-13T18:00:00'),
              going: false,
              artist: { name: 'GReeeN', img: 'artists/green.jpg' },
            },
            {
              id: 'act5',
              stage: 'Red Stage',
              beginTime: new Date('2025-06-13T18:30:00'),
              endTime: new Date('2025-06-13T19:40:00'),
              going: false,
              artist: {
                name: 'Irie Révoltés',
                img: 'artists/irierevoltes.jpg',
              },
            },
            {
              id: 'act6',
              stage: 'Red Stage',
              beginTime: new Date('2025-06-13T20:10:00'),
              endTime: new Date('2025-06-13T21:20:00'),
              going: false,
              artist: { name: 'Biffy Clyro', img: 'artists/biffyclyro.jpg' },
            },
            {
              id: 'act7',
              stage: 'Red Stage',
              beginTime: new Date('2025-06-13T21:50:00'),
              endTime: new Date('2025-06-13T23:05:00'),
              going: false,
              artist: { name: 'Folkshilfe', img: 'artists/folkshilfe.jpg' },
            },
            {
              id: 'act8',
              stage: 'Red Stage',
              beginTime: new Date('2025-06-13T23:35:00'),
              endTime: new Date('2025-06-14T00:50:00'),
              going: false,
              artist: { name: 'SDP', img: 'artists/sdp.jpg' },
            },
          ],
        },
        {
          name: 'Red Bull Stage',
          acts: [
            {
              id: 'act9',
              stage: 'Red Bull Stage',
              beginTime: new Date('2025-06-13T14:15:00'),
              endTime: new Date('2025-06-13T14:45:00'),
              going: false,
              artist: { name: 'Voting Act #2', img: 'artists/votingact2.jpg' },
            },
            {
              id: 'act10',
              stage: 'Red Bull Stage',
              beginTime: new Date('2025-06-13T15:15:00'),
              endTime: new Date('2025-06-13T15:45:00'),
              going: false,
              artist: { name: 'GYFTH', img: 'artists/gyfth.jpg' },
            },
            {
              id: 'act11',
              stage: 'Red Bull Stage',
              beginTime: new Date('2025-06-13T16:15:00'),
              endTime: new Date('2025-06-13T16:55:00'),
              going: false,
              artist: { name: 'Glueboys', img: 'artists/glueboys.jpg' },
            },
            {
              id: 'act12',
              stage: 'Red Bull Stage',
              beginTime: new Date('2025-06-13T17:25:00'),
              endTime: new Date('2025-06-13T18:05:00'),
              going: false,
              artist: { name: 'Filth', img: 'artists/filth.jpg' },
            },
            {
              id: 'act13',
              stage: 'Red Bull Stage',
              beginTime: new Date('2025-06-13T18:35:00'),
              endTime: new Date('2025-06-13T19:25:00'),
              going: false,
              artist: {
                name: 'Call Me Karizma',
                img: 'artists/callmekarizma.jpg',
              },
            },
            {
              id: 'act14',
              stage: 'Red Bull Stage',
              beginTime: new Date('2025-06-13T19:55:00'),
              endTime: new Date('2025-06-13T20:45:00'),
              going: false,
              artist: { name: 'Whitechapel', img: 'artists/whitechapel.jpg' },
            },
            {
              id: 'act15',
              stage: 'Red Bull Stage',
              beginTime: new Date('2025-06-13T21:15:00'),
              endTime: new Date('2025-06-13T22:30:00'),
              going: false,
              artist: { name: 'Thrice', img: 'artists/thrice.jpg' },
            },
          ],
        },
        {
          name: 'Blue Stage',
          acts: [
            {
              id: 'act16',
              stage: 'Blue Stage',
              beginTime: new Date('2025-06-13T13:30:00'),
              endTime: new Date('2025-06-13T14:00:00'),
              going: false,
              artist: {
                name: 'Igel vs. Shark',
                img: 'artists/igelvsshark.jpg',
              },
            },
            {
              id: 'act17',
              stage: 'Blue Stage',
              beginTime: new Date('2025-06-13T14:20:00'),
              endTime: new Date('2025-06-13T15:00:00'),
              going: false,
              artist: { name: 'Baby Lasagna', img: 'artists/babylasagna.jpg' },
            },
            {
              id: 'act18',
              stage: 'Blue Stage',
              beginTime: new Date('2025-06-13T15:30:00'),
              endTime: new Date('2025-06-13T16:15:00'),
              going: false,
              artist: { name: 'Amaranthe', img: 'artists/amaranthe.jpg' },
            },
            {
              id: 'act19',
              stage: 'Blue Stage',
              beginTime: new Date('2025-06-13T16:45:00'),
              endTime: new Date('2025-06-13T17:35:00'),
              going: false,
              artist: { name: 'Refused', img: 'artists/refused.jpg' },
            },
            {
              id: 'act20',
              stage: 'Blue Stage',
              beginTime: new Date('2025-06-13T18:05:00'),
              endTime: new Date('2025-06-13T19:15:00'),
              going: false,
              artist: { name: 'Airbourne', img: 'artists/airbourne.jpg' },
            },
            {
              id: 'act21',
              stage: 'Blue Stage',
              beginTime: new Date('2025-06-13T19:45:00'),
              endTime: new Date('2025-06-13T20:50:00'),
              going: false,
              artist: { name: 'Lorna Shore', img: 'artists/lornashore.jpg' },
            },
            {
              id: 'act22',
              stage: 'Blue Stage',
              beginTime: new Date('2025-06-13T21:40:00'),
              endTime: new Date('2025-06-13T23:10:00'),
              going: false,
              artist: { name: 'Slipknot', img: 'artists/slipknot.jpg' },
            },
            {
              id: 'act23',
              stage: 'Blue Stage',
              beginTime: new Date('2025-06-13T23:55:00'),
              endTime: new Date('2025-06-14T01:10:00'),
              going: false,
              artist: { name: 'Powerwolf', img: 'artists/powerwolf.jpg' },
            },
          ],
        },
      ];
    } else if (day.id === 'tag-2') {
      // Thursday, June 12
      return [
        {
          name: 'Red Stage',
          acts: [
            {
              id: 'act1',
              stage: 'Red Stage',
              beginTime: new Date('2025-06-12T13:30:00'),
              endTime: new Date('2025-06-12T14:00:00'),
              going: false,
              artist: { name: 'Kittie', img: 'artists/kittie.jpg' },
            },
            {
              id: 'act2',
              stage: 'Red Stage',
              beginTime: new Date('2025-06-12T14:30:00'),
              endTime: new Date('2025-06-12T15:10:00'),
              going: false,
              artist: { name: 'Polaris', img: 'artists/polaris.jpg' },
            },
            {
              id: 'act3',
              stage: 'Red Stage',
              beginTime: new Date('2025-06-12T15:40:00'),
              endTime: new Date('2025-06-12T16:35:00'),
              going: false,
              artist: { name: 'Jinjer', img: 'artists/jinjer.jpg' },
            },
            {
              id: 'act4',
              stage: 'Red Stage',
              beginTime: new Date('2025-06-12T17:05:00'),
              endTime: new Date('2025-06-12T18:15:00'),
              going: false,
              artist: {
                name: 'Jerry Cantrell',
                img: 'artists/jerrycantrell.jpg',
              },
            },
            {
              id: 'act5',
              stage: 'Red Stage',
              beginTime: new Date('2025-06-12T18:45:00'),
              endTime: new Date('2025-06-12T19:55:00'),
              going: false,
              artist: { name: 'Apocalyptica', img: 'artists/apocalyptica.jpg' },
            },
            {
              id: 'act6',
              stage: 'Red Stage',
              beginTime: new Date('2025-06-12T20:30:00'),
              endTime: new Date('2025-06-12T21:40:00'),
              going: false,
              artist: {
                name: 'Motionless in White',
                img: 'artists/motionlessinwhite.jpg',
              },
            },
            {
              id: 'act7',
              stage: 'Red Stage',
              beginTime: new Date('2025-06-12T22:10:00'),
              endTime: new Date('2025-06-12T23:25:00'),
              going: false,
              artist: { name: 'In Flames', img: 'artists/inflames.jpg' },
            },
            {
              id: 'act8',
              stage: 'Red Stage',
              beginTime: new Date('2025-06-12T23:50:00'),
              endTime: new Date('2025-06-13T00:50:00'),
              going: false,
              artist: {
                name: 'Cradle of Filth',
                img: 'artists/cradleoffilth.jpg',
              },
            },
          ],
        },
        {
          name: 'Red Bull Stage',
          acts: [
            {
              id: 'act9',
              stage: 'Red Bull Stage',
              beginTime: new Date('2025-06-12T14:15:00'),
              endTime: new Date('2025-06-12T14:45:00'),
              going: false,
              artist: {
                name: 'The Generation',
                img: 'artists/thegeneration.jpg',
              },
            },
            {
              id: 'act10',
              stage: 'Red Bull Stage',
              beginTime: new Date('2025-06-12T15:15:00'),
              endTime: new Date('2025-06-12T15:45:00'),
              going: false,
              artist: { name: 'Stesy', img: 'artists/stesy.jpg' },
            },
            {
              id: 'act11',
              stage: 'Red Bull Stage',
              beginTime: new Date('2025-06-12T16:15:00'),
              endTime: new Date('2025-06-12T16:55:00'),
              going: false,
              artist: { name: 'VOWWS', img: 'artists/vowws.jpg' },
            },
            {
              id: 'act12',
              stage: 'Red Bull Stage',
              beginTime: new Date('2025-06-12T17:25:00'),
              endTime: new Date('2025-06-12T18:05:00'),
              going: false,
              artist: {
                name: 'House of Protection',
                img: 'artists/houseofprotection.jpg',
              },
            },
            {
              id: 'act13',
              stage: 'Red Bull Stage',
              beginTime: new Date('2025-06-12T18:35:00'),
              endTime: new Date('2025-06-12T19:25:00'),
              going: false,
              artist: { name: 'Normandie', img: 'artists/normandie.jpg' },
            },
            {
              id: 'act14',
              stage: 'Red Bull Stage',
              beginTime: new Date('2025-06-12T19:55:00'),
              endTime: new Date('2025-06-12T20:45:00'),
              going: false,
              artist: { name: 'Deafheaven', img: 'artists/deafheaven.jpg' },
            },
            {
              id: 'act15',
              stage: 'Red Bull Stage',
              beginTime: new Date('2025-06-12T21:15:00'),
              endTime: new Date('2025-06-12T22:30:00'),
              going: false,
              artist: { name: 'Health', img: 'artists/health.jpg' },
            },
          ],
        },
        {
          name: 'Blue Stage',
          acts: [
            {
              id: 'act16',
              stage: 'Blue Stage',
              beginTime: new Date('2025-06-12T13:40:00'),
              endTime: new Date('2025-06-12T14:10:00'),
              going: false,
              artist: { name: 'LØLØ', img: 'artists/lolo.jpg' },
            },
            {
              id: 'act17',
              stage: 'Blue Stage',
              beginTime: new Date('2025-06-12T14:30:00'),
              endTime: new Date('2025-06-12T15:10:00'),
              going: false,
              artist: { name: 'Nothing More', img: 'artists/nothingmore.jpg' },
            },
            {
              id: 'act18',
              stage: 'Blue Stage',
              beginTime: new Date('2025-06-12T15:40:00'),
              endTime: new Date('2025-06-12T16:25:00'),
              going: false,
              artist: { name: 'Poppy', img: 'artists/poppy.jpg' },
            },
            {
              id: 'act19',
              stage: 'Blue Stage',
              beginTime: new Date('2025-06-12T16:55:00'),
              endTime: new Date('2025-06-12T17:40:00'),
              going: false,
              artist: {
                name: 'Peyton Parrish',
                img: 'artists/peytonparrish.jpg',
              },
            },
            {
              id: 'act20',
              stage: 'Blue Stage',
              beginTime: new Date('2025-06-12T18:10:00'),
              endTime: new Date('2025-06-12T19:05:00'),
              going: false,
              artist: { name: 'AWOLNATION', img: 'artists/awolnation.jpg' },
            },
            {
              id: 'act21',
              stage: 'Blue Stage',
              beginTime: new Date('2025-06-12T19:40:00'),
              endTime: new Date('2025-06-12T20:55:00'),
              going: false,
              artist: { name: 'Iggy Pop', img: 'artists/iggypop.jpg' },
            },
            {
              id: 'act22',
              stage: 'Blue Stage',
              beginTime: new Date('2025-06-12T21:30:00'),
              endTime: new Date('2025-06-12T22:45:00'),
              going: false,
              artist: { name: 'Rise Against', img: 'artists/riseagainst.jpg' },
            },
            {
              id: 'act23',
              stage: 'Blue Stage',
              beginTime: new Date('2025-06-12T23:30:00'),
              endTime: new Date('2025-06-13T01:00:00'),
              going: false,
              artist: { name: 'Linkin Park', img: 'artists/linkinpark.jpg' },
            },
          ],
        },
      ];
    } else if (day.id === 'tag-1') {
      return [
        {
          name: 'Red Bull Stage',
          acts: [
            {
              id: 'act1',
              stage: 'Red Bull Stage',
              beginTime: new Date('2025-06-11T16:30:00'),
              endTime: new Date('2025-06-11T17:00:00'),
              going: false,
              artist: { name: 'Voting Act #1', img: 'artists/votingact1.jpg' },
            },
            {
              id: 'act2',
              stage: 'Red Bull Stage',
              beginTime: new Date('2025-06-11T17:30:00'),
              endTime: new Date('2025-06-11T18:00:00'),
              going: false,
              artist: { name: 'Vandans', img: 'artists/vandans.jpg' },
            },
            {
              id: 'act3',
              stage: 'Red Bull Stage',
              beginTime: new Date('2025-06-11T18:30:00'),
              endTime: new Date('2025-06-11T19:10:00'),
              going: false,
              artist: { name: 'Blackgold', img: 'artists/blackgold.jpg' },
            },
            {
              id: 'act4',
              stage: 'Red Bull Stage',
              beginTime: new Date('2025-06-11T19:40:00'),
              endTime: new Date('2025-06-11T20:20:00'),
              going: false,
              artist: {
                name: 'From Fall to Spring',
                img: 'artists/fromfalltospring.jpg',
              },
            },
            {
              id: 'act5',
              stage: 'Red Bull Stage',
              beginTime: new Date('2025-06-11T20:50:00'),
              endTime: new Date('2025-06-11T21:40:00'),
              going: false,
              artist: { name: 'Amira Elfeky', img: 'artists/amiraelfeky.jpg' },
            },
            {
              id: 'act6',
              stage: 'Red Bull Stage',
              beginTime: new Date('2025-06-11T22:10:00'),
              endTime: new Date('2025-06-11T23:00:00'),
              going: false,
              artist: { name: 'Itchy', img: 'artists/itchy.jpg' },
            },
            {
              id: 'act7',
              stage: 'Red Bull Stage',
              beginTime: new Date('2025-06-11T23:30:00'),
              endTime: new Date('2025-06-12T00:45:00'),
              going: false,
              artist: { name: 'Boston Manor', img: 'artists/bostonmanor.jpg' },
            },
          ],
        },
        {
          name: 'Blue Stage',
          acts: [
            {
              id: 'act8',
              stage: 'Blue Stage',
              beginTime: new Date('2025-06-11T16:30:00'),
              endTime: new Date('2025-06-11T17:00:00'),
              going: false,
              artist: {
                name: 'Dead Poet Society',
                img: 'artists/deadpoetsociety.jpg',
              },
            },
            {
              id: 'act9',
              stage: 'Blue Stage',
              beginTime: new Date('2025-06-11T17:20:00'),
              endTime: new Date('2025-06-11T18:00:00'),
              going: false,
              artist: {
                name: 'Seven Hours After Violet',
                img: 'artists/sevenhours.jpg',
              },
            },
            {
              id: 'act10',
              stage: 'Blue Stage',
              beginTime: new Date('2025-06-11T18:25:00'),
              endTime: new Date('2025-06-11T19:10:00'),
              going: false,
              artist: { name: 'The Warning', img: 'artists/thewarning.jpg' },
            },
            {
              id: 'act11',
              stage: 'Blue Stage',
              beginTime: new Date('2025-06-11T19:35:00'),
              endTime: new Date('2025-06-11T20:25:00'),
              going: false,
              artist: {
                name: 'Knocked Loose',
                img: 'artists/knockedloose.jpg',
              },
            },
            {
              id: 'act12',
              stage: 'Blue Stage',
              beginTime: new Date('2025-06-11T20:50:00'),
              endTime: new Date('2025-06-11T21:45:00'),
              going: false,
              artist: {
                name: 'The Ghost Inside',
                img: 'artists/theghostinside.jpg',
              },
            },
            {
              id: 'act13',
              stage: 'Blue Stage',
              beginTime: new Date('2025-06-11T22:15:00'),
              endTime: new Date('2025-06-11T23:05:00'),
              going: false,
              artist: { name: 'Spiritbox', img: 'artists/spiritbox.jpg' },
            },
            {
              id: 'act14',
              stage: 'Blue Stage',
              beginTime: new Date('2025-06-11T23:45:00'),
              endTime: new Date('2025-06-12T01:00:00'),
              going: false,
              artist: { name: 'Korn', img: 'artists/korn.jpg' },
            },
          ],
        },
      ];
    } else {
      return [];
    }
  }

  getAct(id: string): Act {
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
        { name: 'friend4', img: 'friends/Friend4.jpg' },
        { name: 'friend1', img: 'friends/Friend1.jpg' },
        { name: 'friend5', img: 'friends/Friend5.jpg' },
        { name: 'friend6', img: 'friends/Friend6.jpg' },
        { name: 'friend3', img: 'friends/Friend3.jpg' },
      ],
    };
  }

  markAsGoing(act: Act) {}

  getAllDays() {
    return [
      {
        id: 'tag-1',
        month: 'June',
        day: '11',
        weekday: 'Wed',
        active: true,
      },
      {
        id: 'tag-2',
        month: 'June',
        day: '12',
        weekday: 'Thu',
        active: false,
      },
      {
        id: 'tag-3',
        month: 'June',
        day: '13',
        weekday: 'Fri',
        active: false,
      },
      {
        id: 'tag-4',
        month: 'June',
        day: '14',
        weekday: 'Sat',
        active: false,
      },
    ];
  }

  constructor() {}
}
