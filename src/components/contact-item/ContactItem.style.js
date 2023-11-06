import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles/variables';

const add = {
  borderBottomWidth: 1,
  borderBottomColor: COLORS.dark,
  width: 300,
//   height: 00
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.itemBg,
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderColor: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  email: {...add},
  number: {...add},
  desc: {
    ...add,
  },
});

export default styles;
