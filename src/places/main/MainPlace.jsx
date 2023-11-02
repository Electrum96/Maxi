import {Text, View, Image} from 'react-native';

import navigationButtons from '../../data/navigationButtons';

import MainButtons from '../../components/mainButtons/MainButtons';

import styles from './MainPlace.style.js';

const MainPlace = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../images/logo/LogoMaxi.png')}/>
      {navigationButtons.map(item => (
        <MainButtons
          key={item.route}
          title={item.title}
          img={item.img}
          onPress={() => navigation.push(item.route)}
        />
      ))}
    </View>
  );
};

export default MainPlace;
