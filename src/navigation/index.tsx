import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BackHandler, ToastAndroid} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from 'src/navigation/RootNavigation';
import {Routes} from 'src/navigation/route';
import CustomTabBar from 'src/navigation/customTabBar';
import Splash from 'src/screens/onboarding/splash';
import Home from 'src/screens/tabs/home';
import {STRING} from 'src/utils';
import DeviceDetail from 'src/screens/tabs/deviceDetail';
import Account from 'src/screens/tabs/account';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

let backPressed = 0;
function handleBackButton() {
  if (backPressed > 0) {
    BackHandler.exitApp();
    backPressed = 0;
  } else {
    backPressed++;
    ToastAndroid.show(STRING.press_again, ToastAndroid.SHORT);
    setTimeout(() => {
      backPressed = 0;
    }, 1000);
    return true;
  }
}
export default (): JSX.Element | null => {
  function TabComponent() {
    return (
      <Tab.Navigator
        tabBar={props => <CustomTabBar {...props} />}
        backBehavior={'none'}
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          name={Routes.Home}
          component={Home}
          listeners={{
            focus: () =>
              BackHandler.addEventListener(
                'hardwareBackPress',
                handleBackButton,
              ),
            blur: () =>
              BackHandler.removeEventListener(
                'hardwareBackPress',
                handleBackButton,
              ),
          }}
        />
        <Tab.Screen
          name={Routes.DeviceDetails}
          component={DeviceDetail}
          listeners={{
            focus: () =>
              BackHandler.addEventListener(
                'hardwareBackPress',
                handleBackButton,
              ),
            blur: () =>
              BackHandler.removeEventListener(
                'hardwareBackPress',
                handleBackButton,
              ),
          }}
        />
        <Tab.Screen
          name={Routes.Account}
          component={Account}
          listeners={{
            focus: () =>
              BackHandler.addEventListener(
                'hardwareBackPress',
                handleBackButton,
              ),
            blur: () =>
              BackHandler.removeEventListener(
                'hardwareBackPress',
                handleBackButton,
              ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'simple_push',
          animationDuration: 200,
        }}
        initialRouteName={Routes.Splash}>
        <Stack.Screen name={Routes.Splash} component={Splash} />
        <Stack.Screen name={Routes.Dashboard} component={TabComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
