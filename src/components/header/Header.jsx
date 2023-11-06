import {Text, View, Image, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigationState} from '@react-navigation/native';
import styles from './Header.style';

const Header = ({icon, color, title, iconTwo, route, navigation}) => {
  const routes = useNavigationState(state => state.routes);
  const currentRoute = routes[routes.length - 1].name;
  const goBag = () => navigation.push('Bag');
  const goRoute = () => {
    if (currentRoute === 'Book') {
      navigation.push('Main');
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.headerWrp}>
      <TouchableOpacity onPress={goRoute} style={styles.goBack}>
        <FontAwesomeIcon icon={icon} color={color} size={25} />
      </TouchableOpacity>

      {title && <Text style={{...styles.title, color: color}}>{title}</Text>}

      <TouchableOpacity onPress={goBag}>
        {iconTwo && <FontAwesomeIcon icon={iconTwo} color={color} size={25} />}
      </TouchableOpacity>
    </View>
  );
};

export default Header;
