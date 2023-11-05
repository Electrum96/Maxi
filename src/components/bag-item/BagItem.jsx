import {Text, View, Image, TouchableOpacity} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import styles from './BagItem.style';

import {COLORS} from '../../styles/variables';

import Counter from '../counter/Counter';

const BagItem = ({image, title, price, id, count, increment, decrement,  remove}) => {
  return (
    <View style={styles.itemWrap}>
      <Image style={styles.image} source={image}></Image>

      <View style={styles.informWrap}>
        <Text style={styles.title}>{title}</Text>
        <Text>{`${price * count}  $`}</Text>
      </View>

      <View style={styles.btnWrap}>
        <TouchableOpacity onPress={() => remove(id)}>
          <FontAwesomeIcon icon={'trash'} color={COLORS.red} />
        </TouchableOpacity>
        <Counter count={count} increment={ () => increment(id)} decrement={() => decrement(id)}/>
      </View>
    </View>
  );
};

export default BagItem;
