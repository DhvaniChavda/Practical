import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {navigate} from 'src/navigation/RootNavigation';
import {updateCurrentTab} from 'src/redux/action/commonAction';
import {COLOR, FONTS, SIZES} from 'src/theme';
import {STRING} from 'src/utils';

const CustomTabBar = (props: any) => {
  const dispatch = useDispatch();
  const currentTab = useSelector(
    (state: any) => state.commonReducer.currentTab,
  );
  const handleFocusOnIcon = (item: any, index: number) => {
    navigate(item.route);
    dispatch(updateCurrentTab(index));
  };
  return (
    <View style={styles.VContainer}>
      {STRING.bottom_tab.map((item, index) => {
        return (
          <TouchableOpacity
            style={styles.toTabContainer}
            onPress={() => {
              handleFocusOnIcon(item, index);
            }}>
            <Image
              source={item.icon}
              style={
                currentTab == index
                  ? [styles.iIcon, {tintColor: COLOR.theme}]
                  : styles.iIcon
              }
            />

            <Text
              style={
                currentTab == index
                  ? [styles.tTitle, {color: COLOR.theme}]
                  : [styles.tTitle, {opacity: 0.6}]
              }>
              {item.title}
            </Text>
            <View
              style={
                currentTab == index
                  ? [styles.vDot, {backgroundColor: COLOR.theme}]
                  : styles.vDot
              }
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  VContainer: {
    backgroundColor: COLOR.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 10,
    elevation: 10,
    paddingVertical: SIZES.countPixelRatio(10),
  },
  toTabContainer: {
    height: SIZES.countPixelRatio(75),
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  vTabContainer: {
    height: SIZES.countPixelRatio(50),
    backgroundColor: 'pink',
    width: SIZES.countPixelRatio(50),
    borderRadius: SIZES.countPixelRatio(25),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
  },
  activeIcon: {
    tintColor: COLOR.white,
    height: SIZES.countPixelRatio(24),
    width: SIZES.countPixelRatio(24),
    resizeMode: 'contain',
  },
  iIcon: {
    height: SIZES.countPixelRatio(24),
    width: SIZES.countPixelRatio(24),
    resizeMode: 'contain',
    marginBottom: SIZES.countPixelRatio(5),
  },
  tTitle: {
    fontSize: SIZES.countPixelRatio(16),
    fontFamily: FONTS.MEDIUM,
    color: COLOR.black,
  },
  vDot: {
    height: SIZES.countPixelRatio(7),
    width: SIZES.countPixelRatio(7),
    backgroundColor: COLOR.white,
    borderRadius: SIZES.countPixelRatio(7),
    marginTop: SIZES.countPixelRatio(5),
  },
});
export default CustomTabBar;
