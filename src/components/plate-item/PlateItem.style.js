import {StyleSheet} from 'react-native';
import {COLORS, RADIUS} from '../../styles/variables';

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 50,
    position: 'relative',
    backgroundColor: COLORS.light,
    height: 230,
    width: 200,
    // marginRight: 30,
    borderRadius: RADIUS.big,
  },
  imgWrp: {
    top: -50,
    left: 30,
    position: 'absolute',
    // backgroundColor: 'red',
  },
  img: {
    // width: 200,
    // height: 150,
    width: 150,
    height: 100,
  },

  content: {
    paddingTop: 50,
  },

  title: {
    textAlign: 'center',
  },
});

export default styles;
