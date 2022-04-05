import React from "react";
import { View, Text } from "react-native";
import { useGetCandidatesListQuery } from '@api/candidates'
import CustomList from '@components/CustomList'

function HomeScreen() {
  const { data, error, isLoading } = useGetCandidatesListQuery('')
  return (
    <View>
      <Text>Home</Text>
      <CustomList list={data} />
    </View>
  );
}

export default HomeScreen;
  