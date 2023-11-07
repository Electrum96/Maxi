import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles/variables';

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    alignContent: 'center',
  },

  wrap: {
    width: 270,
    alignItems: 'center',
  },

  main: {
    marginBottom: 30,
  },

  image: {
    width: 300,
    height: 250,
  },

  title: {
    fontSize: 20,
    fontWeight: '500',
    color: COLORS.dark,
    marginBottom: 15
  },

  titleDescBox: {
    width: '100%',
    marginBottom: 30,
    fontWeight: '700',
  },

  titleDescText: {
    color: COLORS.dark,
    fontWeight: '700',
    marginBottom: 10,
  },

  price: {
    textAlign: 'center',
    color: COLORS.red,
    fontWeight: '800',
    fontSize: 20,
  },
});

export default styles;
