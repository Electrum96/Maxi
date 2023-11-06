import {Text, View, Image} from 'react-native';
import headers from '../../data/headers';
import Layout from '../../components/layout/Layout';
import { COLORS } from '../../styles/variables';
import styles from './InformationPlace.style';
import ContactItem from '../../components/contact-item/ContactItem';
import LongButton from '../../components/long-button/LongButton';

const InformationPlace = ({navigation}) => {
  const headerData = headers.find(
    headerItem => headerItem.classHeader === 'information',
  );

  return (
    <Layout headerData={headerData} navigation={navigation} background={COLORS.accentBg}>
      <View style={styles.wrapper}> 
        <ContactItem/>
        <LongButton title={'Start odering'} onPress={() => navigation.push('Book')}/>
      </View>
    </Layout>
  );
};

export default InformationPlace;
