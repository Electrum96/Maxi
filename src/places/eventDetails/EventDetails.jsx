import {Text, View, Image, Alert} from 'react-native';

import styles from './EventDetails.style';
import events from '../../data/events';

import Layout from '../../components/layout/Layout';
import LongButton from '../../components/long-button/LongButton';
import {COLORS} from '../../styles/variables';
import headers from '../../data/headers';

const EventDetails = ({route, navigation}) => {
  const {id} = route.params;
  const headerData = headers.find(
    headerItem => headerItem.classHeader === 'event',
  );
  const eventData = events.find(event => event.id === id);
  const handlerGo = () => {
    if (events.length > id) {
      if (eventData) {
        navigation.push('DecorPlace', {
          id: id + 1,
        });
      } else {
        navigation.push('EventDetails', {
          id: id + 1,
        });
      }
    } else {
      navigation.push('Main');
    }
  };
  return (
    <Layout
      navigation={navigation}
      headerData={headerData}
      background={COLORS.accentBg}>
      <View style={styles.page}>
        <Image style={styles.image} source={eventData.image} />
        <View style={styles.informWrap}>
          <Text style={styles.title}>{eventData.title}</Text>
          <Text style={styles.desc}>{eventData.desc}</Text>
        </View>
        <LongButton
          title={events.length > id ? 'Следующая' : 'Главная'}
          onPress={handlerGo}
        />
      </View>
    </Layout>
  );
};

export default EventDetails;
