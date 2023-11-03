import {Text, View, Image} from 'react-native';

import Layout from '../../components/layout/Layout';

import headers from '../../data/headers';

import styles from './EmptyBagPlace.style';
import LongButton from '../../components/long-button/LongButton';

const EmptyBagPlace = ({navigation}) => {
  const headerData = headers.find(
    headerItem => headerItem.classHeader === 'empty-bag',
  );

  return (
    <Layout navigation={navigation} headerData={headerData}>
      <View style={styles.container}>
        <View style={styles.contentWrapper}>
          <Text style={styles.title}> No orders yet</Text>
          <Text style={styles.desc}>Hit the orange button down below to Create an order</Text>
        </View>
        
        <LongButton
          onPress={() => navigation.push('Book')}
          title={'Start odering'}
        />
      </View>
    </Layout>
  );
};

export default EmptyBagPlace;
