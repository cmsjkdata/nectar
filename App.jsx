import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import AppStack from './src/navigation/appStack';

import AuthStack from './src/navigation/authStack';

function App() {
  const [login, setLogin] = useState(true);

  return login ? <AppStack /> : <AuthStack />;
}

export default App;
const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#FCFCFC',
  },
});
