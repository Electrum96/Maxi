import {Text, View, Image} from 'react-native';

import styles from './PlateItem.style';

const PlateItem = ({title, image}) => {
  return (
    <View style={styles.wrapper}>
      <Text>{title}</Text>
      <Image style={styles.img} source={image} />
    </View>
  );
};

export default PlateItem;
