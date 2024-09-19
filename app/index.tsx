import { DATA } from '@/api/data.mock';
import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  FlatList,
  ListRenderItem,
  ImageSourcePropType,
} from 'react-native';

import { Card } from '@/components/molecules/cardComponent/cardComponent.molecule';
import { ButtonComponent } from '@/components/atoms/button/button.atom';
const renderItem: ListRenderItem<any> = ({ item }) => {
  console.log(item.image);
  return (
    <Card
      title={item.title}
      imageURL={item.imageURL}
      subTitle={item.subtitle}
      backgroundColor={item.backgroundColor}
    />
  );
};

export default function Index() {
  return <FlatList data={DATA} renderItem={renderItem} />; //Manca il titolo, il footer e il messaggio nel caso l'array fosse vuoto
}
