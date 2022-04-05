import React from "react";
import { View, Text } from "react-native";
import { useGetCandidatesListQuery } from '@api/candidates'
import { Candidate } from '@slices/candidates'
import CustomList from '@components/CustomList'
import { Props } from '@navigation/index'

function HomeScreen({ navigation }: Props) {
  const { data, error, isLoading } = useGetCandidatesListQuery('');
  const goToDetails = (candidate:Candidate) => navigation.navigate('Detail', {...candidate});
  return (
    <View>
      <CustomList goToDetails={goToDetails} list={data} />
    </View>
  );
}

export default HomeScreen;
  