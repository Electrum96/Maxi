import {StyleSheet} from 'react-native';
import {COLORS, RADIUS} from '../../styles/variables';

const styles = StyleSheet.create({
  item: {
    borderRadius: RADIUS.big,
    overflow: 'hidden',
    backgroundColor: COLORS.light,
  },

  header: {
    paddingVertical: 20,
    paddingHorizontal: 40,
    backgroundColor: COLORS.itemBg,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.accentBg
  },

  main: {
    paddingVertical: 20,
    paddingHorizontal: 40,
  },

  team: {
      paddingVertical: 10,
      fontSize: 18,
      color: COLORS.dark
  },

  team1: {
    borderBottomWidth: 1,
    borderColor: COLORS.grey,
  },

  team2: {},
});

export default styles;
