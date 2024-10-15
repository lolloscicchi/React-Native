// Struttura del progetto:
//   Costanti: tutto ciò che è di appoggio nel progetto
//   DATA: tutte le richieste api
//   Callback: tutte le funzioni che useremo nel progetto
//   UI: tutto lo stile della schermata

import { Text, View } from 'react-native';

import { ButtonComponent } from '@/components/atoms/button/button.atom';
import { useCallback, useMemo, useState } from 'react';

const PRICE = 10;
const DISCOUNT = 2;
const SPEDITION_COST = 3;

export default function Index() {
  const [quantity, setQuantity] = useState(0);

  const priceState = useMemo(() => {
    return (PRICE - DISCOUNT) * quantity + SPEDITION_COST;
  }, [quantity]);

  const increment = useCallback(() => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }, []);

  const decrement = useCallback(() => {
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  }, []);

  // ** UI ** //

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={{ fontSize: 18, paddingVertical: 32, textAlign: 'center' }}>
        Incrementa o decrementa la quantità
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginHorizontal: 'auto',
        }}>
        <ButtonComponent
          title="+ 1"
          onPress={() => increment()}
          style={{ marginBottom: 10, backgroundColor: 'lime', padding: 30 }}
        />
        <ButtonComponent
          title="- 1"
          onPress={() => decrement()}
          style={{
            marginBottom: 10,
            backgroundColor: 'red',
            padding: 30,
          }}
        />
      </View>

      <Text style={{ fontSize: 18, paddingVertical: 32, textAlign: 'center' }}>
        Quantità: {`${quantity}`}
      </Text>
      <Text style={{ fontSize: 18, paddingVertical: 32, textAlign: 'center' }}>
        Quantità: {`${priceState}`}
      </Text>
      {/* backtic `` */}
    </View>
  );
}
