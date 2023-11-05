import {Text, View, Image, ScrollView} from 'react-native';

import styles from './BagPlace.style';

import headers from '../../data/headers';
import product from '../../mobx/product';

import {COLORS} from '../../styles/variables';

import BagList from '../../components/bag-list/BagList';
import LongButton from '../../components/long-button/LongButton';
import Layout from '../../components/layout/Layout';

const BagPlace = ({navigation}) => {
  const headerData = headers.find(
    headerItem => headerItem.classHeader === 'bag',
  );

  const handler = () => {
   navigation.push('Empty')
   product.clearCart()
  }
 
  
  return (
    <Layout
      navigation={navigation}
      headerData={headerData}
      background={COLORS.lightBg}>
      <View style={styles.page}>
        <ScrollView style={styles.scroll}>
          <BagList />
        </ScrollView>
        <LongButton title={'Complete order'} onPress={handler}/>
      </View>
    </Layout>
  );
};

export default BagPlace;
