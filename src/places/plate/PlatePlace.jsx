import {Text, View, Image} from 'react-native';

import styles from './PlatePlace.style';

import headers from '../../data/headers';
import products from '../../data/products';
import product from '../../mobx/product';

import {observer} from 'mobx-react-lite';

import Layout from '../../components/layout/Layout';
import LongButton from '../../components/long-button/LongButton';
import {useState} from 'react';

const PlatePlace = ({route, navigation}) => {
  const {id} = route.params;
  const {addProduct, removeProduct, isProductBasket} = product;
  const [isAdded, setAdded] = useState(isProductBasket(id));
  const {title, price, infoTitle, desc, image, added} = products.find(
    product => product.id === id,
  );

  const handlerAdd = () => {
    addProduct(id);
    setAdded(!isAdded);
  };

  const handlerRemove = () => {
    removeProduct(id);
    setAdded(!isAdded);
  };

  const headerData = headers.find(
    headerItem => headerItem.classHeader === 'plate',
  );

  return (
    <Layout navigation={navigation} headerData={headerData}>
      <View style={styles.wrapper}>
        <View>
          <Image style={styles.image} source={image}></Image>
        </View>

        <View>
          <Text style={styles.title}>{title}</Text>
          <Text>{`$ ${price}`}</Text>
        </View>

        <View>
          <Text>{infoTitle}</Text>
          <Text>{desc}</Text>
        </View>

        <LongButton
          onPress={isAdded ? handlerRemove : handlerAdd}
          navigation={navigation}
          title={isAdded ? 'Remove to cart' : 'Add to cart'}
        />
      </View>
    </Layout>
  );
};

export default observer(PlatePlace);
