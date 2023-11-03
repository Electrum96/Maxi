import {Text, View, Image, TextInput} from 'react-native';

import styles from './BroningPlace.style';
import headers from '../../data/headers';

import Layout from '../../components/layout/Layout';
import {COLORS} from '../../styles/variables';
import LongButton from '../../components/long-button/LongButton';

const BroningPlace = ({navigation}) => {
  const headerData = headers.find(
    headerItem => headerItem.classHeader === 'broning',
  );

  return (
    <Layout
      headerData={headerData}
      navigation={navigation}
      background={COLORS.accentBg}>
      <View style={styles.wrap}>
        <View style={styles.inputsWrap}>
          <TextInput style={styles.input} placeholder="Email address" />
          <TextInput style={styles.input} placeholder="Phone number" />
          <TextInput style={styles.input} placeholder="First Name" />
          <TextInput style={styles.input} placeholder="Last Name" />
          <TextInput style={styles.input} placeholder="Number" />
        </View>
        <LongButton style={styles.btn} title={'Next'} />
      </View>
    </Layout>
  );
};

export default BroningPlace;
