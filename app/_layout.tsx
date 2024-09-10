import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: '#000' },
      }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
