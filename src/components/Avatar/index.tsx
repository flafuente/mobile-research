import React from "react";
import { View, Text } from "react-native";
import initials from 'initials';
import styles from "./styles";

type Props = {
  backgroundColor: string;
  fullName: string;
  experience: number;
  displayBig?: boolean;
};

function Avatar( { backgroundColor, fullName, experience, displayBig }:Props ) {
  const letters = initials(fullName)
  return (
    <View style={styles.avatarContainer}>
      <View style={[displayBig ? styles.avatarBig : styles.avatar, {backgroundColor}]}>
        <Text
        style={[styles.textAvatar, { fontSize: (displayBig) ? 150 / 3.14 : 50 / 3.14, }]}>
          {letters}
        </Text>   
      </View>
      {!displayBig && <View style={styles.pillContainer}>
        <Text style={styles.pillText}>{`${experience}`}</Text>
      </View>}
    </View>
  );
}

export default Avatar;
  