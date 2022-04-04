import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider} from 'react-redux'
import store from './src/store'
import MainStack from './src/navigation'

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStack/>
      </NavigationContainer>
    </Provider>
  );
}
