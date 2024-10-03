import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import AppStack from './src/navigation/appStack';

import AuthStack from './src/navigation/authStack';

function App() {
  const [login, setLogin] = useState(true);

  return login ? <AppStack /> : <AuthStack />;
  // https://www.figma.com/design/eN4FmHWbD5tn81ppkm3ZuZ/%F0%9F%A5%91-Fruits-And-Vegetables-Cards-(Community)?node-id=0-1&node-type=canvas&t=KPkQA8mdJef1v2ma-0
}

export default App;
const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#FCFCFC',
  },
});
