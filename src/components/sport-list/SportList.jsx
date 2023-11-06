import {Text, View, Image, ScrollView} from 'react-native';

import styles from './SportList.style';

import translation from '../../data/translation';
import SportItem from '../sport-item/SportItem';

const SportList = () => {
  return (
    <ScrollView>
    <View style={styles.list}>
      {translation.map(item => (
        <SportItem key={item.id} {...item} />
      ))}
    </View>
    </ScrollView>
  );
};

export default SportList;
