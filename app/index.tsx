// Struttura del progetto:
//   Costanti: tutto ciò che è di appoggio nel progetto
//   DATA: tutte le richieste api
//   Callback: tutte le funzioni che useremo nel progetto
//   UI: tutto lo stile della schermata

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
import { useState } from 'react';

export default function Index() {
  const [counter, setCounter] = useState(0);
  const [isResetClicked, setIsResetClicked] = useState(false);

  // ** CALLBACKS ** //
  const increment = () => {
    setCounter(counter + 1);
    console.warn('Incrementato');
  };

  const reset = () => {
    if (counter>9 && !isResetClicked) {
      setCounter(0);
      setIsResetClicked(true);
    }
    console.warn('Resettato');
  };

  // ** UI ** //

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
      <Text style={{ fontSize: 24, paddingVertical: 16, textAlign: 'center' }}>
        Fine della lista
      </Text>
    );
  };

  const ListEmptyComponent = () => {
    return (
      <Text style={{ fontSize: 24, paddingVertical: 16, textAlign: 'center' }}>
        Nessuna card da mostrare
      </Text>
    );
  };

  return (
    // <FlatList
    //   style={{ flex: 1 }}
    //   data={cards}
    //   renderItem={renderItem}
    //   bounces={false}
    //   ItemSeparatorComponent={ItemSeparatorComponent}
    //   ListHeaderComponent={ListHeaderComponent}
    //   ListFooterComponent={ListFooterComponent}
    //   ListEmptyComponent={ListEmptyComponent}
    // />
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={{ fontSize: 18, paddingVertical: 32, textAlign: 'center' }}>
        {`Count: ${counter}`}
      </Text>
      <ButtonComponent title="Incrementa" onPress={increment} style={{ marginBottom: 10 }} />
      <ButtonComponent
        title="Resetta"
        onPress={reset}
        style={{
          marginBottom: 10,
          backgroundColor: `${counter < 10 || isResetClicked ? 'grey' : 'red'}`,
        }}
        // disabled={counter < 10 || isResetClicked}
      />
      <Text style={{ fontSize: 18, paddingVertical: 32, textAlign: 'center' }}>
        {/* {`Il pulsante di reset è stato cliccato: ${isResetClicked ? 'SI' : 'NO'}`} */}
        {`Il pulsante di reset${isResetClicked ? '' : ' non'} è stato cliccato `}
      </Text>
    </View>
  );
}
