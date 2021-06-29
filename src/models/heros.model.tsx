import { Hero } from '../types';
import { Status, Type } from './../constants';
import Timeline from '../constants/Timeline';

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
    photoUrls: [
      'https://i.pinimg.com/736x/d6/39/f3/d639f3712d6b890e8b3ca44878d07c80.jpg'
    ],
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
    photoUrls: ['https://images6.alphacoders.com/114/thumb-350-1141749.jpg'],
    birth: '10/20/1890',
    death: '10/10/1000',
    status: Status.alive,
    type: Type.marvel,
    timeline: Timeline.present
  }
];

export default data;
