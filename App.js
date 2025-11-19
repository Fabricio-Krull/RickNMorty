import CharacterListScreen from './src/screens/CharactersListScreen.js';
import CharacterDetailScreen from './src/screens/CharacterDetailScreen.js';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen name="List" component={CharacterListScreen} options={{animation:"flip"}}/>
        <Stack.Screen name="Details" component={CharacterDetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

