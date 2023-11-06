import {Text, View, Image, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import styles from './Header.style';

const Header = ({icon, color, title, iconTwo, route,  navigation}) => {
//  const {} = useLocattion
  const goBag = () => navigation.push('Bag')
  const goRoute = () => navigation.push(route)

  return (
    <View style={styles.headerWrp}>
      <TouchableOpacity onPress={goRoute} style={styles.goBack}>
        <FontAwesomeIcon icon={icon} color={color} size={25} />
      </TouchableOpacity>

      {title && <Text  style={{...styles.title, color: color}}>{title}</Text>}

      <TouchableOpacity onPress={goBag}>
        {iconTwo && <FontAwesomeIcon icon={iconTwo} color={color} size={25} />}
      </TouchableOpacity>
    </View>
  );
};

export default Header;
