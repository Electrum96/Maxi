import {Text, View, Image, TouchableOpacity} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import styles from './Header.style';

const Header = ({icon, color, title, iconTwo, navigation}) => {
  return (
    <View style={styles.headerWrp}>
      <TouchableOpacity>
        <FontAwesomeIcon icon={icon} color={color} size={25} />
      </TouchableOpacity>

      {title && <Text style={styles.title}>{title}</Text>}

      <TouchableOpacity onPress={() => navigation.push('Bag')}>
        {iconTwo && <FontAwesomeIcon icon={iconTwo} color={color} size={25} />}
      </TouchableOpacity>
    </View>
  );
};

export default Header;
