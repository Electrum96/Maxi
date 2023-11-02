import {StyleSheet, Dimensions} from 'react-native';
import { COLORS } from '../../styles/variables';

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: COLORS.accentBg,
        gap: 20
    } ,
    logo: {
        width: 140,
        height: 156,
        marginVertical: 40,
        alignSelf: 'center'
    },
    
});

export default styles;