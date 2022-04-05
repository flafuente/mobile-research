import React from "react";
import { View, Text, FlatList } from "react-native";
import { Candidate } from '@slices/candidates'

type screenProps = {
  list: Array<Candidate> | undefined;
};
type rowProps = {
  item: Candidate;
};
function HomeScreen( {list}:screenProps ) {

  //Move to component
  const renderItem = ({ item }:rowProps) => {
    return <View>
        <Text>{`${item.name}`}</Text>
        <Text>{`${item.application_date}`}</Text>
      </View>};
  return (
    <FlatList
      data={list}
      renderItem={renderItem}
      keyExtractor={item => `${item.email}`}
    />
  );
}

export default HomeScreen;
  