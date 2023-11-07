import {Text, View, Image} from 'react-native';

import styles from './HeartPlace.style';
import Layout from '../../components/layout/Layout';
import LongButton from '../../components/long-button/LongButton';
import headers from '../../data/headers';

const HeartPlace = ({navigation}) => {
  const headerData = headers.find(
    headerItem => headerItem.classHeader === 'heart',
  );

  return (
    <Layout headerData={headerData} navigation={navigation}>
      <View style={styles.mainWrap}>
        <View style={styles.imageWrap}>
          <Image
            style={styles.heart}
            source={require('../../images/logo/Heart.png')}
          />
          <Image
            style={styles.code}
            source={require('../../images/logo/QrCode.png')}
          />
          <Text style={styles.title}>Спасибо за ваше бронирование</Text>
        </View>

        <LongButton onPress={() => navigation.push('Main')} title={'На главную'} />
      </View>
    </Layout>
  );
};

export default HeartPlace;
