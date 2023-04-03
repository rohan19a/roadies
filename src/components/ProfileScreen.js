import React from 'react';
import { View, Text, Image, Button } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  const user = {
    name: 'John Doe',
    age: 25,
    email: 'johndoe@example.com',
    address: '123 Main St, Anytown USA',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut libero ac felis fermentum convallis. Mauris euismod eget sapien quis commodo. Vivamus euismod congue velit, vel pretium nibh imperdiet vel. Sed nec scelerisque enim, sed feugiat libero. Aenean quis rhoncus augue. Nulla sed rutrum mi. Fusce non risus quis augue ullamcorper consectetur vel a urna. Duis commodo velit sed eleifend elementum. Etiam bibendum sit amet dolor non suscipit. In commodo ex quis sagittis lacinia. Suspendisse commodo ex vel magna feugiat, ac ultricies nunc hendrerit. Fusce sit amet lacus sed justo eleifend lobortis.',
    avatar: 'https://randomuser.me/api/portraits/men/10.jpg'
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{user.name}</Text>
      <Text style={{ fontSize: 16, marginTop: 10 }}>Age: {user.age}</Text>
      <Text style={{ fontSize: 16, marginTop: 10 }}>Email: {user.email}</Text>
      <Text style={{ fontSize: 16, marginTop: 10 }}>Address: {user.address}</Text>
      <Text style={{ fontSize: 16, marginTop: 10 }}>Bio: {user.bio}</Text>
      <Image style={{ width: 150, height: 150, borderRadius: 75, marginTop: 20 }} source={{ uri: user.avatar }} />
      <Button title="Message" onPress={() => navigation.navigate('Message')} />
    </View>
  );
};

export default ProfileScreen;
