import {useFocusEffect} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ScrollView, StatusBar, Text, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import styles from './style';
import {COLOR, SIZES} from 'src/theme';
import {ToolbarWithTitle} from 'src/component/custom/toolbar';
import {STRING} from 'src/utils';
import DeviceInfo from 'react-native-device-info';

export default (): JSX.Element => {
  const [appVersion, setAppVersion] = useState('');
  const [buildVersion, setBuildVersion] = useState('');
  const [bundleId, setBundleId] = useState('');
  const [batteryLevel, setBatteryLevel] = useState(0);
  const [totalDiskSpace, setTotalDiskSpace] = useState(0);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content');
      StatusBar.setBackgroundColor(COLOR.theme);
      StatusBar.setTranslucent(true);
    }, []),
  );
  useEffect(() => {
    setAppVersion(DeviceInfo.getVersion());
    setBuildVersion(DeviceInfo.getBuildNumber());
    setBundleId(DeviceInfo.getBundleId());

    DeviceInfo.getBatteryLevel().then(level => {
      setBatteryLevel(level);
    });

    DeviceInfo.getTotalDiskCapacity().then(capacity => {
      setTotalDiskSpace(capacity);
    });
  }, []);
  const renderTitleContainer = (title: string) => {
    return <Text style={styles.tLabel}>{title}</Text>;
  };
  const renderValueContainer = (value: any) => {
    return (
      <View style={styles.vShadowBox}>
        <Text style={styles.tValue}>{value}</Text>
      </View>
    );
  };
  const renderBatteryValueContainer = (value: any) => {
    return (
      <View style={styles.vShadowBox}>
        <Text style={styles.tValue}>{Math.round(value * 100)}%</Text>
      </View>
    );
  };
  const renderDiskValueContainer = (value: any) => {
    return (
      <View style={styles.vShadowBox}>
        <Text style={styles.tValue}>
          {Math.round(value / (1024 * 1024 * 1024))} GB
        </Text>
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
      <ToolbarWithTitle title={STRING.device.device_detail} />
      <ScrollView
        style={styles.vContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: SIZES.countPixelRatio(25),
          marginTop: SIZES.countPixelRatio(20),
          flexGrow: 1,
        }}>
        {renderTitleContainer(STRING.device.app_version)}
        {renderValueContainer(appVersion)}
        {renderTitleContainer(STRING.device.build_version)}
        {renderValueContainer(buildVersion)}
        {renderTitleContainer(STRING.device.bundle)}
        {renderValueContainer(bundleId)}
        {renderTitleContainer(STRING.device.battery)}
        {renderBatteryValueContainer(batteryLevel)}
        {renderTitleContainer(STRING.device.disk_space)}
        {renderDiskValueContainer(totalDiskSpace)}
      </ScrollView>
    </SafeAreaView>
  );
};
