import {Text, View, Image} from 'react-native';
import BagItem from '../bag-item/BagItem';

import products from '../../data/products';

import styles from './BagList.style';

const BagList = () => {
  return (
    <View style={styles.wrapper}>
      {products.map(product => (
        <BagItem key={product.title} {...product} />
      ))}
    </View>
  );
};

export default BagList;
