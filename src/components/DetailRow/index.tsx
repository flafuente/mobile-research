import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

type Props = {
  description: string;
  value: string;
};

function DetailRow( { description, value }:Props ) {
  return (
    <View style={styles.container}>
        <Text style={styles.description}>{description}</Text>
        <Text testID={`detail-${description.toLocaleLowerCase()}`} numberOfLines={1} ellipsizeMode='tail' style={styles.value}>{value}</Text>
    </View>
  );
}

export default DetailRow;
  