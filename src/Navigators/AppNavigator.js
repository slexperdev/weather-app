import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//screens
import SplashScreen from '../Containers/Splash';
import HomeScreen from '../Containers/Home';
import SearchScreen from '../Containers/Search';
import TodayForecastScreen from '../Containers/TodayForecast';

import {navigationRef} from './Root';
import {useTheme} from '../Theme';

const {Screen, Navigator} = createStackNavigator();

function AppNavigator() {
  const {NavigationTheme} = useTheme();

  return (
    <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Screen name="SplashScreen" component={SplashScreen} />
        <Screen name="HomeScreen" component={HomeScreen} />
        <Screen name="SearchScreen" component={SearchScreen} />
        <Screen name="TodayForecastScreen" component={TodayForecastScreen} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
