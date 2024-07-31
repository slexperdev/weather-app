import React from 'react';
import {ActivityIndicator, View, Text} from 'react-native';

import styles from './styles';

export const Spinner = ({
  size = 'small',
  color = '#ffffff',
  withOverlay,
  text = 'Loading...',
}) => (
  <View style={withOverlay && styles.overlay}>
    <ActivityIndicator size={size} color={color} />
    <Text style={styles.text}>{text}</Text>
  </View>
);
