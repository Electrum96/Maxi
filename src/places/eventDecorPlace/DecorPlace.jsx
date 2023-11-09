import {Text, View, Image} from 'react-native';

import styles from './DecorPlace.style';

import LayoutDecor from '../../components/layoutDecor/LayoutDecor';
import DecorItemOne from '../../components/decorItemOne/DecorItemOne';
import DecorItemTwo from '../../components/decorItemTwo/DecorItemTwo';
import headers from '../../data/headers';
import events from '../../data/events';

const DecorPlace = ({navigation, route}) => {
  const {id} = route.params;
  const headerData = headers.find(
    headerItem => headerItem.classHeader === 'event',
  );
  const eventData = events.find(event => event.id === id);

  if (eventData.type === 'decor-one') {
    return (
      <LayoutDecor
        headerData={headerData}
        navigation={navigation}
        imageBackground={require('../../images/background/woman.png')}>
        <DecorItemOne eventData={eventData} />
      </LayoutDecor>
    );
  } else {
    return (
      <LayoutDecor
        headerData={headerData}
        navigation={navigation}
        imageBackground={require('../../images/background/balls.png')}>
        <DecorItemTwo eventData={eventData} />
      </LayoutDecor>
    );
  }
};

export default DecorPlace;
