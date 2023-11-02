import {Text, View, Image, TouchableOpacity} from 'react-native';

import styles from './MainButtons.style';

const MainButtons = ({onPress, title}) => {
  return (
    <View style={styles.buttonsWrap}>
      <TouchableOpacity onPress={onPress}>
        {/* <Image source={img} /> */}
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainButtons;
