import React from "react";
import { Text, View } from "react-native";
import { Props } from '@navigation/index'

function Detail({route}: Props) {
  return (
    <View>
      <Text>{route?.params?.id}</Text>
      <Text>{route?.params?.name}</Text>
      <Text>{route?.params?.email}</Text>
      <Text>{route?.params?.application_date}</Text>
      <Text>{route?.params?.birth_date}</Text>
      <Text>{route?.params?.position_applied}</Text>
      <Text>{route?.params?.year_of_experience}</Text>
      <Text>{route?.params?.status}</Text>
    </View>
  );
}

export default Detail;
  