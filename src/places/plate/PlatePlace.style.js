import {StyleSheet} from 'react-native';
import { COLORS } from '../../styles/variables';

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'red',
        height: '100%'
    },
    image : {
        width: 250,
        height: 200,
        marginBottom: 20
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        color: COLORS.dark,
        marginVertical: 20
    }
});

export default styles;