import React, {useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {ToolbarWithTitle} from 'src/component/custom/toolbar';
import styles from './style';
import {STRING} from 'src/utils';
import {useFocusEffect} from '@react-navigation/native';
import {COLOR} from 'src/theme';
import {APP_IMAGES} from 'src/assets/images';
import {ModalGalleryPicker, ModalRemovePhoto} from 'src/component/custom/modal';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {ThemeButton} from 'src/component/custom/button';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB in bytes
export default ({route}: any): JSX.Element => {
  const [selectedGalleryList, setSelectedGalleryList] = useState<any>({});
  const [imageLoader, setImageLoader] = useState<boolean>(true);
  const [isGalleryPickerOpen, setGalleryPickerModal] = useState<boolean>(false);
  const [profilePicture, setProfilePicture] = useState('');
  const [isGalleryModal, setGalleryModal] = useState<boolean>(false);
  const [removePhotoModal, setRemovePhotoModal] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());

  const [isDatePickerVisible, setDatePickerVisibility] =
    useState<boolean>(false);
  const [isTimePickerVisible, setTimePickerVisibility] =
    useState<boolean>(false);
  const [isAgree, setIsAgree] = useState<boolean>(false);
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content');
      StatusBar.setBackgroundColor(COLOR.theme);
      StatusBar.setTranslucent(true);
    }, []),
  );
  const handleImageLoad = () => {
    setImageLoader(false);
  };
  const closeGalleryModal = () => {
    setGalleryPickerModal(false);
  };
  const manageSelectedList = (selectedGallery: any) => {
    if (selectedGallery.size > MAX_FILE_SIZE) {
      Alert.alert(
        'File Too Large',
        'Please select an image that is less than 5 MB in size.',
      );
      return;
    } else {
      setSelectedGalleryList(selectedGallery);
      setProfilePicture(selectedGallery.path);
    }
  };
  const openRemovePhoto = () => {
    setGalleryModal(false);
    setRemovePhotoModal(true);
  };
  const onDialogClosed = () => {
    setRemovePhotoModal(false);
    setGalleryPickerModal(false);
  };
  const onRemovePhotoYesClick = () => {
    setProfilePicture('');
    setSelectedGalleryList('');
    setRemovePhotoModal(false);
    setGalleryPickerModal(false);
  };
  const onCheckClick = () => {
    setIsAgree((prev: boolean) => !prev);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };
  const handleDateConfirm = (date: any) => {
    console.warn('A date has been picked: ', date);
    setSelectedDate(date);
    hideDatePicker();
  };
  const handleTimeConfirm = (date: any) => {
    console.warn('A time has been picked: ', date);
    setSelectedTime(date);
    hideTimePicker();
  };
  const renderImageContainer = () => {
    return (
      <View style={styles.vImageContainer}>
        <ImageBackground
          source={
            profilePicture
              ? {
                  uri: profilePicture,
                }
              : APP_IMAGES.ic_upload_photo
          }
          imageStyle={styles.iProfile}
          style={styles.iProfile}
          onLoad={handleImageLoad}>
          {imageLoader ? (
            <View style={styles.vLoader}>
              <ActivityIndicator
                size={'small'}
                color={COLOR.theme}
                animating={selectedGalleryList.path}
              />
            </View>
          ) : null}
          <TouchableOpacity
            style={styles.toCamera}
            activeOpacity={0.8}
            onPress={() => setGalleryPickerModal(true)}>
            <Image source={APP_IMAGES.ic_camera} style={styles.iCamera} />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  };
  const renderInputContainer = () => {
    return (
      <TextInput
        value={name}
        onChangeText={(text: string) => {
          setName(text);
        }}
        placeholder={STRING.account.ph_name}
        style={styles.tiInput}
      />
    );
  };
  const renderDatePicker = () => {
    return (
      <>
        <ThemeButton
          title={STRING.account.show_date}
          customStyle={styles.btnDate}
          onPress={showDatePicker}
        />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleDateConfirm}
          onCancel={hideDatePicker}
        />
      </>
    );
  };
  const renderTimePicker = () => {
    return (
      <>
        <ThemeButton
          title={STRING.account.show_time}
          customStyle={styles.btnTime}
          titleStyle={styles.tTime}
          onPress={showTimePicker}
        />
        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={handleTimeConfirm}
          onCancel={hideTimePicker}
        />
      </>
    );
  };
  const renderDisplayDate = () => {
    return (
      <Text style={styles.tDate}>
        Selected Date : {selectedDate.toLocaleDateString()}
      </Text>
    );
  };
  const renderDisplayTime = () => {
    return (
      <Text style={styles.tDate}>
        Selected Time : {selectedTime.toLocaleTimeString()}
      </Text>
    );
  };
  const renderAgreeContainer = () => {
    return (
      <View style={styles.vRow}>
        <TouchableOpacity activeOpacity={0.4} onPress={onCheckClick}>
          <Image
            source={isAgree ? APP_IMAGES.ic_check_square : APP_IMAGES.ic_square}
            style={styles.iSquare}
          />
        </TouchableOpacity>
        <Text style={styles.tAgree}>{STRING.account.agree}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView
      forceInset={{top: 'always', bottom: 'never'}}
      style={styles.SaContainer}>
      <StatusBar
        backgroundColor={COLOR.theme}
        barStyle={'light-content'}
        translucent
      />
      <ToolbarWithTitle title={STRING.account.account} />
      <View style={styles.vContainer}>
        {renderImageContainer()}
        {renderInputContainer()}
        {renderDatePicker()}
        {renderTimePicker()}
        {renderDisplayDate()}
        {renderDisplayTime()}
        <View style={{flex: 1}} />
        {renderAgreeContainer()}
      </View>

      {isGalleryPickerOpen && (
        <ModalGalleryPicker
          isGalleryOpen={isGalleryPickerOpen}
          galleyCloseListener={closeGalleryModal}
          selectedGalleryListener={manageSelectedList}
          multiple={false}
          isProfile={profilePicture}
          removePhoto={openRemovePhoto}
        />
      )}
      {removePhotoModal && (
        <ModalRemovePhoto
          isDialogOpen={removePhotoModal}
          onDialogClosed={onDialogClosed}
          removePhoto={onRemovePhotoYesClick}
        />
      )}
    </SafeAreaView>
  );
};
