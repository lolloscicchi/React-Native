import {
  View,
  Image,
  Text,
  StyleSheet,
  ImageSourcePropType,
  Button,
  Alert,
} from 'react-native';
import { Card } from '@/api/data.mock';
import { style } from './cardComponent.styles';

export const CardComponent = ({
  title,
  subTitle,
  backgroundColor,
  image,
}: Card) => {
  console.log(title);
  return (
    // INIT CARD

    // Container
    <View
      style={[
        style.container,
        { backgroundColor: backgroundColor || 'yellow' }, //al posto della versione del prof col punto interrogativo ho inseritoquesta così anche se la stringa è vuota mostra il colore alternativo
      ]}>
      {/*IMAGE*/}
      <View style={style.containerImage}>
        <Image source={image} alt={'Image not found'} style={style.image} />
      </View>
      {/*IMAGE*/}

      {/*DESCRIPTION*/}
      <View style={style.containerDescription}>
        <Text style={style.title}>{title ?? 'Titolo non trovato'}</Text>
        <View style={style.containerSubTitle}>
          <Text>{subTitle ?? 'descrizione non trovata'}</Text>
        </View>

        {/* BUTTON */}
      </View>
    </View>
    // END CARD
  );
};

//Style
