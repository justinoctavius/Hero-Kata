import { Hero, Status, Type } from '../types';
import Timeline from './../types/Timeline';

const data: Hero[] = [
  {
    id: '1',
    name: 'Bruce Wayne',
    photoUrls: ['https://wallpaperstock.net/wallpapers/thumbs1/33623hd.jpg'],
    birth: '10/20/1890',
    death: '10/10/1000',
    status: Status.alive,
    type: Type.dc
  },
  {
    id: '2',
    name: 'Diana Prince',
    photoUrls: ['https://wallpaperstock.net/wallpapers/thumbs1/33623hd.jpg'],
    birth: '10/20/1890',
    death: '10/10/1000',
    status: Status.alive,
    type: Type.dc
  },
  {
    id: '3',
    name: 'Barry Allen',
    photoUrls: [
      'https://www.xtrafondos.com/wallpapers/ezra-miller-como-flash-5910.jpg'
    ],
    birth: '10/20/1890',
    death: '10/10/1000',
    status: Status.alive,
    type: Type.dc
  },
  {
    id: '4',
    name: 'Ironman',
    photoUrls: ['https://wallpapercave.com/wp/wp3538563.jpg'],
    birth: '10/20/1890',
    death: '10/10/1000',
    status: Status.alive,
    type: Type.marvel,
    timeline: Timeline.present
  }
];

export default data;
