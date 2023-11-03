import {StyleSheet} from 'react-native';
import { COLORS, RADIUS } from '../../styles/variables';

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: COLORS.light,
        height: 300,
        width: 200,
        marginRight: 30,
        borderRadius: RADIUS.big
    },
    img: {
        width: 200,
        height: 150
    }
    
});

export default styles;