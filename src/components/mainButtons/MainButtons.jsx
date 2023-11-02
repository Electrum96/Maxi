import {Text, View, Image, TouchableOpacity} from 'react-native';

import styles from './MainButtons.style';

const MainButtons = ({onPress, title, img}) => {
  return (
    <View style={styles.buttonsWrap}>
       <Image style={styles.img} source={img} />
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainButtons;
