import {StyleSheet} from 'react-native';
import { COLORS, RADIUS } from '../../styles/variables';

const styles = StyleSheet.create({
    counter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
        borderRadius: RADIUS.big,
        backgroundColor: COLORS.red
    
      },
      counterText: {
        paddingHorizontal: 5,
        color: COLORS.light,
        fontSize: 17
      },
});

export default styles;