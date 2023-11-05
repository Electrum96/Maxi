import {Text, View, Image} from 'react-native';
import BagItem from '../bag-item/BagItem';

import product from '../../mobx/product';

import styles from './BagList.style';

import {observer} from 'mobx-react-lite';

const BagList = () => {
  const {basketList, incrementProduct, decrementProduct, removeProduct} =
    product;

  return (
    <View style={styles.wrapper}>
      {basketList.map(product => (
        <BagItem
          key={product.title}
          {...product}
          increment={incrementProduct}
          decrement={decrementProduct}
          remove={removeProduct}
        />
      ))}
    </View>
  );
};

export default observer(BagList);
