import React from "react";
import { FlatList, RefreshControl, TouchableWithoutFeedback, View } from "react-native";
import CustomRow from "../CustomRow";
import { Candidate } from '@slices/candidates'
import styles from "./styles";

type goToDetailsFunction = (item: Candidate) => void;
type onRefreshFunction = () => void;

type Props = {
  list: Array<Candidate> | undefined;
  goToDetails: goToDetailsFunction;
  onRefresh: onRefreshFunction;
  isFetching: boolean;
};
type rowProps = {
  item: Candidate;
};
function HomeScreen( { list, goToDetails, onRefresh, isFetching }:Props ) {
  const separator = () => <View style={styles.separator} />
  const renderItem = ({ item }:rowProps) => {
    const pressAction = () => goToDetails(item);
    return <TouchableWithoutFeedback onPress={pressAction}>
        <View>
            <CustomRow
              name={item.name}
              position={item.position_applied}
              status={item.status}
              experience={item.year_of_experience}
              application={item.application_date}
            />
        </View>
      </TouchableWithoutFeedback>
  };
  return (
    <FlatList
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
    />
  );
}

export default HomeScreen;
  