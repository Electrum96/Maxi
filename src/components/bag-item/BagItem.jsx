import {Text, View, Image, TouchableOpacity} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import styles from './BagItem.style';
import {COLORS} from '../../styles/variables';

const BagItem = ({image, title, price}) => {
  return (
    <View style={styles.itemWrap}>
      <Image style={styles.image} source={image}></Image>

      <View style={styles.informWrap}>
        <Text style={styles.title}>{title}</Text>
        <Text>{`${price} $`}</Text>
      </View>

      <View style={styles.btnWrap}>
        <TouchableOpacity>
          <FontAwesomeIcon icon={'trash'} color={COLORS.red} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesomeIcon icon={'trash'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BagItem;
