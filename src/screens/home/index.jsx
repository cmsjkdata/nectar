import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SeachBar from '../../components/seachBar';

const index = () => {
  return (
    <View style={styles.container}>
      <SeachBar />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
