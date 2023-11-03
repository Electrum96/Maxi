import {Text, View, Image} from 'react-native';

import styles from './PlateItem.style';

const PlateItem = ({title, image}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.imgWrp}>
        <Image style={styles.img} source={image} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default PlateItem;
