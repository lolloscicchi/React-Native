import {
  View,
  Image,
  Text,
  StyleSheet,
  ImageSourcePropType,
  Button,
  Alert,
} from 'react-native';
import { DATA } from '@/api/data.mock';
import { style } from './cardComponent.styles';

export const Card = ({ title, subTitle, backgroundColor, imageURL }: DATA) => {
  console.log(title);
  return (
    // INIT CARD

    // Container
    <View
      style={[
        style.container,
        { backgroundColor: backgroundColor || 'yellow' }, //si può scrivere meglio questa selezione
      ]}>
      {/*IMAGE*/}
      <View style={style.containerImage}>
        <Image source={imageURL} alt={'Image not found'} style={style.image} />
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
