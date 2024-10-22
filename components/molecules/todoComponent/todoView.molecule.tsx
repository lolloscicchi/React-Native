import { Todo } from '@/api/data.mock';
import { Text, View } from 'react-native';

export const TodoView = ({ id, title, description }: Todo) => {
  return (
    <View style={{ backgroundColor: 'yellow' }}>
      <Text>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
};
