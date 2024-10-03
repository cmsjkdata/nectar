import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import logoOnly from '../../../assets/logoOnly.png';
import onbording from '../../../assets/onbording.png';

const Welcome = ({navigation}) => {
  return (
    <ImageBackground source={onbording} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Image style={styles.imageLogo} source={logoOnly} />

        {/* Welcome Text Section */}
        <View style={styles.textContainer}>
          <Text style={styles.text_}>Welcome</Text>
          <Text style={styles.text_}>to our store</Text>
          <Text style={styles.textSmall}>
            Get your groceries in as fast as one hour
          </Text>
        </View>

        {/* Button Section */}
        <View style={styles.buttonStyleView}>
          {/* <TouchableOpacity
            style={styles.submitButtonTouchbale}
            onPress={() => {
              navigation.push('LogIn');
            }}>
            <Text style={styles.submitButton}>Submit</Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              navigation.navigate('LogIn');
            }}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          console.log('asdf');
        }}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  imageLogo: {
    width: 100, // You can adjust this size based on your design
    height: 100, // Adjust as needed
    marginBottom: 20,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  text_: {
    fontSize: 36,
    color: 'white',
    fontFamily: 'Roboto-Bold',
    textAlign: 'center',
  },
  textSmall: {
    fontSize: 14,
    color: 'white',
    paddingBottom: 40,
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  buttonStyleView: {
    width: '80%',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  submitButtonTouchbale: {
    backgroundColor: '#53B175',
    borderRadius: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  submitButton: {
    color: 'white',
    fontSize: 20,
    padding: 20,
  },
  buttonStyle: {
    backgroundColor: '#53B175',
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    padding: 20,
  },
});

export default Welcome;
