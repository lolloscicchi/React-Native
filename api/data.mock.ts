import { Double } from 'react-native/Libraries/Types/CodegenTypes';

export interface DATA {
  backgroundColor: string;
  title: string;
  subTitle: string;
  imageURL: any;
}

export const DATA = [
  {
    backgroundColor: 'red',
    title: 'Red Challenger',
    subTitle: 'Questa è una Dodge Challenger rossa',
    imageURL: require('../assets/images/redChallenger.jpeg'),
  },
  {
    backgroundColor: 'orange',
    title: 'Orange Challenger',
    subTitle: 'Questa è una Dodge Challenger arancione',
    imageURL: require('../assets/images/orangeChallenger.jpeg'),
  },
  {
    backgroundColor: 'green',
    title: 'Green Challenger',
    subTitle: 'Questa è una Dodge Challenger verde',
    imageURL: require('../assets/images/greenChallenger.jpeg'),
  },
  {
    backgroundColor: 'purple',
    title: 'Purple Challenger',
    subTitle: 'Questa è una Dodge Challenger viola',
    imageURL: require('../assets/images/purpleChallenger.jpeg'),
  },
];
