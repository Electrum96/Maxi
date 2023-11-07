import {StyleSheet} from 'react-native';
import {COLORS, RADIUS} from '../../styles/variables';

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 60,
    position: 'relative',
    backgroundColor: COLORS.light,
    height: 220,
    width: 200,
    borderRadius: RADIUS.big,
    alignItems: 'center'
    
  },
  imgWrp: {
    height: 155,
    top: -70,
    left: 20,
    position: 'absolute',
  },
  img: {
    width: 170,
    height: 130,
  },

  content: {
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 170,
    width: 130,
    gap: 20,
  },

  title: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '800',
    color: COLORS.dark,
    marginTop: 20
  },
  price: {
    color: COLORS.red,
    fontWeight: '800',
    fontSize: 20
  }
});

export default styles;
