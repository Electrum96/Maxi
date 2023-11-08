import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles/variables';

const styles = StyleSheet.create({
  pageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  image: {
    width: '120%',
    marginTop: 10,
    // height: undefined, aspectRatio: 1
    height: '70%',
  },
  liBox: {
    width: 200,
    alignContent: 'center',
    marginTop: -120,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },

  item: {
    flexDirection: 'row',
  },

  title: {
    // maxWidth: 200,
    fontWeight: '600',
    fontSize: 17,
    color: COLORS.light,
  },

  time: {
    textAlign: 'center',
    marginLeft: 10,
    color: COLORS.light,
  },
});

export default styles;
