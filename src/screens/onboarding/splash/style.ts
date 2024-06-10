import {StatusBar, StyleSheet} from 'react-native';
import {COLOR, FONTS, SIZES} from 'src/theme';

const styles = StyleSheet.create({
  SaContainer: {
    flex: 1,
    backgroundColor: COLOR.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tTitle: {
    fontSize: SIZES.countPixelRatio(20),
    fontFamily: FONTS.SEMI_BOLD,
    color: COLOR.black,
  },
});
export default styles;
