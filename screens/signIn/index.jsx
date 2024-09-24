import {StyleSheet, Text, Image, View} from 'react-native';
import React, {useState} from 'react';
import maskGroup from '../../assets/maskGroup.png';
import {TextInput} from 'react-native-gesture-handler';

const SignIn = () => {
  const [phone, setPhone] = useState(null);
  const [error, setError] = useState('');

  const handlePhoneInput = e => {
    const phoneRegex = /^[0-9]*$/;
    if (!e.length < 10 && phoneRegex.test(e)) {
      setPhone(e);
      setError('');
    } else {
      setError('Write correct Phone number');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={maskGroup} />
      <View style={styles.bottumView}>
        <Text style={styles.heading}>Get your groceries with nectar</Text>
        <TextInput
          value={phone}
          keyboardType="numeric"
          maxLength={10} // Limit the input to 10 characters
          onChangeText={handlePhoneInput}
          style={styles.phoneInput}
        />
        {error ? <Text>{error}</Text> : null}
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
  },
  heading: {
    fontSize: 32,
    width: '80%',
    color: 'black',
  },
  bottumView: {
    paddingHorizontal: 10,
  },
  phoneInput: {},
});
