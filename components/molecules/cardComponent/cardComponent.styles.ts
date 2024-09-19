import { View, Image, Text, StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    flexDirection: 'row',
    backgroundColor: 'yellow',
    borderRadius: 15,
    marginVertical: 8,
  },

  containerImage: { flex: 1, justifyContent: 'center', alignItems: 'center' },

  image: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    resizeMode: 'cover',
  },

  containerDescription: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
    marginEnd: '10%',
  },

  title: { fontSize: 20, fontWeight: '800' },

  containerSubTitle: { flex: 1, justifyContent: 'center' },

  button: {
    width: '70%',
    height: 55,
    borderWidth: 4,
    backgroundColor: 'blue',
    borderRadius: 16,
  },
});
