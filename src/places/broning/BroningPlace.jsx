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
          <TextInput
            style={styles.input}
            placeholderTextColor={COLORS.grey}
            placeholder="Email адрес"
          />
          <TextInput
            style={styles.input}
            placeholderTextColor={COLORS.grey}
            placeholder="Номер телефона"
          />
          <TextInput
            style={styles.input}
            placeholderTextColor={COLORS.grey}
            placeholder="Имя"
          />
          <TextInput
            style={styles.input}
            placeholderTextColor={COLORS.grey}
            placeholder="Фамилия"
          />
          <TextInput
            style={styles.input}
            placeholderTextColor={COLORS.grey}
            placeholder="Номер"
          />
        </View>
        <LongButton style={styles.btn} title={'Дальше'} onPress={() => navigation.push('Heart')}/>
      </View>
    </Layout>
  );
};

export default BroningPlace;
