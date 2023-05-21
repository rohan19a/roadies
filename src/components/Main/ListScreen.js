import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import home_styles from '../styleSheets/home_styles';

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
    navigation.navigate('ProfileViewOthers', { user: user });
  };

  const renderItem = ({ item }) => {
    const user = users[item];
    return (
      <TouchableOpacity onPress={() => handlePressUser(user)}>
        <View style={home_styles.listItem}>
          <Image source={{ uri: user.avatar }} style={home_styles.avatar} />
          <Text style={home_styles.userName}>{user.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={home_styles.container}>
      <FlatList
        data={Object.keys(users)}
        renderItem={renderItem}
        keyExtractor={(item) => item}
      />
      <View style={home_styles.selectionBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={home_styles.selectionBarButton}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Maps')}>
          <Text style={home_styles.selectionBarButton}>Maps</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Text style={home_styles.selectionBarButton}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('List')}>
          <Text style={home_styles.selectionBarButton}>List</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ListScreen;
