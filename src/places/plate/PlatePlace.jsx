import {Text, View, Image} from 'react-native';

import styles from './PlatePlace.style';

import headers from '../../data/headers';
import products from '../../data/products';

import Layout from '../../components/layout/Layout';
import LongButton from '../../components/long-button/LongButton';

const PlatePlace = ({route, navigation}) => {
  const {id} = route.params;
  const {title, price, infoTitle, desc, image} =
    products.find(product => product.id === id);

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

        <LongButton navigation={navigation} title={'Add to cart'} />
      </View>
    </Layout>
  );
};

export default PlatePlace;
