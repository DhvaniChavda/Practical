import React, {useState} from 'react';
import {Image, ScrollView, StatusBar, Text, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import styles from './style';
import {COLOR, SIZES} from 'src/theme';
import {ToolbarWithTitle} from 'src/component/custom/toolbar';
import {STRING} from 'src/utils';
import {APP_IMAGES} from 'src/assets/images';
import {useFocusEffect} from '@react-navigation/native';
import {ModalMenu} from 'src/component/custom/modal';

export default ({route}: any): JSX.Element => {
  const [isMenu, setIsMenu] = useState<boolean>(false);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content');
      StatusBar.setBackgroundColor(COLOR.theme);
      StatusBar.setTranslucent(true);
    }, []),
  );
  const renderTitleContainer = (title: string) => {
    return <Text style={styles.tTitle}>{title}</Text>;
  };
  const renderBoxContainer = (
    title1: string,
    title2: string,
    title3: string,
    title4: string,
    icon: any,
    num: number,
  ) => {
    return (
      <View style={[styles.vMainBox, styles.shadowProp]}>
        <View style={styles.vDesc1}>
          <Text style={styles.tInfo}>{title1}</Text>
          <Text style={styles.tInfo}>{title2}</Text>
          <Text style={styles.tInfo}>{title3}</Text>
          <Text style={styles.tInfo}>{title4}</Text>
        </View>
        <View style={styles.vDesc2}>
          <Image source={icon} style={styles.iIcon} />
          <Text style={styles.tNum}>{num}</Text>
        </View>
      </View>
    );
  };
  const renderBottomContainer = () => {
    return (
      <View style={styles.vRowBox}>
        <View style={[styles.Box1, {marginRight: SIZES.countPixelRatio(25)}]}>
          <Image
            source={APP_IMAGES.ic_plus}
            style={[styles.iIcon, {marginBottom: SIZES.countPixelRatio(5)}]}
          />
          <Text style={[styles.tInfo]}>{STRING.home.schedule}</Text>
        </View>
        <View style={styles.Box1}>
          <Image
            source={APP_IMAGES.ic_call}
            style={[styles.iIcon, {marginBottom: SIZES.countPixelRatio(5)}]}
          />
          <Text style={styles.tInfo}>{STRING.home.call}</Text>
        </View>
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
      <ToolbarWithTitle
        title={STRING.home.dashboard}
        isRightIcon={true}
        rightIcon1={APP_IMAGES.ic_notification}
        rightIcon2={APP_IMAGES.ic_menu}
        onMenuClick={() => {
          setIsMenu(true);
        }}
      />
      <ScrollView
        style={styles.vContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: SIZES.countPixelRatio(25),
          flexGrow: 1,
        }}>
        <View
          onTouchEnd={() => {
            setIsMenu(false);
          }}
          style={{flex: 1}}>
          {renderTitleContainer(STRING.home.upcoming)}
          {renderBoxContainer(
            STRING.home.doc1,
            STRING.home.doc2,
            '',
            '',
            APP_IMAGES.ic_stethoscope,
            STRING.home.num_2,
          )}
          {renderTitleContainer(STRING.home.medical)}
          {renderBoxContainer(
            STRING.home.pdf1,
            STRING.home.pdf2,
            STRING.home.pdf3,
            STRING.home.pdf4,
            APP_IMAGES.ic_files,
            STRING.home.num_7,
          )}
          {renderBottomContainer()}
        </View>
      </ScrollView>
      {isMenu && (
        <ModalMenu
          isDialogOpen={isMenu}
          onDialogClosed={() => {
            setIsMenu(false);
          }}
          // isClick={}
        />
      )}
    </SafeAreaView>
  );
};
