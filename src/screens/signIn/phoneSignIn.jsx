import React, {useState, useEffect} from 'react';
import {Button, TextInput, StyleSheet, View} from 'react-native';
import auth from '@react-native-firebase/auth';

const PhoneSignIn = ({phone}) => {
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);

  // verification code (OTP - One-Time-Passcode)
  const [code, setCode] = useState('');

  // Handle login
  function onAuthStateChanged(user) {
    if (user) {
      // Some Android devices can automatically process the verification code (OTP) message, and the user would NOT need to enter the code.
      // Actually, if he/she tries to enter it, he/she will get an error message because the code was already used in the background.
      // In this function, make sure you hide the component(s) for entering the code and/or navigate away from this screen.
      // It is also recommended to display a message to the user informing him/her that he/she has successfully logged in.
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    console.log(confirmation);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  if (!confirm) {
    return (
      <Button
        title="Phone Number Sign In"
        onPress={() => signInWithPhoneNumber(phone)}
      />
    );
  }

  return (
    <View>
      <TextInput
        value={code}
        keyboardType="numeric"
        maxLength={10} // Limit the input to 10 characters
        onChangeText={text => setCode(text)}
        autoFocus={true}
        style={styles.textInput}
      />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </View>
  );
};
export default PhoneSignIn;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'red',
  },
});
