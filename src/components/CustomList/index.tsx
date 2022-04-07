import React from "react";
import { FlatList, RefreshControl, TouchableWithoutFeedback, View } from "react-native";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { SerializedError } from "@reduxjs/toolkit";
import { Candidate } from '@slices/candidates'
import EmptyScreen from "@components/EmptyScreen";
import CustomRow from "../CustomRow";
import styles from "./styles";

type goToDetailsFunction = (item: Candidate) => void;
type onRefreshFunction = () => void;

type Props = {
  list: Array<Candidate> | undefined;
  goToDetails: goToDetailsFunction;
  onRefresh: onRefreshFunction;
  isFetching: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
};
type rowProps = {
  item: Candidate;
};
function HomeScreen( { list, goToDetails, onRefresh, isFetching, error }:Props ) {
  const separator = () => <View style={styles.separator} />
  const renderItem = ({ item }:rowProps) => {
    const pressAction = () => goToDetails(item);
    return <TouchableWithoutFeedback onPress={pressAction}>
        <View>
            <CustomRow
              id={item.id}
              name={item.name}
              position={item.position_applied}
              status={item.status}
              experience={item.year_of_experience}
              application={item.application_date}
            />
        </View>
      </TouchableWithoutFeedback>
  };
  return (!isFetching && (!list || list.length === 0)) ?
    <EmptyScreen onRefresh={onRefresh} error={error} /> :
    <FlatList
      testID="candidate-list"
      data={list}
      renderItem={renderItem}
      contentContainerStyle={styles.listPadding}
      ItemSeparatorComponent={separator}
      keyExtractor={item => `${item.email}-${item.id}`}
      refreshControl={
        <RefreshControl
            refreshing={isFetching}
            onRefresh={onRefresh}
        />
      }
    />;
}

export default HomeScreen;
  