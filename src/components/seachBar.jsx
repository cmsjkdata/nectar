import {StyleSheet, TextInput, FlatList, View, Text} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {items} from '../../data.json';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showItems, setShowItems] = useState([]);

  const searchItemFunc = e => {
    console.log(e, items.name);
    const filteredItems = items.filter(
      item => item.name.toLowerCase().includes(e.toLowerCase()), // Assuming the items have a 'name' field
    );
    console.log(filteredItems);
    setShowItems(filteredItems);
    setSearchQuery(e);
  };

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <>
      <View style={styles.searchBarView}>
        <TextInput
          value={searchQuery}
          placeholder="Search Query"
          onChangeText={searchItemFunc}
          style={styles.textInput}
        />
        {!searchQuery && <Icon name={'search'} size={28} />}
      </View>
      <FlatList
        data={showItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBarView: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 0,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 20,
  },
  textInput: {
    width: '90%',
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
