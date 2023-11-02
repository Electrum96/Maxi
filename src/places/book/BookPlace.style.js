import {StyleSheet, Dimensions} from 'react-native';

import { COLORS } from '../../styles/variables';

const styles = StyleSheet.create({
    bookWrap: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: COLORS.accentBg,
    }
    
});

export default styles;