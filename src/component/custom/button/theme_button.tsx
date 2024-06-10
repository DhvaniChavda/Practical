import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {COLOR, FONTS, SIZES} from 'src/theme';

interface IThemeButtonProps {
  title: string;
  onPress?: (arg?: any) => void;
  customStyle?: object;
  titleStyle?: object;
  isDisabled?: boolean;
}
export default ({
  title,
  onPress,
  customStyle,
  titleStyle,
  isDisabled,
}: IThemeButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.vButton, customStyle]}
      activeOpacity={0.8}
      onPress={onPress}
      disabled={isDisabled ? isDisabled : false}>
      <Text style={titleStyle ? titleStyle : styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  vButton: {
    width: '100%',
    backgroundColor: COLOR.theme,
    borderRadius: SIZES.countPixelRatio(10),
    borderWidth: 1,
    borderColor: COLOR.theme,
    paddingVertical: SIZES.countPixelRatio(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: FONTS.MEDIUM,
    fontSize: SIZES.countPixelRatio(17),
    color: COLOR.white,
  },
});
