import {Text, View, Image, Alert} from 'react-native';

import styles from './DecorItemTwo.style';

const DecorItemTwo = ({eventData}) => {
  return (
    <View style={styles.item}>
      <View style={styles.header}>
        <Text style={styles.title}>{eventData.title}</Text>
        <Text style={styles.time}>{eventData.time}</Text>
      </View>
      <Text style={styles.desc}>{eventData.desc}</Text>
    </View>
  );
};

export default DecorItemTwo;
