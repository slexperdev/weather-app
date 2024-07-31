/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';

import React, {useEffect} from 'react';
import {PermissionsAndroid} from 'react-native';

import AppNavigator from './src/Navigators/AppNavigator';
import {WeatherProvider} from './src/Context';

const App = () => {
  useEffect(() => {
    requestLocationPermission();
  }, []);

  // Request location permission
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'Weather App needs access to your location ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <WeatherProvider>
      <AppNavigator />
    </WeatherProvider>
  );
};

export default App;
