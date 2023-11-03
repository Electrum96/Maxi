import {StyleSheet, Dimensions} from 'react-native';
import { COLORS } from '../../styles/variables';

const styles = StyleSheet.create({
    layout: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        justifyContent: 'center',
        backgroundColor: COLORS.accentBg,
        paddingBottom: 24,
    },

    content : {
        flex: 1
    }
});

export default styles;