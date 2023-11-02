import {Text, View, Image, TouchableOpacity} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import styles from './Header.style';

const Header = ({icon, color, title, iconTwo}) => {
  return (
    <View style={styles.headerWrp}>
      <TouchableOpacity>
        <FontAwesomeIcon icon={icon} color={color} />
      </TouchableOpacity>

      {title && <Text style={styles.title}>{title}</Text>}

      <TouchableOpacity>
        {iconTwo && <FontAwesomeIcon icon={iconTwo} color={color} />}
      </TouchableOpacity>
    </View>
  );
};

export default Header;
