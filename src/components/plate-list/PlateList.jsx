import {Text, View, Image, ScrollView} from 'react-native';

import products from '../../data/products';

import styles from './PlateList.style';
import PlateItem from '../plate-item/PlateItem';

const PlateList = () => {

    return <View style={styles.container}>
        <ScrollView  horizontal={true}>
        {products.map((product) => <PlateItem key={product.id} {...product}/>) }
        </ScrollView>
    </View>
}

export default PlateList;