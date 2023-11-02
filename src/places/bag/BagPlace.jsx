import {Text, View, Image} from 'react-native';

import styles from './BagPlace.style';
import Layout from '../../components/layout/Layout';
import headers from '../../data/headers';
import { COLORS } from '../../styles/variables';

const BagPlace = ({navigation}) => {
    const headerData = headers.find(
        headerItem => headerItem.classHeader === 'bag',
      );
  return (
    <Layout headerData={headerData} background={COLORS.light}>
      <Text>BagPlace</Text>
    </Layout>
  );
};

export default BagPlace;
