import {StyleSheet} from 'react-native';
import { COLORS, RADIUS } from '../../styles/variables';

const styles = StyleSheet.create({
    btnCont: {
        backgroundColor: COLORS.yellow,
        borderRadius: RADIUS.big,
        padding: 20,
        width: 300,
        marginVertical: 20
    },
    title: {
        textAlign: 'center',
        color: COLORS.dark
    }
    
});

export default styles;