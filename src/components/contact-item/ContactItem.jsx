import {TextInput, View, Text} from 'react-native';

import styles from './ContactItem.style';

const ContactItem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Casino Maxi</Text>
      <TextInput
        style={styles.email}
        multiline={true}
        placeholder="casinomaxi7698@gmail.com"
      />
      <TextInput
        style={styles.number}
        multiline={true}
        placeholder="+234 9011039271"
      />
      <TextInput
        style={styles.desc}
        multiline={true}
        placeholder="No 15 uti street off ovie palace road effurun delta"
      />
      <TextInput style={styles.index} multiline={true} placeholder="074900" />
    </View>
  );
};

export default ContactItem;
