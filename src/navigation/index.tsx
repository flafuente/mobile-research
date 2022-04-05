import React from "react";
import { createStackNavigator, StackScreenProps } from "@react-navigation/stack";
import { Home, Detail } from '@screens/index'
import { Candidate } from '@slices/candidates'

type RootStackParamList = {
  Home: undefined;
  Detail: Candidate;
};

export type Props = StackScreenProps<RootStackParamList, 'Detail'>;

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

export default MainStack;
