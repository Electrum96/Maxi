import {StyleSheet} from 'react-native';
import { COLORS, RADIUS } from '../../styles/variables';

const styles = StyleSheet.create({
    itemWrap: {
        backgroundColor: COLORS.light,
        borderRadius: RADIUS.little,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 300,
        height: 100,
        padding: 20
       
    },
    image: {
        width: 100,
        height: 50,
    },
    informWrap: {
        width: 100,
        gap: 5
    },
    title: {
        fontWeight: '700',
        fontSize: 15

    },
    btnWrap:{
        flex: 1,
        paddingVertical: 10,
        height: 100,
        alignItems: 'flex-end',
        paddingBottom: 20,
        justifyContent: 'space-between'
    }
    
});

export default styles;