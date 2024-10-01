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
import { TextInputComponent } from '@/components/atoms/textInput/textInput.atom';

export default function Index() {
  const [textInput, setTextInput] = useState('');
  const [textOutput, setTextOutput] = useState('');

  // ** CALLBACKS ** //
  const print = () => {
    setTextOutput(textInput);
  };

  const onChangeText = (text: string) => {
    setTextInput(text);
  };

  const reset = () => {
    setTextInput('');
    setTextOutput('');
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
          titleStyle={{
            fontSize: 22,
            fontWeight: 'bold',
          }}
        />
      </View>
    );
  };
  const ItemSeparatorComponent = () => (
    <View
      style={{
        height: 16,
      }}
    />
  );
  const ListHeaderComponent = () => {
    return (
      <Text
        style={{
          fontSize: 24,
          paddingVertical: 16,
          textAlign: 'center',
        }}>
        Le card di oggi:{' '}
      </Text>
    );
  };
  const ListFooterComponent = () => {
    return (
      <Text
        style={{
          fontSize: 24,
          paddingVertical: 16,
          textAlign: 'center',
        }}>
        Fine della lista
      </Text>
    );
  };

  const ListEmptyComponent = () => {
    return (
      <Text
        style={{
          fontSize: 24,
          paddingVertical: 16,
          textAlign: 'center',
        }}>
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
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <TextInputComponent
        value={textInput}
        onChangeText={onChangeText}></TextInputComponent>
      <ButtonComponent
        title="Print"
        onPress={print}
        style={{
          marginBottom: 10,
        }}
      />
      <Text
        style={{
          fontSize: 18,
          paddingVertical: 10,
          textAlign: 'center',
          marginHorizontal: '10%',
        }}>{`${textOutput}`}</Text>
      <ButtonComponent
        title="Reset"
        onPress={reset}
        style={{
          marginBottom: 10,
          backgroundColor: 'red',
        }}
      />
    </View>
  );
}
