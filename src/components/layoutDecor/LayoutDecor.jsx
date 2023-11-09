import {Text, View, Image, ImageBackground} from 'react-native';

import styles from './LayoutDecor.style';
import Header from '../header/Header';
import Container from '../container/Container';

const LayoutDecor = ({children, navigation, headerData, imageBackground}) => {
  return (
    <View style={styles.layout}>
      <ImageBackground style={styles.imageBackground} source={imageBackground}>
        <Container>
          <Header navigation={navigation} {...headerData} />
        </Container>

        <View style={styles.content}>
          <Container>{children}</Container>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LayoutDecor;
