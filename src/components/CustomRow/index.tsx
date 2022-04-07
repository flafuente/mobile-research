import React from "react";
import Avatar from '@components/Avatar';
import { View, Text } from "react-native";
import moment from 'moment';
import { colorResolver, statusColorResolver } from "@utils/index";
import styles from "./styles";

type Props = {
  id: number;
  name: string;
  position: string;
  status: keyof colorResolver;
  application: string;
  experience: number;
};
function CustomRow( { id, name, position, status, application, experience }:Props ) {

  return <View testID={`candidate-${id}`} style={styles.containerRow}>
    <Avatar
      experience={experience}
      fullName={name}
      backgroundColor={statusColorResolver(status)}
    />
    <View style={styles.mainText}>
      <View style={styles.titleContainer}>
        <Text  numberOfLines={1} ellipsizeMode='tail' style={styles.primaryText}>{`${name}`}</Text>
        <Text style={styles.altText}>{`${position}`}</Text>
      </View>
      <Text style={[styles.altText, styles.dateText]}>{moment(application).format("MMMM Do").toString()}</Text>
    </View>
  </View>
};

export default CustomRow;
  