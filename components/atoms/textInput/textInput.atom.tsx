import React from 'react';
import {
  TouchableOpacity,
  Text,
  ViewStyle,
  TextStyle,
  TextInput,
} from 'react-native';
import { styles } from './textInput.styles';

interface TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

export const TextInputComponent = ({ value, onChangeText }: TextInputProps) => {
  return (
    <TextInput
      style={styles.container}
      onChangeText={onChangeText}
      value={value}></TextInput>
  );
};
