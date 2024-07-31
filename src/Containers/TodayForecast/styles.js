import {StyleSheet} from 'react-native';
import {Colors} from '../../Theme/Variables';

export default StyleSheet.create({
  icon: {
    width: 100,
    height: 100,
    aspectRatio: 1,
  },
  timeText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
    marginTop: 10,
  },
  labelText1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.orange,
  },
  labelText2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
  },
});
