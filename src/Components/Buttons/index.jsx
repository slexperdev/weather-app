import {TouchableOpacity, Text, Image} from 'react-native';

import {useTheme} from '../../Theme';
import styles from './styles';

export const BackButton = ({text, color, ...rest}) => {
  const {Images, Layout} = useTheme();
  return (
    <TouchableOpacity style={[Layout.rowHCenter]} {...rest}>
      <Image
        source={color ? Images.backArrowDark : Images.backArrow}
        style={styles.backIcon}
      />
      <Text style={[styles.text, color && {color: color}]}>{text}</Text>
    </TouchableOpacity>
  );
};
