import { StatusBar } from 'expo-status-bar';
import CharacterListScreen from './src/screens/CharactersListScreen.js';
import CharacterDetailScreen from './src/screens/CharacterDetailScreen.js';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
            <Stack.Navigator initialRouteName="List" screenOptions={{ headerShown: false }} >
              <Stack.Screen name="List" component={CharacterListScreen} options={{animation:'none'}} />
              <Stack.Screen name="Details" component={CharacterDetailScreen} options={{animation:'none'}} />
            </Stack.Navigator>
            <StatusBar hidden={true} />
        </NavigationContainer>
  );
}

