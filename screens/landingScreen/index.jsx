import React, {useEffect} from 'react';
import {
  Image,
  // SafeAreaView,
  // ScrollView,
  StyleSheet,
  // Text,
  View,
} from 'react-native';
import logo from '../../assets/logo.png';

const LandingScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Welcome');
    }, 2000);
  });
  return (
    <View style={styles.container}>
      <Image source={logo} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#86D293',
  },

  text_: {
    color: 'white', // Set text color to white for visibility
    fontSize: 18, // Adjust the font size as needed
  },
});

export default LandingScreen;
