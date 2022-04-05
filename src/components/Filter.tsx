import React from "react";
import { TextInput } from "react-native";
import styles from "./styles";

type onChange = (text: string) => void;
type Props = {
  value: string;
  onChangeText: onChange;
};

function Filter( { onChangeText, value }:Props ) {
  return (
    <TextInput
      style={styles.inputText}
      placeholder="Type to filter name"
      onChangeText={onChangeText}
      value={value}
    />
  );
}

export default Filter;
  