import {StatusBar, StyleSheet} from 'react-native';
import {COLOR, FONTS, SIZES} from 'src/theme';

const styles = StyleSheet.create({
  SaContainer: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  vContainer: {
    flex: 1,
    backgroundColor: COLOR.white,
    // paddingHorizontal: SIZES.countPixelRatio(20),
  },
  tTitle: {
    fontSize: SIZES.countPixelRatio(22),
    color: COLOR.blue,
    marginVertical: SIZES.countPixelRatio(25),
    fontFamily: FONTS.SEMI_BOLD,
  },
  vMainBox: {
    backgroundColor: COLOR.white,
    flexDirection: 'row',
    borderRadius: SIZES.countPixelRatio(8),
    paddingHorizontal: SIZES.countPixelRatio(20),
    paddingVertical: SIZES.countPixelRatio(20),
  },
  vDesc1: {
    // backgroundColor: 'yellow',
    // justifyContent: 'flex-end',
    // flexDirection: 'row',
    flex: 1,
  },
  vDesc2: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    position: 'absolute',
    right: 20,
    bottom: 0,
  },
  iIcon: {
    height: SIZES.countPixelRatio(50),
    width: SIZES.countPixelRatio(50),
    resizeMode: 'contain',
    marginRight: SIZES.countPixelRatio(10),
  },
  tNum: {
    fontSize: SIZES.countPixelRatio(55),
    color: COLOR.theme,
    fontFamily: FONTS.SEMI_BOLD,
  },
  tInfo: {
    fontSize: SIZES.countPixelRatio(16),
    color: COLOR.theme,
    fontFamily: FONTS.REGULAR,
  },
  shadowProp: {
    shadowColor: COLOR.black,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
  },
  vRowBox: {
    flexDirection: 'row',
    marginVertical: SIZES.countPixelRatio(25),
    justifyContent: 'space-between',
  },
  Box1: {
    backgroundColor: COLOR.white,
    borderRadius: SIZES.countPixelRatio(8),
    height: SIZES.countPixelRatio(150),
    width: SIZES.countPixelRatio(130),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: COLOR.black,
    shadowOffset: {width: 20, height: -4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 8,
    flex: 1,
  },
});
export default styles;
