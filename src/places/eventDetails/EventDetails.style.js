import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles/variables';

const styles = StyleSheet.create({
  page: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  image: {
    width: '120%',
    marginTop: 10,
    // height: undefined, aspectRatio: 1
    height: '55%',
  },

  informWrap: {
    padding: 20,
    backgroundColor: COLORS.light,
    borderRadius: 20,
    alignItems: 'center',
  },

  title: {
    fontSize: 15,
    color: COLORS.dark,
    fontWeight: 'bold',
    marginBottom: 5
  },

  desc: {
    textAlign: 'center',
    color: COLORS.dark,
    opacity: .9
  }
});

export default styles;
