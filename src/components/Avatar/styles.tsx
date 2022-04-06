import { StyleSheet } from "react-native";
import { colors } from "@utils/index";

export default StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50 / 2,
  },
  avatarBig: {
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 150 / 2,
  },
  avatarContainer: {
    paddingLeft:10,
    paddingRight: 10,
  },
  textAvatar: {
    color: colors.white,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  pillContainer: {
    alignSelf:'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20/2,
    width:20,
    position:'absolute',
    bottom:0,
    right:5,
    height:20,
    backgroundColor:colors.accented,
  },
  pillText: {
    fontWeight:'500',
    fontSize:11,
    color:colors.white,
  },
});