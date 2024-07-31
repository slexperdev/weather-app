import {StyleSheet} from 'react-native';
import {Colors} from '../../Theme/Variables';

export default StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  text: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '500',
    marginTop: 2,
  },
});
