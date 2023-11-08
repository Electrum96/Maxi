import {Text, View, Image} from 'react-native';

import styles from './EventPlace.style';
import Layout from '../../components/layout/Layout';

import headers from '../../data/headers';
import { COLORS } from '../../styles/variables';

const EventPlace = ({navigation}) => {
    const headerData = headers.find(
        headerItem => headerItem.classHeader === 'event',
      );

    return (
        <Layout navigation={navigation} headerData={headerData} background={COLORS.accentBg}>

        </Layout>
    )
}

export default EventPlace;