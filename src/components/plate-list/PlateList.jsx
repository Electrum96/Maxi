import {Text, View, Image, ScrollView} from 'react-native';

import products from '../../data/products';

import styles from './PlateList.style';
import PlateItem from '../plate-item/PlateItem';

const PlateList = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <View style={styles.wrapper}>
        {products.map(product => (
          <PlateItem navigation={navigation} key={product.id} {...product} />
        ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default PlateList;
