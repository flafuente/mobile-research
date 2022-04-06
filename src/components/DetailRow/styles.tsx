import { StyleSheet } from "react-native";
import { colors } from "@utils/index";

export default StyleSheet.create({
  container: {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    borderWidth: 1,
    borderColor: colors.accentedLight,
    width:'100%',
    height:45,
    marginTop: 10,
  },
  description: {
    fontSize: 18,
    padding:10,
    color: colors.secondaryText,
    fontWeight: '300',
    textAlign: 'left',
  },
  value: {
    fontSize: 18,
    padding:10,
    color: colors.primaryText,
    fontWeight: '500',
    textAlign: 'right',
    flexShrink: 1,
  },
});