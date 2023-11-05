import {Text, View, Image} from 'react-native';
import headers from '../../data/headers';
import Layout from '../../components/layout/Layout';
import { COLORS } from '../../styles/variables';
import styles from './InformationPlace.style';

const InformationPlace = ({navigation}) => {
  const headerData = headers.find(
    headerItem => headerItem.classHeader === 'information',
  );

  return (
    <Layout headerData={headerData} navigation={navigation} background={COLORS.accentBg}>
      <View></View>
    </Layout>
  );
};

export default InformationPlace;
