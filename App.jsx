import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import AppStack from './src/navigation/appStack';

import AuthStack from './src/navigation/authStack';

function App() {
  const [login, setLogin] = useState(true);

  return (
    <View style={styles.container}>{login ? <AppStack /> : <AuthStack />}</View>
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FCFCFC',
  },
});
