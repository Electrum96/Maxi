import {StyleSheet} from 'react-native';
import { COLORS } from '../../styles/variables';

const styles = StyleSheet.create({
    item: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#ffffff90',
        borderRadius: 20
    },

    desc:{
        textAlign: 'center',
        color: COLORS.dark
    }
});

export default styles;