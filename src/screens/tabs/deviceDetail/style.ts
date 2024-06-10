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
   
  },
  tLabel: {
    fontSize: SIZES.countPixelRatio(20),
    color: COLOR.blue,
    fontFamily: FONTS.SEMI_BOLD,
  },
  vShadowBox: {
    backgroundColor: COLOR.white,
    borderRadius: SIZES.countPixelRatio(8),
    shadowColor: COLOR.black,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
    padding: SIZES.countPixelRatio(20),
    marginVertical: SIZES.countPixelRatio(20),
  },
  tValue: {
    fontSize: SIZES.countPixelRatio(30),
    color: COLOR.theme,
    fontFamily: FONTS.SEMI_BOLD,
  },
});
export default styles;
