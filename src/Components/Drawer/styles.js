import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  drawer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: width * 0.75,
    backgroundColor: '#fff',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  drawerItem: {
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
  drawerItemText: {
    fontSize: 18,
    marginLeft: 25,
    fontWeight: '500',
    color: 'black',
  },
  logo: {
    width: 150,
    height: 150,
    aspectRatio: 1,
  },
  caption: {
    textTransform: 'uppercase',
    fontSize: 12,
    marginTop: 5,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 5,
    padding: 10,
  },
  closeIcon: {
    width: 15,
    height: 15,
    aspectRatio: 1,
  },
  itemIcon: {
    width: 20,
    height: 20,
    aspectRatio: 1,
  },
});
