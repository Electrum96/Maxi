import {Text, View, Image} from 'react-native';
import headers from '../../data/headers';
import Layout from '../../components/layout/Layout';
import {COLORS} from '../../styles/variables';
import SportList from '../../components/sport-list/SportList';
import styles from './SportPlace.style';
import LongButton from '../../components/long-button/LongButton';

const SportPlace = ({navigation}) => {
  const headerData = headers.find(
    headerItem => headerItem.classHeader === 'sport',
  );

  return (
    <Layout
      headerData={headerData}
      navigation={navigation}
      background={COLORS.accentBg}>
      <View style={styles.page}>
        <View style={styles.list}>
          <SportList />
        </View>
        <LongButton title={'Дальше'} onPress={() => navigation.push('Main')} />
      </View>
    </Layout>
  );
};

export default SportPlace;
