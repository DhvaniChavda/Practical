import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {COLOR, FONTS, SIZES} from 'src/theme';
import {STRING} from 'src/utils';
import {APP_IMAGES} from 'src/assets/images';
interface IMenuProps {
  isDialogOpen: boolean;
  onDialogClosed: () => void;
}
export default ({isDialogOpen, onDialogClosed}: IMenuProps) => {
  return (
    <View style={styles.vContainer}>
      <TouchableOpacity
        style={[styles.vRow, {marginBottom: SIZES.countPixelRatio(20)}]}
        onPress={onDialogClosed}
        activeOpacity={0.4}>
        <Text style={styles.tLabel}>{STRING.account.settings}</Text>
        <Image source={APP_IMAGES.ic_settings} style={styles.iIcon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.vRow}
        onPress={onDialogClosed}
        activeOpacity={0.4}>
        <Text style={styles.tLabel}>{STRING.account.logout}</Text>
        <Image source={APP_IMAGES.ic_logout} style={styles.iIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    height: null,
    borderRadius: SIZES.countPixelRatio(20),
    backgroundColor: COLOR.white,
  },
  vContainer: {
    position: 'absolute',
    right: SIZES.countPixelRatio(23),
    top: SIZES.countPixelRatio(50),
    backgroundColor: COLOR.white,
    paddingVertical: SIZES.countPixelRatio(25),
    paddingHorizontal: SIZES.countPixelRatio(20),
    shadowColor: COLOR.black,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
  },
  vRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tLabel: {
    fontSize: SIZES.countPixelRatio(18),
    fontFamily: FONTS.MEDIUM,
    color: COLOR.black,
    marginRight: SIZES.countPixelRatio(30),
  },
  iIcon: {
    height: SIZES.countPixelRatio(24),
    width: SIZES.countPixelRatio(24),
    resizeMode: 'contain',
  },
});
