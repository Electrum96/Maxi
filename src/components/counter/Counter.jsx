import {Text, View, TouchableOpacity} from 'react-native';

import styles from './Counter.style';

const Counter = ({ count,increment, decrement }) => {
  return (
    <View style={styles.counter}>
      <TouchableOpacity onPress={decrement}>
        <Text style={styles.counterText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.counterText}>{count}</Text>
      <TouchableOpacity onPress={increment}>
        <Text style={styles.counterText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
