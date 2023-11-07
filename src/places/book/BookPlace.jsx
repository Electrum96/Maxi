import {Text, View, Image} from 'react-native';
import Header from '../../components/header/Header';
import headers from '../../data/headers';

import styles from './BookPlace.style';
import PlateList from '../../components/plate-list/PlateList';
import Container from '../../components/container/Container';
import Layout from '../../components/layout/Layout';
import { COLORS } from '../../styles/variables';
const BookPlace = ({navigation}) => {
  const headerData = headers.find(
    headerItem => headerItem.classHeader === 'book',
  );
  return (
    <Layout navigation={navigation} headerData={headerData} background={COLORS.accentBg}>
      <Text style={styles.title}>Вкусная еда для вас</Text>
      <PlateList navigation={navigation}/>
    </Layout>
  );
};

export default BookPlace;
