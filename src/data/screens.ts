export type Data = {
  id: number;
  image: any;
  title: string;
  text: string;
};

export const data: Data[] = [
  {
    id: 1,
    image: require('../assets/directions.png'),
    title: 'Swipe Directions',
    text: 'Maestro can swipe LEFT, RIGHT, UP, DOWN',
  },
  {
    id: 2,
    image: require('../assets/smile.png'),
    title: 'Swipe Speed',
    text: 'Customize swipe speed with duration',
  },
  {
    id: 3,
    image: require('../assets/percent.png'),
    title: 'Swipe Percentages',
    text: 'Control swipe with percentage coordinates',
  },
];
