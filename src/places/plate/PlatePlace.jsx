import {Text, View, Image} from 'react-native';

import styles from './PlatePlace.style';

import products from '../../data/products';
const PlatePlace = ({route}) => {
  const {id} = route.params;
  const {title, price, infoTitle, desc, image, infoHeader, descTwo} =
    products.find(product => product.id === id);

  return (
    <View>
      <Image source={image}></Image>
      <Text>{title}</Text>
      <Text>{price}</Text>
      <Text>{infoTitle}</Text>
      <Text>{desc}</Text>
      <Text>{infoHeader}</Text>
      <Text>{descTwo}</Text>
    </View>
  );
};

export default PlatePlace;
