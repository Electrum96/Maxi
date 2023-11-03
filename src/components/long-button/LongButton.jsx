import {Text, View,  TouchableOpacity} from 'react-native';

import styles from './LongButton.style';

const LongButton = ({title, onPress}) => {

    return (
       <TouchableOpacity style={styles.btnCont} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
       </TouchableOpacity>
    )
}

export default LongButton;