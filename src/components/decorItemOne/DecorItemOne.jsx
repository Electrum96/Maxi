import {Text, View, Image, Alert} from 'react-native';

import styles from './DecorItemOne.style';

const DecorItemOne = ({eventData}) => {

  return (
    <View style={styles.item}>
      <Text style={styles.desc}>{eventData.desc}</Text>
    </View>
  );
};

export default DecorItemOne;
