import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';

const USER_DATA = {
  user1: {
    name: 'John Doe',
    age: 25,
    email: 'johndoe@example.com',
    address: '123 Main St, Anytown USA',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    avatar: 'https://randomuser.me/api/portraits/men/10.jpg'
  },
  user2: {
    name: 'Jane Doe',
    age: 28,
    email: 'janedoe@example.com',
    address: '456 Broad St, Anytown USA',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    avatar: 'https://randomuser.me/api/portraits/women/10.jpg'
  },
  user3: {
    name: 'Bob Smith',
    age: 30,
    email: 'bobsmith@example.com',
    address: '789 High St, Anytown USA',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    avatar: 'https://randomuser.me/api/portraits/men/20.jpg'
  }
};

const ListScreen = ({ navigation }) => {
  const [users, setUsers] = useState(USER_DATA);

  const handlePressUser = (user) => {
    navigation.navigate('Profile', { user });
  };

  const renderItem = ({ item }) => {
    const user = users[item];
    return (
      <TouchableOpacity onPress={() => handlePressUser(user)}>
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
          <Image source={{ uri: user.avatar }} style={{ width: 50, height: 50, borderRadius: 25 }} />
          <Text style={{ marginLeft: 10, fontSize: 18 }}>{user.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={Object.keys(users)}
      renderItem={renderItem}
      keyExtractor={(item) => item}
    />
  );
};

export default ListScreen;
