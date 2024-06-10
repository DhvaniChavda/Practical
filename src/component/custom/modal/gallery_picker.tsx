import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Alert,
} from 'react-native';
import Modal from 'react-native-modalbox';
import {
  PERMISSIONS,
  RESULTS,
  check,
  request,
  openSettings,
} from 'react-native-permissions';
import ImagePicker from 'react-native-image-crop-picker';
import {COLOR, FONTS, SIZES} from 'src/theme';
import {STRING} from 'src/utils';
import DeviceInfo from 'react-native-device-info';

interface IGalleryProps {
  isGalleryOpen: boolean;
  galleyCloseListener?: any;
  selectedGalleryListener?: any;
  type?: any;
  multiple: boolean;
  isProfile: any;
  removePhoto: () => void;
}
export default ({
  isGalleryOpen,
  galleyCloseListener,
  selectedGalleryListener,
  multiple,
  type,
  isProfile,
  removePhoto,
}: IGalleryProps) => {
  const [androidVersion, setAndroidVersion] = useState(
    parseInt(DeviceInfo.getSystemVersion()),
  );

  const goToSettings = () => {
    Alert.alert(
      'Nemo',
      'Some permissions are not granted by user please go to settings and enable the permissions',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
        },
        {
          text: 'Settings',
          onPress: () =>
            openSettings().catch(() => console.warn('cannot open settings')),
        },
      ],
    );
  };
  const checkPermission = (permissionType: string) => {
    console.log('Checking permissions', type);
    switch (permissionType) {
      case 'Camera':
        check(
          Platform.OS === 'ios'
            ? PERMISSIONS.IOS.CAMERA
            : androidVersion >= 13
            ? PERMISSIONS.ANDROID.READ_MEDIA_IMAGES
            : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
        )
          .then(result => {
            switch (result) {
              case RESULTS.DENIED:
                request(
                  Platform.OS === 'ios'
                    ? PERMISSIONS.IOS.CAMERA
                    : androidVersion >= 13
                    ? PERMISSIONS.ANDROID.READ_MEDIA_IMAGES
                    : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
                ).then(result => {
                  if (result === RESULTS.GRANTED) {
                    if (Platform.OS === 'android') {
                      checkStoragePermission();
                    } else {
                      ImagePicker.openCamera({
                        multiple: multiple,
                        compressImageMaxWidth: 800,
                        compressImageMaxHeight: 800,
                        compressImageQuality: Platform.select({
                          ios: 0.8,
                          android: 1,
                        }),
                        mediaType: type ? type : 'photo',
                      }).then(imageList => {
                        selectedGalleryListener(imageList, true);
                        galleyCloseListener();
                      });
                    }
                  } else {
                    goToSettings();
                    // Alert.alert(
                    //   'Please give camera permission to capture photo',
                    // );
                  }
                });
                break;
              case RESULTS.GRANTED:
                if (Platform.OS === 'android') {
                  checkStoragePermission();
                } else {
                  ImagePicker.openCamera({
                    multiple: multiple,
                    compressImageMaxWidth: 800,
                    compressImageMaxHeight: 800,
                    compressImageQuality: Platform.select({
                      ios: 0.8,
                      android: 1,
                    }),
                    mediaType: type ? type : 'photo',
                  }).then(imageList => {
                    selectedGalleryListener(imageList, true);
                    galleyCloseListener();
                  });
                }
                break;
              case RESULTS.BLOCKED:
                goToSettings();
                // Alert.alert('Please give camera permission to capture photo');
                break;
            }
          })
          .catch(error => {
            console.log(error);
          });
        break;
      case 'Gallery':
        check(
          Platform.OS === 'ios'
            ? PERMISSIONS.IOS.PHOTO_LIBRARY
            : androidVersion >= 13
            ? PERMISSIONS.ANDROID.READ_MEDIA_IMAGES
            : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
        )
          .then(result => {
            switch (result) {
              case RESULTS.DENIED:
                request(
                  Platform.OS === 'ios'
                    ? PERMISSIONS.IOS.PHOTO_LIBRARY
                    : androidVersion >= 13
                    ? PERMISSIONS.ANDROID.READ_MEDIA_IMAGES
                    : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
                ).then(result => {
                  if (result === RESULTS.GRANTED) {
                    ImagePicker.openPicker({
                      multiple: multiple,
                      // cropping: true,
                      mediaType: type ? type : 'photo',
                      showCropFrame: true,
                      compressImageQuality: Platform.select({
                        ios: 0.8,
                        android: 1,
                      }),
                      compressImageMaxWidth: 800,
                      compressImageMaxHeight: 800,
                      freeStyleCropEnabled: true,
                      /*  compressImageMaxWidth: 800,
                      compressImageMaxHeight: 800,
                      compressImageQuality: Platform.select({
                        ios: 0.8,
                        android: 1,
                      }), */
                      /*  cropping: true,
                      mediaType: 'photo',
                      showCropFrame: true,
                      freeStyleCropEnabled: true, */
                    }).then(imageList => {
                      galleyCloseListener();
                      selectedGalleryListener(imageList);
                    });
                  } else {
                    goToSettings();
                    /*  Platform.OS === 'android'
                                           ? Alert.alert(
                                             'Please give storage permission to access gallery',
                                           )
                                           : Alert.alert(
                                             'Please give storage permission to access photo gallery',
                                           ); */
                  }
                });
                break;
              case RESULTS.GRANTED:
                ImagePicker.openPicker({
                  multiple: multiple,
                  // cropping: true,
                  mediaType: type ? type : 'photo',
                  showCropFrame: true,
                  freeStyleCropEnabled: true,
                  compressImageQuality: Platform.select({
                    ios: 0.8,
                    android: 1,
                  }),
                  compressImageMaxWidth: 800,
                  compressImageMaxHeight: 800,
                  /* compressImageMaxWidth: 800,
                  compressImageMaxHeight: 800,
                  compressImageQuality: Platform.select({
                    ios: 0.8,
                    android: 1,
                  }), */
                  /* cropping: true,
                  mediaType: 'photo',
                  showCropFrame: true,
                  freeStyleCropEnabled: true, */
                }).then(imageList => {
                  galleyCloseListener();
                  selectedGalleryListener(imageList);
                });
                break;
              case RESULTS.BLOCKED:
                goToSettings();
                /*  Platform.OS === 'android'
                                   ? Alert.alert(
                                     'Please give storage permission to access gallery',
                                   )
                                   : Alert.alert(
                                     'Please give storage permission to access photo gallery',
                                   ); */
                break;
              case RESULTS.LIMITED:
                ImagePicker.openPicker({
                  multiple: multiple,
                  compressImageQuality: Platform.select({
                    ios: 0.8,
                    android: 1,
                  }),
                  compressImageMaxWidth: 800,
                  compressImageMaxHeight: 800,
                  /* compressImageMaxWidth: 800,
                  compressImageMaxHeight: 800,
                  compressImageQuality: Platform.select({
                    ios: 0.8,
                    android: 1,
                  }), */
                  // cropping: true,
                  mediaType: type ? type : 'photo',
                  showCropFrame: true,
                  freeStyleCropEnabled: true,
                }).then(imageList => {
                  galleyCloseListener();
                  selectedGalleryListener(imageList);
                });
                break;
            }
          })
          .catch(error => {
            console.log(error, 'error in check permission');
          });
        break;
    }
  };
  const checkStoragePermission = () => {
    check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE).then(result => {
      switch (result) {
        case RESULTS.DENIED:
          request(
            androidVersion >= 13
              ? PERMISSIONS.ANDROID.READ_MEDIA_IMAGES
              : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
          ).then(result => {
            if (result === RESULTS.GRANTED) {
              ImagePicker.openCamera({
                multiple: multiple,
                compressImageQuality: Platform.select({
                  ios: 0.8,
                  android: 1,
                }),
                compressImageMaxWidth: 800,
                compressImageMaxHeight: 800,
                /* compressImageMaxWidth: 800,
                compressImageMaxHeight: 800,
                compressImageQuality: Platform.select({
                  ios: 0.8,
                  android: 1,
                }), */
                mediaType: type ? type : 'photo',
              }).then(imageList => {
                galleyCloseListener();
                selectedGalleryListener(imageList, true);
              });
            } else {
              goToSettings();
              // Alert.alert('Please give storage permission to capture photo');
            }
          });
          break;
        case RESULTS.GRANTED:
          ImagePicker.openCamera({
            multiple: multiple,
            compressImageQuality: Platform.select({
              ios: 0.8,
              android: 1,
            }),
            compressImageMaxWidth: 800,
            compressImageMaxHeight: 800,
            /* compressImageMaxWidth: 800,
            compressImageMaxHeight: 800,
            compressImageQuality: Platform.select({
              ios: 0.8,
              android: 1,
            }), */
            mediaType: type ? type : 'photo',
            compressVideoPreset: 'MediumQuality',
          }).then(imageList => {
            galleyCloseListener();
            selectedGalleryListener(imageList, true);
          });
          break;
        case RESULTS.BLOCKED:
          goToSettings();
          // Alert.alert('Please give storage permission to capture photo');
          break;
      }
    });
  };

  return (
    <Modal
      isOpen={isGalleryOpen}
      onClosed={galleyCloseListener}
      position="bottom"
      entry="bottom"
      style={styles.modalContainer}
      swipeToClose={false}
      coverScreen={true}>
      <View style={[styles.vCameraContainer]}>
        <TouchableOpacity
          onPress={() => {
            checkPermission('Camera');
          }}
          style={styles.toButtonContainer}
          activeOpacity={0.8}>
          <Text style={[styles.tTitle]}>{STRING.account.camera}</Text>
        </TouchableOpacity>
        <View style={styles.vLineContainer} />
        <TouchableOpacity
          style={styles.toButtonContainer}
          activeOpacity={0.8}
          onPress={() => {
            checkPermission('Gallery');
          }}>
          <Text style={[styles.tTitle]}>{STRING.account.gallery}</Text>
        </TouchableOpacity>
        {isProfile && <View style={styles.vLineContainer} />}
        {isProfile && (
          <TouchableOpacity
            style={styles.toButtonContainer}
            activeOpacity={0.8}
            onPress={() => {
              removePhoto();
            }}>
            <Text style={styles.tTitle}>{STRING.account.remove_photo}</Text>
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity
        style={[styles.toCancelContainer]}
        activeOpacity={0.8}
        onPress={() => {
          galleyCloseListener();
        }}>
        <Text style={[styles.tCancel]}>{STRING.account.cancel}</Text>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    height: undefined,
    paddingBottom: SIZES.smartScale(20),
    backgroundColor: 'transparent',
  },
  vFlexSpace: {
    flex: 1,
  },
  vCameraContainer: {
    marginHorizontal: SIZES.smartWidthScale(20),
    backgroundColor: COLOR.white,
    borderRadius: SIZES.countPixelRatio(10),
  },
  toButtonContainer: {
    paddingVertical: SIZES.smartScale(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  tTitle: {
    fontSize: SIZES.countPixelRatio(20),
    fontFamily: FONTS.REGULAR,
    color: COLOR.black,
  },
  vLineContainer: {
    height: SIZES.smartScale(0.8),
    backgroundColor: COLOR.black,
    opacity: 0.07,
  },
  tCancel: {
    fontSize: SIZES.countPixelRatio(20),
    color: COLOR.black,
  },
  toCancelContainer: {
    marginTop: SIZES.smartScale(10),
    paddingVertical: SIZES.smartScale(15),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.countPixelRatio(10),
    marginHorizontal: SIZES.smartWidthScale(20),
    backgroundColor: COLOR.white,
  },
});
