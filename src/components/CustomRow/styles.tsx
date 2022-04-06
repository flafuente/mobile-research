import { StyleSheet } from "react-native";
import { colors } from "@utils/index";

export default StyleSheet.create({
  mainText: {
    flex: 1,
    justifyContent:'space-between',
    alignItems: 'center',
    flexDirection:'row',
    paddingTop: 7,
  },
  containerRow: {
    flex: 1,
    flexDirection:'row',
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
  },
  primaryText: {
    color: colors.primaryText,
    flexShrink: 1,
    fontSize: 18,
    fontWeight:'500',
  },
  altText: {
    color: colors.secondaryText,
  },
  dateText: {
    alignSelf:'flex-start',
  },
  titleContainer : {
    flex:1,
    alignSelf:'flex-start',
  },
});