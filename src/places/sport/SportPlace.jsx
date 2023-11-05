import {Text, View, Image} from 'react-native';
import headers from '../../data/headers';
import Layout from '../../components/layout/Layout';
import {COLORS} from '../../styles/variables';
import styles from './SportPlace.style';

const SportPlace = ({navigation}) => {
  const headerData = headers.find(
    headerItem => headerItem.classHeader === 'sport',
  );

  return (
    <Layout
      headerData={headerData}
      navigation={navigation}
      background={COLORS.accentBg}>
      <View></View>
    </Layout>
  );
};

export default SportPlace;
