import {Text, View, Image} from 'react-native';
import Header from '../../components/header/Header';
import headers from '../../data/headers';
import styles from './BookPlace.style';

const BookPlace = ({navigation}) => {

    const headerData = headers.find(
        headerItem => headerItem.classHeader === 'book',
      );
  return (
    <View style={styles.bookWrap}>
    <Header {...headerData}/>
    </View>
  );
};

export default BookPlace;
