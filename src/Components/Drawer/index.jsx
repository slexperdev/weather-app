import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  Image,
} from 'react-native';

import {navigate} from '../../Navigators/Root';

import styles from './styles';
import {useTheme} from '../../Theme';

const {width} = Dimensions.get('window');

export const CustomDrawer = ({drawerAnim}) => {
  const {Images, Layout, Gutters} = useTheme();
  const closeDrawer = () => {
    Animated.timing(drawerAnim, {
      toValue: -width * 0.75,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.drawer, {transform: [{translateX: drawerAnim}]}]}>
        <View style={[Layout.colCenter]}>
          <Image source={Images.logo} style={styles.logo} />
          <Text style={styles.caption}>Weather Assistant</Text>
        </View>
        <TouchableOpacity onPress={closeDrawer} style={styles.closeButton}>
          <Image source={Images.closeIcon} style={styles.closeIcon} />
        </TouchableOpacity>
        <View style={[Gutters.largeTMargin]}>
          <TouchableOpacity style={styles.drawerItem}>
            <Image source={Images.calenderIcon} style={styles.itemIcon} />
            <Text style={styles.drawerItemText}>Daily Forecast</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.drawerItem}
            onPress={() => navigate('TodayForecastScreen')}>
            <Image source={Images.todayIcon} style={styles.itemIcon} />
            <Text style={styles.drawerItemText}>Today Forecast</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.drawerItem}>
            <Image source={Images.starFilledIcon} style={styles.itemIcon} />
            <Text style={styles.drawerItemText}>Saved Locations</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};
