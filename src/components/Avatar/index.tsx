import React from "react";
import { View, Text } from "react-native";
import initials from 'initials';
import styles from "./styles";

type Props = {
  backgroundColor: string;
  fullName: string;
  experience: number;
};

function Avatar( { backgroundColor, fullName, experience }:Props ) {
  const letters = initials(fullName)
  return (
    <View style={styles.avatarContainer}>
      <View style={[styles.avatar, {backgroundColor}]}>
        <Text
        style={styles.textAvatar}>
          {letters}
        </Text>   
      </View>
      <View style={styles.pillContainer}>
        <Text style={styles.pillText}>{`${experience}`}</Text>
      </View>
    </View>
  );
}

export default Avatar;
  