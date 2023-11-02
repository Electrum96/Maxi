import {Text, View, Image} from 'react-native';
import Header from '../../components/header/Header';
import headers from '../../data/headers';

import styles from './BookPlace.style';
import PlateList from '../../components/plate-list/PlateList';

const BookPlace = ({navigation}) => {

    const headerData = headers.find(
        headerItem => headerItem.classHeader === 'book',
      );
  return (
    <View style={styles.bookWrap}>
    <Header {...headerData} navigation={navigation}/>
    <Text style={styles.title}>Delicious food for you</Text>
    <PlateList/>
    </View>
  );
};

export default BookPlace;
