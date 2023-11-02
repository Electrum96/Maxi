import {Text, View, Image} from 'react-native';

import navigationButtons from '../../data/navigationButtons';

import MainButtons from '../../components/mainButtons/MainButtons'

import styles from './MainPlace.style.js';

const MainPlace = ({navigation}) => {

    return <View style={styles.container}>
        <Text>test</Text>
        {/* {navigationButtons.map((item) => <MainButtons key={item.title} title={item.title}  onPress={() => navigation.push(item.route)}/>)} */}
    </View>
}

export default MainPlace;