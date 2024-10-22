// Struttura del progetto:
//   Costanti: tutto ciò che è di appoggio nel progetto
//   DATA: tutte le richieste api
//   Callback: tutte le funzioni che useremo nel progetto
//   UI: tutto lo stile della schermata

import { Text, View } from 'react-native';

import { ButtonComponent } from '@/components/atoms/button/button.atom';
import { TextInputComponent } from '@/components/atoms/textInput/textInput.atom';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';

export default function Index() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  useEffect(() => {
    alert('ciao bello');
  }, []);

  useEffect(() => {
    setOutputText(inputText);
  }, [inputText]);

  // ** UI ** //

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <TextInput
        style={{
          fontSize: 18,
          paddingVertical: 10,
          textAlign: 'center',
          borderWidth: 2,
          marginHorizontal: '10%',
          borderRadius: 10,
          marginBottom: 10,
        }}
        onChangeText={setInputText}
      />
      <Text>{`${outputText}`}</Text>
    </View>
  );
}
