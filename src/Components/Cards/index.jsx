import {View} from 'react-native';
import styles from './styles';

export const CardContainer = ({children}) => (
  <View style={styles.container}>{children}</View>
);
