import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLOR, FONTS, SIZES} from 'src/theme';
import {STRING} from 'src/utils';
import Modal from 'react-native-modalbox';
interface IRemovePhotoProps {
  isDialogOpen: boolean;
  onDialogClosed: () => void;
  removePhoto: () => void;
}
export default ({
  isDialogOpen,
  onDialogClosed,
  removePhoto,
}: IRemovePhotoProps) => {
  return (
    <Modal
      style={styles.modalContainer}
      isOpen={isDialogOpen}
      onClosed={onDialogClosed}
      animationDuration={300}
      backButtonClose={true}
      coverScreen={true}>
      <View style={styles.vContainer}>
        <Text style={styles.tTitle}> {STRING.account.remove_photo}</Text>
        <Text style={styles.tDescription}>{STRING.account.are_you_sure}</Text>
        <TouchableOpacity
          style={styles.toBtnOne}
          activeOpacity={0.8}
          onPress={() => {
            removePhoto();
          }}>
          <Text style={[styles.tBtnOne]}>{STRING.account.yes}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.toBtnOne}
          activeOpacity={0.8}
          onPress={onDialogClosed}>
          <Text style={styles.tBtnTwo}> {STRING.account.no}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
  
const styles = StyleSheet.create({
  vContainer: {
    marginTop: SIZES.smartScale(20),
  },
  modalContainer: {
    height: null,
    borderRadius: SIZES.countPixelRatio(20),
    backgroundColor: COLOR.white,
    marginEnd: SIZES.smartScale(20),
    width: SIZES.WIDTH - SIZES.smartWidthScale(100),
  },
  toBtnOne: {
    borderTopWidth: SIZES.countPixelRatio(1),
    borderTopColor: COLOR.black_op,
    alignItems: 'center',
  },
  tBtnOne: {
    fontFamily: FONTS.MEDIUM,
    color: COLOR.red,
    fontSize: SIZES.countPixelRatio(20),
    paddingVertical: SIZES.smartScale(10),
  },
  tBtnTwo: {
    color: COLOR.light_blue,
    fontFamily: FONTS.MEDIUM,
    fontSize: SIZES.countPixelRatio(20),
    paddingVertical: SIZES.smartScale(10),
  },
  tTitle: {
    color: COLOR.black,
    textAlign: 'center',
    fontSize: SIZES.countPixelRatio(20),
    fontFamily: FONTS.SEMI_BOLD,
    marginHorizontal: SIZES.smartWidthScale(20),
  },
  tDescription: {
    color: COLOR.black,
    fontSize: SIZES.countPixelRatio(18),
    fontFamily: FONTS.REGULAR,
    marginHorizontal: SIZES.smartWidthScale(25),
    lineHeight: SIZES.countPixelRatio(19),
    textAlign: 'center',
    marginBottom: SIZES.smartScale(8),
  },
});
