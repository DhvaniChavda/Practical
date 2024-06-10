import {StatusBar, StyleSheet} from 'react-native';
import {COLOR, FONTS, SIZES} from 'src/theme';

const styles = StyleSheet.create({
  SaContainer: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  vContainer: {
    backgroundColor: COLOR.white,
    flex: 1,
    marginHorizontal: SIZES.countPixelRatio(20),
  },
  vImageContainer: {
    marginVertical: SIZES.smartScale(10),
    alignItems: 'center',
  },
  iProfile: {
    height: SIZES.countPixelRatio(140),
    width: SIZES.countPixelRatio(140),
    borderRadius: SIZES.countPixelRatio(140),
    resizeMode: 'cover',
  },
  vLoader: {
    height: SIZES.countPixelRatio(125),
    width: SIZES.countPixelRatio(125),
    borderRadius: SIZES.countPixelRatio(120),
    borderWidth: 1,
    borderColor: COLOR.black,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iCamera: {
    height: SIZES.countPixelRatio(20),
    width: SIZES.countPixelRatio(20),
    resizeMode: 'contain',
  },
  toCamera: {
    height: SIZES.countPixelRatio(40),
    width: SIZES.countPixelRatio(40),
    borderRadius: SIZES.countPixelRatio(40),
    backgroundColor: COLOR.theme,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    position: 'absolute',
    right: 0,
    marginBottom: SIZES.smartScale(5),
    marginRight: SIZES.smartWidthScale(-5),
  },
  tiInput: {
    borderWidth: 1,
    borderRadius: SIZES.countPixelRatio(10),
    paddingHorizontal: SIZES.countPixelRatio(20),
    borderColor: COLOR.grey,
    fontSize: SIZES.countPixelRatio(18),
    marginVertical: SIZES.countPixelRatio(20),
  },
  btnDate: {
    marginBottom: SIZES.countPixelRatio(20),
  },
  btnTime: {
    backgroundColor: COLOR.white,
    marginBottom: SIZES.countPixelRatio(20),
  },
  tTime: {
    color: COLOR.theme,
    fontFamily: FONTS.MEDIUM,
    fontSize: SIZES.countPixelRatio(17),
  },
  tDate: {
    color: COLOR.blue,
    fontFamily: FONTS.MEDIUM,
    fontSize: SIZES.countPixelRatio(17),
    marginBottom: SIZES.countPixelRatio(20),
  },
  iSquare: {
    height: SIZES.countPixelRatio(24),
    width: SIZES.countPixelRatio(24),
    resizeMode: 'contain',
    marginRight: SIZES.countPixelRatio(10),
  },
  vRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: SIZES.countPixelRatio(20),
  },
  tAgree: {
    fontSize: SIZES.countPixelRatio(16),
    color: COLOR.black,
    fontFamily: FONTS.REGULAR,
  },
});
export default styles;
