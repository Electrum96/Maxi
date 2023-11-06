import {Text, View, Image} from 'react-native';

import styles from './SportItem.style';

const SportItem = ({liga, date, team1, team2}) => {
  return (
    <View style={styles.item}>
      <View style={styles.header}>
        <Text style={styles.title}>
          {liga} - {date}.11.2023
        </Text>
      </View>

      <View style={styles.main}>
        <Text style={{...styles.team, ...styles.team1}}>{team1}</Text>
        <Text style={{...styles.team, ...styles.team2}}>{team2}</Text>
      </View>
    </View>
  );
};

export default SportItem;
