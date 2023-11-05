import {Text, View, TouchableOpacity} from 'react-native';

import styles from './Counter.style';

const Counter = ({pressDecrement, count, inCrement}) => {
  return (
    <View style={styles.counter}>
      <TouchableOpacity onPress={pressDecrement}>
        <Text style={styles.counterText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.counterText}>{count}</Text>
      <TouchableOpacity onPress={inCrement}>
        <Text style={styles.counterText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
