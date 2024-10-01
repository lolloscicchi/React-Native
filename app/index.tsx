// Struttura del progetto:
//   Costanti: tutto ciò che è di appoggio nel progetto
//   DATA: tutte le richieste api
//   Callback: tutte le funzioni che useremo nel progetto
//   UI: tutto lo stile della schermata

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

import { ButtonComponent } from '@/components/atoms/button/button.atom';
import { useState } from 'react';

const moltiplier = 5;

export default function Index() {
  const [counter, setCounter] = useState(0);

  const addOne = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const moltiplicator = (n: number) => {
    for (let i = 0; i < n; i++) {
      addOne();
    }
  };

  // ** UI ** //

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={{ fontSize: 18, paddingVertical: 32, textAlign: 'center' }}>
        {`Count: ${counter}`}
      </Text>
      <ButtonComponent
        title="+ 1"
        onPress={addOne}
        style={{ marginBottom: 10, backgroundColor: 'lime' }}
      />
      <ButtonComponent
        title={`+ ${moltiplier}`}
        onPress={() => moltiplicator(moltiplier)}
        style={{
          marginBottom: 10,
          backgroundColor: 'lime',
        }}
      />
      <Text
        style={{
          fontSize: 18,
          paddingVertical: 32,
          textAlign: 'center',
        }}></Text>
    </View>
  );
}
