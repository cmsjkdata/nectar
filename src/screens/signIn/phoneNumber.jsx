import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
// import PhoneSignIn from './phoneSignIn';
import auth from '@react-native-firebase/auth';

const PhoneNumber = ({navigation}) => {
  const [phone, setPhone] = useState(null);
  const [error, setError] = useState('');

  const handlePhoneInput = e => {
    const phoneRegex = /^[0-9]*$/;
    console.log(phoneRegex.test(e));
    if (!e.length < 10 && phoneRegex.test(e)) {
      setPhone(e);

      setError('');
    } else {
      setError('Write correct Phone number');
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
      <Text style={styles.phoneNumberHading}>Enter your mobile number</Text>
      <View style={styles.phoneNumberView}>
        <Text style={styles.phoneNumberLable}>Mobile Number </Text>
        <View style={styles.phoneNumberFildView}>
          <TextInput
            value={phone}
            keyboardType="numeric"
            maxLength={10} // Limit the input to 10 characters
            onChangeText={handlePhoneInput}
            autoFocus={true}
            // style={styles.phoneInput}
          />
        </View>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>
      {/* <PhoneSignIn phone={phone} /> */}
      <TouchableOpacity
        onPress={async () => {
          const confirmation = await auth().signInWithPhoneNumber(phone);
          console.log(confirmation);
          // navigation.push('Code');
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

export default PhoneNumber;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  backBottun: {},
  phoneNumberHading: {
    paddingVertical: 20,
    fontSize: 24,
    color: 'black',
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
  phoneNumberView: {
    paddingVertical: 20,
  },

  phoneNumberLable: {fontSize: 14},
  phoneNumberFildView: {
    borderBottomWidth: 0.5,
  },
});
