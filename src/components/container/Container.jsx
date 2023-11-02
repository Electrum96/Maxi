import {Text, View, Image} from 'react-native';

import styles from './Container.style';

const Container = ({children}) => {

    return <View style={styles.mainContainer}>{children}</View>
}

export default Container;