import {StyleSheet} from 'react-native';

import { COLORS} from '../../styles/variables';

const styles = StyleSheet.create({
    wrap: {
    justifyContent: 'space-between',
    height: '100%',
    alignItems: 'center'
    },

    inputsWrap: {
        justifyContent: 'center',
        marginTop: 40,
        gap: 20,
        width: 300,
    },

    input: {
        marginHorizontal: 20,
        borderBottomWidth: 1,
        padding: 10,
        height: 60,
        borderColor: COLORS.light
       
    },
   
    
});

export default styles;