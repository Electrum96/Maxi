import {Text, View, Image, TouchableOpacity} from 'react-native';

import styles from './PlateItem.style';

const PlateItem = ({title, image, id, navigation}) => {
  const goPlatePlace = () => navigation.push('Plate', {id})
  return (
    <TouchableOpacity  onPress={goPlatePlace}>
      <View style={styles.wrapper}>
        <View style={styles.imgWrp}>
          <Image style={styles.img} source={image} />
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PlateItem;
