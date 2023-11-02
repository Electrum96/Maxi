import {StyleSheet} from 'react-native';
import { COLORS } from '../../styles/variables';

const styles = StyleSheet.create({
    buttonsWrap: {
        flexDirection: 'row',
        marginLeft: 40,
        marginTop: 20,
        gap: 15
    },
    title: {
        color: COLORS.light,
        fontWeight: "700",
        fontSize: 20,
        borderBottomWidth: 1,
        borderColor: COLORS.light,
        width: 200,
        paddingBottom: 25
    },
    img: {
        width: 30,
        height: 30
    }
});

export default styles;