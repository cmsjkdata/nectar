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

        {/* <View style={styles.welcomeText}> */}
        <View>
          <Text style={styles.text_}>Welcome </Text>
        </View>
        <View>
          <Text style={styles.text_}>to our store</Text>
        </View>
        <View>
          <Text style={styles.textSmall}>
            Ger your groceries in as fast as one hour
          </Text>
        </View>
        {/* </View> */}
        <View style={styles.buttonStyleView}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              // Perform any additional actions here
              navigation.push('SignIn');
            }}>
            <Text style={styles.buttonText}>Get Start</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  imageLogo: {},
  text_: {
    flex: 0,
    alignItems: 'center',
    alignContent: 'center',
    fontSize: 36,
    width: '65%',
    color: 'white',
    fontFamily: 'Roboto-Bold',
  },
  textSmall: {
    flex: 0,
    alignItems: 'center',
    alignContent: 'center',
    fontSize: 10,
    width: '65%',
    color: 'white',
    paddingBottom: 40,
    fontFamily: 'Roboto-Bold',
  },

  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  buttonStyle: {
    flex: 0,
    alignItems: 'center',
    backgroundColor: '#53B175',
    borderRadius: 20,
  },
  buttonStyleView: {
    width: '80%',

    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    padding: 20,
  },
});

export default Welcome;
