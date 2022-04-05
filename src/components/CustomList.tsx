import React from "react";
import { View, Text, FlatList, TouchableWithoutFeedback } from "react-native";
import { Candidate } from '@slices/candidates'
import styles from "./styles";

type goToDetailsFunction = (item: Candidate) => void;

type screenProps = {
  list: Array<Candidate> | undefined;
  goToDetails: goToDetailsFunction;
};
type rowProps = {
  item: Candidate;
};
function HomeScreen( { list, goToDetails }:screenProps ) {

  //Move to component
  const renderItem = ({ item }:rowProps) => {
    const pressAction = () => goToDetails(item);
    return <TouchableWithoutFeedback onPress={pressAction}>
        <View style={styles.containerBody}>
          <Text>{`${item.name}`}</Text>
          <Text>{`${item.application_date}`}</Text>
        </View>
      </TouchableWithoutFeedback>};
  return (
    <FlatList
      data={list}
      renderItem={renderItem}
      keyExtractor={item => `${item.email}-${item.id}`}
    />
  );
}

export default HomeScreen;
  