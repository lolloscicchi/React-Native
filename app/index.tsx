import { DATA } from '@/api/data.mock';
import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  FlatList,
  ListRenderItem,
} from 'react-native';

const Card = props => {
  console.log(props.title);
  return (
    // INIT CARD

    <View
      style={{
        width: '98%',
        height: 300,
        flexDirection: 'row',
        backgroundColor: '#f5f5f5',
        borderRadius: 15,
        marginVertical: 8,
        marginHorizontal: 10,
      }}>
      {/*IMAGE*/}
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={props.image}
          alt={'Image not found'}
          style={{
            width: '60%',
            height: '60%',
            borderRadius: '100%',
            resizeMode: 'cover',
            borderWidth: 5,
          }}
        />
      </View>
      {/*IMAGE*/}

      {/*DESCRIPTION*/}
      <View style={{ flex: 1, paddingVertical: 16, paddingRight: 35 }}>
        <Text style={{ fontSize: 30, fontWeight: '800' }}>
          {props.title ?? 'Titolo non trovato'}
        </Text>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={{ fontSize: 16 }}>
            {props.description ?? 'descrizione non trovata'}
          </Text>
        </View>

        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
            $ {props.price ?? 'descrizione non trovata'}
          </Text>
        </View>
      </View>
    </View>
    // END CARD
  );
};

const renderItem: ListRenderItem<any> = ({ item }) => {
  console.log(item.image);
  return (
    <Card
      title={item.title}
      image={{ uri: item.image }}
      description={item.description}
      price={item.price}
    />
  );
};

export default function Index() {
  return <FlatList data={DATA} renderItem={renderItem} />; //Manca il titolo, il footer e il messaggio nel caso l'array fosse vuoto
}
