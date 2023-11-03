import {StyleSheet, Dimensions} from 'react-native';

import { COLORS } from '../../styles/variables';

const styles = StyleSheet.create({
    bookWrap: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: COLORS.accentBg,
    },
    title : {
        color: COLORS.yellow,
        fontWeight: '700',
        width: 200,
        fontSize: 30,
        marginBottom: 20
     
    }
    
});

export default styles;