import {Text, View, Image} from 'react-native';

import styles from './PlatePlace.style';

import headers from '../../data/headers';
import products from '../../data/products';
import product from '../../mobx/product';

import Layout from '../../components/layout/Layout';
import LongButton from '../../components/long-button/LongButton';
import {useState} from 'react';

const PlatePlace = ({route, navigation}) => {
  const {id} = route.params;
  const {addProduct, removeProduct, isProductBasket} = product;
  const [isAdded, setAdded] = useState(isProductBasket(id));
  const {title, price, desc, image} = products.find(
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

        <View style={styles.wrap}>
          <View style={styles.main}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{`₽ ${price}`}</Text>
          </View>

          <View style={styles.titleDescBox}>
            <Text style={styles.titleDescText}>Описание</Text>
            <Text>{desc}</Text>
          </View>

          <View style={styles.titleDescBox}>
            <Text style={styles.titleDescText}>Доставка</Text>
            <Text>
              Доставлено в период с понедельника по четверг с 8:00 до 19:32
            </Text>
          </View>
        </View>

        <View style={styles.container}></View>

        <LongButton
          onPress={isAdded ? handlerRemove : handlerAdd}
          navigation={navigation}
          title={isAdded ? 'Удалить из корзины' : 'Добавить в корзину'}
        />
      </View>
    </Layout>
  );
};

export default PlatePlace;
