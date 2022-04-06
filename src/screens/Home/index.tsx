import React, { useState } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { useGetCandidatesListQuery } from '@api/candidates'
import { Candidate, selectCandidatesByNameOrPosition } from '@slices/candidates'
import CustomList from '@components/CustomList'
import Filter from "@components/Filter";
import { useDebounce } from '@utils/index'
import { Props } from '@navigation/index'
import type { RootState } from '@store/index'
import styles from "./styles";

function HomeScreen({ navigation }: Props) {
  const { data, error, isLoading, isFetching, refetch } = useGetCandidatesListQuery('');
  const goToDetails = (candidate:Candidate) => navigation.navigate('Detail', {...candidate});
  const onRefresh = () => refetch();
  const [term, setTerm] = useState('');
  const debouncedSearchTerm = useDebounce(term, 600);
  const onChangeFilter = (value:string) => {
    setTerm(value);
  }
  const filterActive = debouncedSearchTerm.length > 1;
  const filtered = useSelector((state:RootState) => selectCandidatesByNameOrPosition(state, debouncedSearchTerm));
  return (
    <View style={styles.container}>
      <Filter onChangeText={onChangeFilter} value={term} />
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
  