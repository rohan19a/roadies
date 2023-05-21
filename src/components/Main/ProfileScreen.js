import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import home_style from '../styleSheets/profile_styles';

const ProfileScreen = ({ navigation }) => {
  const [user, setUser] = useState({
    name: 'John Doe',
    age: 25,
    email: 'johndoe@example.com',
    address: '123 Main St, Anytown USA',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut libero ac felis fermentum convallis. Mauris euismod eget sapien quis commodo. Vivamus euismod congue velit, vel pretium nibh imperdiet vel. Sed nec scelerisque enim, sed feugiat libero. Aenean quis rhoncus augue. Nulla sed rutrum mi. Fusce non risus quis augue ullamcorper consectetur vel a urna. Duis commodo velit sed eleifend elementum. Etiam bibendum sit amet dolor non suscipit. In commodo ex quis sagittis lacinia. Suspendisse commodo ex vel magna feugiat, ac ultricies nunc hendrerit. Fusce sit amet lacus sed justo eleifend lobortis.',
    avatar: 'https://randomuser.me/api/portraits/men/10.jpg'
  });

  const handleSave = (updatedUser) => {
    setUser(updatedUser);
  };

  return (
    <View style={home_style.container}>
      <Text style={home_style.heading}>{user.name}</Text>
      <Image style={home_style.avatar} source={{ uri: user.avatar }} />
      <Text style={home_style.info}>Age: {user.age}</Text>
      <Text style={home_style.info}>Email: {user.email}</Text>
      <Text style={home_style.info}>Address: {user.address}</Text>
      <Text style={home_style.bio}>{user.bio}</Text>
      <TouchableOpacity style={home_style.button} onPress={() => navigation.navigate('ProfileEdit', { user: user, onSave: handleSave })}>
        <Text style={home_style.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={home_style.button} onPress={() => navigation.navigate('Message')}>
        <Text style={home_style.buttonText}>Message</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
