import {Text, View, Image, TouchableOpacity} from 'react-native';

import styles from './EventPlace.style';
import Layout from '../../components/layout/Layout';

import headers from '../../data/headers';
import {COLORS} from '../../styles/variables';
import events from '../../data/events';
import {LinearGradient} from 'react-native-svg';
import LongButton from '../../components/long-button/LongButton';

const EventPlace = ({navigation}) => {
  const headerData = headers.find(
    headerItem => headerItem.classHeader === 'event',
  );

  const goDitails = (event) => {
    if (event.type === 'decor-one') {
      navigation.push('DecorPlace', {id: event.id})
    } else {
      navigation.push('EventDetails', {id: event.id})
    }
  }
  return (
    <Layout
      navigation={navigation}
      headerData={headerData}
      background={COLORS.accentBg}>
      <View style={styles.pageContainer}>
        <Image
          style={styles.image}
          source={require('../../images/background/blonde.png')}
        />

        <View style={styles.liBox}>
          {events.map(event => (
            <TouchableOpacity
              style={styles.item}
              key={event.id}
              onPress={() => goDitails(event)}>
              <Text style={styles.title}>{event.title}</Text>
              <Text style={styles.time}> {event.time}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <LongButton
          title={'Следующая'}
          onPress={() =>
            navigation.push('EventDetails', {
              id: 1,
            })
          }
        />
      </View>
    </Layout>
  );
};

export default EventPlace;
