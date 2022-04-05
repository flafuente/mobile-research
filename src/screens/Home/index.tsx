import React, { useState } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { useGetCandidatesListQuery } from '@api/candidates'
import { Candidate, selectCandidateByName } from '@slices/candidates'
import CustomList from '@components/CustomList'
import Filter from "@components/Filter";
import { Props } from '@navigation/index'
import type { RootState } from '@store/index'
import styles from "./styles";

function HomeScreen({ navigation }: Props) {
  const { data, error, isLoading, isFetching, refetch } = useGetCandidatesListQuery('');
  const goToDetails = (candidate:Candidate) => navigation.navigate('Detail', {...candidate});
  const onRefresh = () => refetch();
  const [name, setName] = useState('');
  const onChangeFilter = (value:string) => {
    setName(value);
  }
  const filterActive = name.length > 1;
  const filtered = useSelector((state:RootState) => selectCandidateByName(state, name));
  return (
    <View style={styles.container}>
      <Filter onChangeText={onChangeFilter} value={name} />
      <CustomList
        error={error}
        isFetching={isFetching || isLoading}
        onRefresh={onRefresh}
        goToDetails={goToDetails}
        list={filterActive ? filtered: data}
      />
    </View>
  );
}

export default HomeScreen;
  