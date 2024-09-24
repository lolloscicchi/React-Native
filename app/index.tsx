import { Card, cards } from '@/api/data.mock';
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

import { CardComponent } from '@/components/molecules/cardComponent/cardComponent.molecule';
import { ButtonComponent } from '@/components/atoms/button/button.atom';
const renderItem: ListRenderItem<Card> = ({ item, index }) => {
  return (
    <View>
      <CardComponent
        key={index}
        title={item.title}
        subTitle={item.subTitle}
        backgroundColor={item.backgroundColor}
        image={item.image}
      />
      <ButtonComponent
        title={'Premi qui'}
        disabled={false}
        onPress={function (): void {}} //funzione vuota
        titleStyle={{ fontSize: 22, fontWeight: 'bold' }}
      />
    </View>
  );
};
const ItemSeparatorComponent = () => <View style={{ height: 16 }} />;
const ListHeaderComponent = () => {
  return (
    <Text style={{ fontSize: 24, paddingVertical: 16, textAlign: 'center' }}>
      Le card di oggi:{' '}
    </Text>
  );
};
const ListFooterComponent = () => {
  return (
    <Text style={{ fontSize: 24, paddingVertical: 16, textAlign: 'center' }}>Fine della lista</Text>
  );
};

const ListEmptyComponent = () => {
  return (
    <Text style={{ fontSize: 24, paddingVertical: 16, textAlign: 'center' }}>
      Nessuna card da mostrare
    </Text>
  );
};

export default function Index() {
  return (
    <FlatList
      style={{ flex: 1 }}
      bounces={false}
      data={cards}
      renderItem={renderItem}
      ItemSeparatorComponent={ItemSeparatorComponent}
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={ListFooterComponent}
      ListEmptyComponent={ListEmptyComponent}
    />
  );
}
