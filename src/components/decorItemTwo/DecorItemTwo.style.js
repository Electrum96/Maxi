import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles/variables';

const styles = StyleSheet.create({
    item: {
        padding: 20,
        backgroundColor: '#00000090',
      },

  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    marginBottom: 10,
  },

  title: {
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: '800',
    color: COLORS.light,
  },

  time: {
    color: COLORS.light,
  },



  desc: {
    opacity: .9,
    textAlign: 'center',
    color: COLORS.light,
  },
});

export default styles;
