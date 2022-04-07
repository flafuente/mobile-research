import React from "react";
import { createStackNavigator, StackScreenProps } from "@react-navigation/stack";
import { StackHeaderOptions } from "@react-navigation/stack/lib/typescript/src/types";
import { Home, Detail } from '@screens/index'
import { Candidate } from '@slices/candidates'

type RootStackParamList = {
  Home: undefined;
  Detail: Candidate;
};

export type Props = StackScreenProps<RootStackParamList, 'Detail'>;

const Stack = createStackNavigator();
const header = ({ route }: Props) => ({
  title: route.params?.name ?? '',
  headerBackTitle: 'Back',
}) 
const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Candidates" component={Home} />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={header as StackHeaderOptions}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
