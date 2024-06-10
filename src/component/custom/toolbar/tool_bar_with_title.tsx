import React, {useState} from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {APP_IMAGES} from 'src/assets/images';
import {ModalMenu} from 'src/component/custom/modal';
import {COLOR, FONTS, SIZES} from 'src/theme';

interface IBackToolbarProps {
  title: string;
  viewCustomStyle?: object;
  isRightIcon?: boolean;
  rightIcon1?: object;
  rightIcon2?: object;
  onMenuClick?: () => void;
}
export default ({
  title,
  viewCustomStyle,
  isRightIcon,
  rightIcon1,
  rightIcon2,
  onMenuClick,
}: IBackToolbarProps) => {
  return (
    <>
      <View style={[styles.vMainContainer, viewCustomStyle]}>
        <View />
        <Text
          style={[
            styles.tTitle,
            {left: isRightIcon ? SIZES.countPixelRatio(30) : 0},
          ]}>
          {title}
        </Text>

        {isRightIcon && (
          <>
            <TouchableOpacity style={styles.toBack} activeOpacity={0.8}>
              <Image source={rightIcon1} style={styles.iBack} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.toBack}
              activeOpacity={0.8}
              onPress={onMenuClick}>
              <Image source={rightIcon2} style={styles.iBack} />
            </TouchableOpacity>
          </>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  vMainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLOR.theme,
    paddingVertical: SIZES.countPixelRatio(20),
  },
  toBack: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iBack: {
    height: SIZES.countPixelRatio(30),
    width: SIZES.countPixelRatio(30),
    resizeMode: 'contain',
    tintColor: COLOR.white,
    marginRight: SIZES.countPixelRatio(10),
  },
  tTitle: {
    fontSize: SIZES.countPixelRatio(22),
    fontFamily: FONTS.SEMI_BOLD,
    color: COLOR.white,
    textAlign: 'center',
    flex: 1,
  },
  vMenu: {
    backgroundColor: 'pink',
    position: 'absolute',
    right: 10,
    top: 0,
  },
});
