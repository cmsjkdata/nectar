import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import AppStack from './navigation/appStack';

import AuthStack from './navigation/authStack';
import {MD3LightTheme as DefaultTheme, PaperProvider} from 'react-native-paper';

function App() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'tomato',
      secondary: 'yellow',
    },
  };

  const [login, setLogin] = useState(true);

  return login ? (
    <PaperProvider theme={theme}>
      <AppStack />
    </PaperProvider>
  ) : (
    <AuthStack />
  );
}

export default App;
