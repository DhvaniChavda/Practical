import React, {useEffect} from 'react';
import {StatusBar, Text, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import styles from './style';
import {STRING} from 'src/utils';
import {replace} from 'src/navigation/RootNavigation';
import {Routes} from 'src/navigation/route';

export default (): JSX.Element => {
  useEffect(() => {
    setTimeout(() => {
      replace(Routes.Dashboard);
    }, 2000);
  }, []);
  return (
    <SafeAreaView
      forceInset={{top: 'always', bottom: 'never'}}
      style={styles.SaContainer}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        translucent
      />
      <View style={styles.SaContainer}>
        <Text style={styles.tTitle}>{STRING.splash.welcome}</Text>
      </View>
    </SafeAreaView>
  );
};
