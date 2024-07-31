import {StyleSheet} from 'react-native';
import {Colors} from '../../Theme/Variables';

export default StyleSheet.create({
  inputContainer: {
    backgroundColor: Colors.white,
    flex: 1,
    borderRadius: 10,
    height: 66,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    overflow: 'hidden',
  },
  input: {
    fontSize: 18,
    fontWeight: '400',
  },
  searchIcon: {
    width: 25,
    height: 25,
  },
  btnSearch: {
    height: 65,
    width: 65,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blue,
    borderRadius: 10,
    marginLeft: 10,
  },
});
