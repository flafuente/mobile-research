import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { colors } from "@utils/index";

const styles = StyleSheet.create({
  inputText: {
    height: 50,
    margin: 12,
    backgroundColor: colors.accentedLight,
    color: colors.accented,
    borderRadius: 30,
    padding: 10,
  },
});

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
      placeholderTextColor={colors.accented}
      onChangeText={onChangeText}
      value={value}
    />
  );
}

export default Filter;
  