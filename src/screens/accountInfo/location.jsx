import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Modal,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import location from '../../../assets/location.png';

import List from '../../../data.json';
import {ScrollView} from 'react-native-gesture-handler';

const Location = ({navigation}) => {
  const [yourArea, setYourArea] = useState('');
  const [select, setSelect] = useState('');
  const [module, setModule] = useState(false);

  const handleAreaInput = e => {
    setYourArea(e);
  };
  const handleSelect = e => {
    setSelect(e);
    setModule(false);
  };
  console.log(List[0].name);

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.pop(1);
          }}
          style={styles.backBottun}>
          <Entypo name="chevron-thin-left" size={24} color={'black'} />
        </TouchableOpacity>
        <View style={styles.topContainerView}>
          <Image source={location} />
          <Text style={styles.areaHading}>Select Your Location</Text>
          <Text style={styles.areaHadingPera}>
            Swithch on your location to stay in tune with what’s happening in
            your area
          </Text>
        </View>

        <View style={styles.areaView}>
          <View style={styles.areaFildView}>
            <Text style={styles.areaLable}>Your State</Text>
            <TouchableOpacity
              style={styles.stateTouchable}
              onPress={() => {
                setModule(true);
              }}>
              <Text style={styles.areaInput}>{select || 'Select State'} </Text>
              <Entypo name="chevron-thin-down" size={14} color={'black'} />
            </TouchableOpacity>
            <Modal
              transparent={true}
              visible={module}
              onRequestClose={() => setModule(false)}
              animationType="slide">
              <TouchableOpacity
                style={styles.modalOverlay}
                onPress={() => setModule(false)} // Close modal if clicked outside
              >
                <View style={styles.popupContainer}>
                  <FlatList
                    data={List}
                    keyExtractor={item => item.id.toString()} // Ensure ids are strings
                    renderItem={({item}) => (
                      <TouchableOpacity
                        style={styles.popupItem}
                        onPress={() => handleSelect(item.name)}>
                        <Text style={styles.popupItemText}>{item.name}</Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              </TouchableOpacity>
            </Modal>
          </View>

          <View style={styles.areaFildView}>
            <Text style={styles.areaLable}>Your Area</Text>

            <TextInput
              value={yourArea}
              placeholder="Types of your area"
              placeholderTextColor={'#808080'}
              onChangeText={handleAreaInput}
              autoFocus={true}
              style={styles.areaInput}
            />
          </View>
        </View>
        <View style={styles.submitButtonView}>
          <TouchableOpacity
            style={styles.submitButtonTouchbale}
            onPress={e => {
              navigation.push('LogIn');
            }}>
            <Text style={styles.submitButton}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Location;
const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'space-between',
  },
  backBottun: {},
  areaHading: {
    paddingTop: 20,
    fontSize: 24,
    color: 'black',
  },
  areaHadingPera: {
    paddingVertical: 20,
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
  },

  areaInput: {
    fontSize: 14,
    color: 'black',
  },
  topContainerView: {
    flex: 0,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  enterBottunView: {
    flex: 0,
    alignItems: 'flex-end',
    borderRadius: 50,
    paddingVertical: 20,
  },
  enterBottun: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 50,
  },
  areaView: {
    paddingVertical: 10,
  },

  areaLable: {fontSize: 20, color: 'black'},
  areaFildView: {
    borderBottomWidth: 0.5,
    paddingVertical: 10,
  },
  submitButtonView: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  submitButtonTouchbale: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

    backgroundColor: '#53B175',
    borderRadius: 20,
  },
  submitButton: {
    color: 'white',
    fontSize: 20,
    padding: 20,
  },
  stateTouchable: {
    flex: 0,
    flexDirection: 'row',
    paddingTop: 20,
    justifyContent: 'space-between',
  },

  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popupContainer: {
    width: '80%',
    height: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    elevation: 10,
  },
  popupItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  popupItemText: {
    fontSize: 16,
  },
});
