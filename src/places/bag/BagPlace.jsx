import {Text, View, Image, ScrollView} from 'react-native';

import styles from './BagPlace.style';
import Layout from '../../components/layout/Layout';
import headers from '../../data/headers';
import {COLORS} from '../../styles/variables';
import BagList from '../../components/bag-list/BagList';
import LongButton from '../../components/long-button/LongButton';

const BagPlace = ({navigation}) => {
  const headerData = headers.find(
    headerItem => headerItem.classHeader === 'bag',
  );
  return (
    <Layout
      navigation={navigation}
      headerData={headerData}
      background={COLORS.lightBg}>
      <View style={styles.page}>
        <ScrollView style={styles.scroll}>
          <BagList />
        </ScrollView>
        <LongButton />
      </View>
    </Layout>
  );
};

export default BagPlace;
