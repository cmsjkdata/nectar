import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import List from '../../data.json';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={List}
          numColumns={1}
          style={styles.flatList}
          keyExtractor={(item, index) => item.id + index.toString()}
          renderItem={({item, index}) => (
            <Animatable.View
              animation="fadeIn"
              duration={1000}
              delay={index * 100}>
              <View style={styles.card}>
                <Text style={styles.text} key={item.id}>
                  {item.name}
                </Text>
              </View>
            </Animatable.View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  flatList: {paddingVertical: 10},
  card: {padding: 20, borderRadius: 10, borderWidth: 1},
  text: {fontSize: 20},
});
