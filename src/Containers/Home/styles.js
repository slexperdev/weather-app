import {StyleSheet} from 'react-native';
import {Colors} from '../../Theme/Variables';

export default StyleSheet.create({
  sideBarIcon: {
    width: 25,
    height: 25,
    aspectRatio: 1,
  },
  cityText: {
    color: Colors.white,
    fontSize: 22,
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  dateText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: '500',
  },
  decsText: {
    color: Colors.white,
    fontSize: 22,
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  tempContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  tempText: {
    fontSize: 70,
    color: Colors.white,
    fontWeight: '500',
  },
  weatherIcon: {
    width: 35,
    height: 35,
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  cardDecsText: {
    fontWeight: '500',
  },
  cardValueText: {
    color: 'black',
    fontWeight: '500',
    fontSize: 16,
  },
});
