import { StyleSheet } from "react-native";
import { colors } from "@utils/index";

export default StyleSheet.create({
  customButton: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50 / 2,
    borderColor:colors.accented,
    borderWidth:1,
    margin:10,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 30,
    color: colors.primaryText,
    fontWeight: '300',
    alignSelf: 'center',
    margin: 15,
  }
});