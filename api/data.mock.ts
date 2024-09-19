import { Double } from 'react-native/Libraries/Types/CodegenTypes';

export interface DATA {
  backgroundColor: String;
  title: String;
  subtitle: String;
  imageURL: String;
}

const DATA = [
  {
    backgroundColor: 'red',
    title: 'Red Challenger',
    subtitle: 'Questa è una Dodge Challenger rossa',
    imageURL: require('../assets/images/redChallenger.jpeg'),
  },
  {
    backgroundColor: 'orange',
    title: 'Orange Challenger',
    subtitle: 'Questa è una Dodge Challenger arancione',
    imageURL: require('../assets/images/orangeChallenger.jpeg'),
  },
  {
    backgroundColor: 'green',
    title: 'Green Challenger',
    subtitle: 'Questa è una Dodge Challenger verde',
    imageURL: require('../assets/images/greenChallenger.jpeg'),
  },
  {
    backgroundColor: 'purple',
    title: 'Purple Challenger',
    subtitle: 'Questa è una Dodge Challenger viola',
    imageURL: require('../assets/images/purpleChallenger.jpeg'),
  },
];
