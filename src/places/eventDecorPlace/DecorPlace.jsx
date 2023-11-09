import {Text, View, Image} from 'react-native';

import styles from './DecorPlace.style';

import LayoutDecor from '../../components/layoutDecor/LayoutDecor';
import headers from '../../data/headers';
const DecorPlace = ({navigation}) => {
  const headerData = headers.find(
    headerItem => headerItem.classHeader === 'event',
  );

  return (
    <LayoutDecor
      headerData={headerData}
      navigation={navigation}
      imageBackground={require('../../images/background/woman.png')}>
      <Text style={{color: 'red'}}>DecorPlace</Text>
    </LayoutDecor>
  );
};

export default DecorPlace;
