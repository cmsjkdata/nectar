import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import logoColor from '../../../assets/logoColor.png';
// import bgTopLoin from '../../../assets/bgTopLoin.png';
import auth from '@react-native-firebase/auth';

const LogIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const createUser = () => {
    console.log(email, password);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
  return (
    <ScrollView>
      {/* <ImageBackground source={bgTopLoin}> */}
      <View style={styles.imageView}>
        <Image source={logoColor} />
      </View>
      {/* </ImageBackground> */}
      <View style={styles.container}>
        <View style={styles.topContainerView}>
          <Text style={styles.areaHading}>Loging</Text>
          <Text style={styles.areaHadingPera}>
            Enter your emails and password
          </Text>
        </View>

        <View style={styles.areaView}>
          <View style={styles.areaFildView}>
            <Text style={styles.areaLable}>Email</Text>

            <TextInput
              value={email}
              placeholder="Enter your email"
              placeholderTextColor={'#808080'}
              onChangeText={e => {
                setEmail(e);
              }}
              autoFocus={true}
              style={styles.areaInput}
            />
          </View>
          <View style={styles.areaFildView}>
            <Text style={styles.areaLable}>Password</Text>
            <TextInput
              value={password}
              placeholder="Password"
              placeholderTextColor={'#808080'}
              onChangeText={e => {
                setPassword(e);
              }}
              autoFocus={true}
              style={styles.areaInput}
            />
          </View>
        </View>
        <View style={styles.forgotPasswordView}>
          <TouchableOpacity
            onPress={e => {
              navigation.push('');
            }}>
            <Text style={styles.forgotPasswordText}>Forgot Password ?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.logInButtonView}>
          <TouchableOpacity
            style={styles.logInButtonTouchbale}
            onPress={e => {
              createUser();
            }}>
            <Text style={styles.logInButton}>Log In</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.dontAccountView}>
          <Text style={styles.dontAccountText}>Don’t have an account ?</Text>
          <TouchableOpacity
            onPress={e => {
              navigation.push('');
            }}>
            <Text style={styles.dontAccountSnigupText}> Singup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // backgroundColor: '#FCFCFC',
    justifyContent: 'space-between',
  },

  imageView: {
    flex: 0,
    height: '20%',
    paddingVertical: 20,
    alignItems: 'center',
  },
  topContainerView: {
    // backgroundColor: '#C4C4C4',
  },
  areaHading: {
    paddingTop: 20,
    fontSize: 24,
    color: 'black',
  },
  areaHadingPera: {
    paddingVertical: 20,
    fontSize: 14,
    color: 'black',
  },
  areaFildView: {
    borderBottomWidth: 0.5,
    paddingVertical: 10,
  },
  areaInput: {
    fontSize: 14,
    color: 'black',
  },

  areaView: {
    paddingVertical: 10,
  },

  areaLable: {fontSize: 20, color: 'black'},

  forgotPasswordView: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 0,
    alignItems: 'flex-end',
  },
  forgotPasswordText: {
    color: 'black',
  },
  logInButtonView: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  logInButtonTouchbale: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

    backgroundColor: '#53B175',
    borderRadius: 20,
  },
  logInButton: {
    color: 'white',
    fontSize: 20,
    padding: 20,
  },
  dontAccountView: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dontAccountText: {
    color: 'black',
  },
  dontAccountSnigupText: {
    color: '#53B175',
  },
});
