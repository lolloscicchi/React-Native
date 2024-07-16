import { Text, View, Image, TextInput } from "react-native";

export default function Index() {
  return (
    <View style={{
      borderWidth: 1,
      flex:1,
      flexDirection: 'row',
      // paddingHorizontal: 16, padding orizzontale
      // paddingVertical: 16 padding verticale
      padding: 16 //padding tutto attorno
    }}>
      <View style={{
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center', //centra il contenuto in modo verticale
        alignItems: 'center' //centra il contenuto in modo orizzontale
        
      }}>
        <Text style={{color: 'white', fontSize: 32, fontWeight:'bold'}}>Hello world</Text>
        <Image style={{width: 200, height: 200}}
        source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}/>

        <View style={{
          width: '100%',
          paddingHorizontal: 10
        }}>
        <TextInput  style={{ backgroundColor: 'grey', color: 'yellow', height: 30, borderWidth: 1, borderColor: 'aqua', width: '100%'}} defaultValue="SCRIVI QUI" ></TextInput>
        </View>
      </View>
      
    </View>
  );
}



// import React from 'react';
// import {View, Text, Image, ScrollView, TextInput} from 'react-native';

// const App = () => {
//   return (
//     <ScrollView>
//       <Text>Some text</Text>
//       <View>
//         <Text>Some more text</Text>
//         <Image
//           source={{
//             uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
//           }}
//           style={{width: 200, height: 200}}
//         />
//       </View>
//       <TextInput
//         style={{
//           height: 40,
//           borderColor: 'gray',
//           borderWidth: 1,
//         }}
//         defaultValue="You can type in me"
//       />
//     </ScrollView>
//   );
// };

// export default App;