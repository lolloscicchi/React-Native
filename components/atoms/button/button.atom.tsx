import { style } from '@/components/molecules/cardComponent/cardComponent.styles';
import { View, Button, ColorValue, GestureResponderEvent } from 'react-native';

interface ButtonProps {
  title: string;
  disable: boolean;
  onPress: () => void;
}

export const ButtonComponent = (
  title: string,
  color: ColorValue | undefined,
  disabled: boolean | undefined,
  onPress: ((event: GestureResponderEvent) => void) | undefined
) => {
  return (
    <View style={style.button}>
      <Button
        title={title}
        color={color}
        disabled={disabled}
        onPress={onPress}
      />
    </View>
  );
};
