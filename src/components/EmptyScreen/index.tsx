import React from "react";
import { View, Image, Button, Text } from "react-native";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { SerializedError } from "@reduxjs/toolkit";
import { colors } from "@utils/index";
import styles from "./styles";

type onRefreshFunction = () => void;

type Props = {
  error: FetchBaseQueryError | SerializedError | undefined;
  onRefresh: onRefreshFunction;
};

function EmptyScreen( { error, onRefresh }:Props ) {
  return (
    <View testID="empty-screen">
        <Text style={styles.title}>No results Found!</Text>
        <Image
          style={styles.image}
          source={{uri: 'https://www.pngkey.com/png/full/672-6722829_no-result-found.png'}} />
        {(!!error) && <View style={styles.customButton}>
          <Button title='Try again!' color={colors.accented} onPress={onRefresh}/>
        </View>}
    </View>
  );
}

export default EmptyScreen;
  