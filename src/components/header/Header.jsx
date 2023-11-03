import {Text, View, Image, TouchableOpacity} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import styles from './Header.style';

const Header = ({icon, color, title, iconTwo, navigation}) => {
 
  const goBag = () => navigation.push('Bag')
  const goBack = () => navigation.goBack()
  return (
    <View style={styles.headerWrp}>
      <TouchableOpacity onPress={goBack}>
        <FontAwesomeIcon icon={icon} color={color} size={25} />
      </TouchableOpacity>

      {title && <Text style={styles.title}>{title}</Text>}

      <TouchableOpacity onPress={goBag}>
        {iconTwo && <FontAwesomeIcon icon={iconTwo} color={color} size={25} />}
      </TouchableOpacity>
    </View>
  );
};

export default Header;
