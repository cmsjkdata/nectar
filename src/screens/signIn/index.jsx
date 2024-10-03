import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import maskGroup from '../../../assets/maskGroup.png';
import Google from 'react-native-vector-icons/AntDesign';
import Facebook from 'react-native-vector-icons/FontAwesome';
// import {
//   GoogleSignin,
//   statusCodes,
// } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const SignIn = ({navigation}) => {
  // Somewhere in your code
  // const signIn = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const userInfo = await GoogleSignin.signIn();
  //     this.setState({userInfo});
  //   } catch (error) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       // user cancelled the login flow
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       // operation (f.e. sign in) is in progress already
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       // play services not available or outdated
  //     } else {
  //       // some other error happened
  //     }
  //   }
  // };

  const signInWithGoogle = async () => {
    // try {
    //   // Check if the device has Google Play services
    //   await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    //   // Get user info from Google
    //   const {idToken} = await GoogleSignin.signIn();
    //   // Create a Google credential with the token
    //   const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    //   // Sign-in the user with the credential
    //   return auth().signInWithCredential(googleCredential);
    // } catch (error) {
    //   if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //     // User cancelled the sign-in process
    //   } else if (error.code === statusCodes.IN_PROGRESS) {
    //     // Operation (e.g. sign-in) is in progress already
    //   } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    //     // Play services not available or outdated
    //   } else {
    //     // Some other error happened
    //     console.error(error);
    //   }
    // }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={maskGroup} />
        <View style={styles.bottumView}>
          <Text style={styles.heading}>Get your groceries with nectar</Text>

          <TouchableOpacity
            style={styles.textView}
            onPress={e => {
              navigation.push('PhoneNumber');
            }}>
            {/* <TextInput keyboardType="numeric" /> */}
          </TouchableOpacity>
        </View>

        <View style={styles.socialView}>
          <Text style={styles.socialText}>Or connect with social media</Text>
        </View>
        <View style={styles.googleButtonView}>
          <TouchableOpacity
            style={styles.googleButtonTouchbale}
            onPress={e => {
              signInWithGoogle();
            }}>
            <Google name="google" color="white" size={28} />
            <Text style={styles.googleButton}>Continue with Google</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.facebookButtonView}>
          <TouchableOpacity
            style={styles.facebookButtonTouchbale}
            onPress={e => {}}>
            <Facebook name="facebook" color="white" size={28} />
            <Text style={styles.facebookButton}>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
  textView: {
    padding: 20,
    borderBottomWidth: 0.5,
  },
  facebookButtonView: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  facebookButtonTouchbale: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#4A66AC',
    borderRadius: 20,
  },
  facebookButton: {
    color: 'white',
    fontSize: 20,
    padding: 20,
  },
  googleButtonView: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  googleButtonTouchbale: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

    backgroundColor: '#5383EC',
    borderRadius: 20,
  },
  googleButton: {
    color: 'white',
    fontSize: 20,
    padding: 20,
  },
  socialView: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    paddingVertical: 20,
  },
  socialText: {
    fontSize: 14,
    padding: 10,
  },
  // phoneInput: {},

  errorText: {
    color: 'red',
    fontSize: 14,
  },
});
