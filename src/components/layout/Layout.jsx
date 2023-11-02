import {Text, View, Image} from 'react-native';

import styles from './Layout.style';
import Header from '../header/Header';
import Container from '../container/Container';

const Layout = ({children, navigation, headerData, background}) => {
  return (
    <View style={{...styles.layout, backgroundColor: background}}>
      <Container>
        <Header navigation={navigation} {...headerData} />
      </Container>

      <View style={styles.content}>
        <Container>{children}</Container>
      </View>
    </View>
  );
};

export default Layout;
