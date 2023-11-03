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
        backgroundColor: 'yellow',
        gap: 20,
        width: 300,
    },

    input: {
        color: COLORS.light,
        marginHorizontal: 20,
        borderBottomWidth: 0.5,
        height: 50,
       
    },
   
    
});

export default styles;