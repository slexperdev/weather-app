import React, {useEffect} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';

import {navigateAndSimpleReset} from '../../Navigators/Root';

import {useTheme} from '../../Theme';
import styles from './styles';

export default function SplashScreen() {
  const {Layout, Images} = useTheme();

  useEffect(() => {
    navigateToWeather();
  }, []);

  const navigateToWeather = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    navigateAndSimpleReset('HomeScreen');
  };

  return (
    <SafeAreaView style={[Layout.fill, Layout.center]}>
      <View style={[Layout.colCenter]}>
        <Image source={Images.logo} style={styles.logo} />
        <Text style={styles.caption}>Weather Assistant</Text>
      </View>
    </SafeAreaView>
  );
}
