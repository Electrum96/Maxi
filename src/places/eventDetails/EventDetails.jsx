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
        <LongButton title={'Следующая'} />
      </View>
    </Layout>
  );
};

export default EventDetails;
