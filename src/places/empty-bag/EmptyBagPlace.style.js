import {StyleSheet} from 'react-native';
import { COLORS } from '../../styles/variables';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    contentWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent:"center",
        width: 200,
        gap: 10
    },
    title : {
        fontSize: 30,
        color: COLORS.dark,
        fontWeight: '400'
    },
    desc: {
        textAlign: 'center'
    }
});

export default styles;