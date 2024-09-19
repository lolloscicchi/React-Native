import { Double } from 'react-native/Libraries/Types/CodegenTypes';

export interface Card {
  backgroundColor: string;
  title: string;
  subTitle: string;
  image: any;
}

export const cards: Card[] = [
  {
    backgroundColor: 'red',
    title: 'Red Challenger',
    subTitle: 'Questa è una Dodge Challenger rossa',
    image: require('../assets/images/redChallenger.jpeg'),
  },
  {
    backgroundColor: 'orange',
    title: 'Orange Challenger',
    subTitle: 'Questa è una Dodge Challenger arancione',
    image: require('../assets/images/orangeChallenger.jpeg'),
  },
  {
    backgroundColor: 'green',
    title: 'Green Challenger',
    subTitle: 'Questa è una Dodge Challenger verde',
    image: require('../assets/images/greenChallenger.jpeg'),
  },
  {
    backgroundColor: 'purple',
    title: 'Purple Challenger',
    subTitle: 'Questa è una Dodge Challenger viola',
    image: require('../assets/images/purpleChallenger.jpeg'),
  },
];
