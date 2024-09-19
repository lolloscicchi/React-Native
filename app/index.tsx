import { Text, View, Image, TextInput, ScrollView } from 'react-native';

const Card = props => {
  console.log(props.title);
  return (
    // INIT CARD

    <View
      style={{
        width: '100%',
        height: 300,
        flexDirection: 'row',
        backgroundColor: props.backgroundColor ?? 'yellow',
        borderRadius: 15,
        marginVertical: 8,
      }}>
      {/*IMAGE*/}
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={props.imageURL}
          alt={'Image not found'}
          style={{
            width: 130,
            height: 130,
            borderRadius: 130 / 2,
            resizeMode: 'cover',
          }}
        />
      </View>
      {/*IMAGE*/}

      {/*DESCRIPTION*/}
      <View style={{ flex: 1, paddingVertical: 16 }}>
        <Text style={{ fontSize: 20, fontWeight: '800' }}>
          {props.title ?? 'Titolo non trovato'}
        </Text>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text>{props.subtitle ?? 'descrizione non trovata'}</Text>
        </View>
      </View>
    </View>
    // END CARD
  );
};

export default function Index() {
  return (
    <ScrollView
      style={{
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingHorizontal: 16,
        backgroundColor: '#0000ff',
      }}>
      {/* INIT CARD */}

      {DATA.map((card, index) => {
        return (
          <Card
            key={index}
            backgroundColor={card.backgroundColor}
            title={card.title}
            subtitle={card.subtitle}
            imageURL={card.imageURL}
          />
        );
      })}

      {/* <Card
        title={'Red Challenger'}
        subtitle={
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sequi saepe maiores natus ex nihi reprehenderit, asperiores reiciendis atque quia distinctio! Suscipit doloribus voluptates possimus quaerat harum aliquam. Nostrum, alias!'
        }
        backgroundColor={'red'}
        imageURL={require('../assets/images/redChallenger.jpeg')}
      />
      <Card
        title={'Green Challenger'}
        subtitle={
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sequi saepe maiores natus ex nihi reprehenderit, asperiores reiciendis atque quia distinctio! Suscipit doloribus voluptates possimus quaerat harum aliquam. Nostrum, alias!'
        }
        backgroundColor={'green'}
        imageURL={require('../assets/images/greenChallenger.jpeg')}
      />
      <Card
        title={'Purple Challenger'}
        subtitle={
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sequi saepe maiores natus ex nihi reprehenderit, asperiores reiciendis atque quia distinctio! Suscipit doloribus voluptates possimus quaerat harum aliquam. Nostrum, alias!'
        }
        backgroundColor={'purple'}
        imageURL={require('../assets/images/purpleChallenger.jpeg')}
      />
      <Card
        title={'Orange Challenger'}
        subtitle={
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sequi saepe maiores natus ex nihi reprehenderit, asperiores reiciendis atque quia distinctio! Suscipit doloribus voluptates possimus quaerat harum aliquam. Nostrum, alias!'
        }
        backgroundColor={'orange'}
        imageURL={require('../assets/images/orangeChallenger.jpeg')}
      /> */}
      {/* END CARD */}
    </ScrollView>
  );
}
