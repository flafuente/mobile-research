import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Detail } from '@screens/index'

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
