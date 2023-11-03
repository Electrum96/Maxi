import {Text, View,  TouchableOpacity} from 'react-native';

import styles from './LongButton.style';

const LongButton = ({title}) => {

    return (
       <TouchableOpacity style={styles.btnCont}>
        <Text style={styles.title}>{title}</Text>
       </TouchableOpacity>
    )
}

export default LongButton;