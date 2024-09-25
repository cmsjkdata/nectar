import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

const Code = ({navigation}) => {
  const [code, setCode] = useState(null);
  const [error, setError] = useState('');

  const handleCodeInput = e => {
    const codeRegex = /^[0-9]*$/;
    console.log(codeRegex.test(e));
    if (!e.length < 4 && codeRegex.test(e)) {
      setCode(e);

      setError('');
    } else {
      setError('Write correct code');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.pop(1);
        }}
        style={styles.backBottun}>
        <Entypo name="chevron-thin-left" size={24} color={'black'} />
      </TouchableOpacity>
      <Text style={styles.CodeHading}>Enter your mobile number</Text>
      <View style={styles.CodeView}>
        <Text style={styles.CodeLable}>Code </Text>
        <View style={styles.CodeFildView}>
          <TextInput
            value={code}
            keyboardType="numeric"
            placeholder="- - - -"
            placeholderTextColor={'#808080'}
            maxLength={4} // Limit the input to 10 characters
            onChangeText={handleCodeInput}
            autoFocus={true}
            style={styles.codeInput}
          />
        </View>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.push('Location');
        }}
        style={styles.enterBottunView}>
        <Entypo
          name="chevron-thin-right"
          style={styles.enterBottun}
          color={'white'}
          size={36}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Code;
const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  backBottun: {},
  CodeHading: {
    paddingVertical: 20,
    fontSize: 24,
    color: 'black',
  },

  codeInput: {
    fontSize: 24,
  },

  enterBottunView: {
    flex: 0,
    alignItems: 'flex-end',
    borderRadius: 50,
    paddingVertical: 20,
  },
  enterBottun: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 50,
  },
  CodeView: {
    paddingVertical: 20,
  },

  CodeLable: {fontSize: 14},
  CodeFildView: {
    borderBottomWidth: 0.5,
  },
});
