import React from 'react';
import { View, Text, Image } from 'react-native';

const ProfileViewOthers = ({ user }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{user.name}</Text>
      <Text style={{ fontSize: 16, marginTop: 10 }}>Age: {user.age}</Text>
      <Text style={{ fontSize: 16, marginTop: 10 }}>Email: {user.email}</Text>
      <Text style={{ fontSize: 16, marginTop: 10 }}>Address: {user.address}</Text>
      <Text style={{ fontSize: 16, marginTop: 10 }}>Bio: {user.bio}</Text>
      <Image style={{ width: 150, height: 150, borderRadius: 75, marginTop: 20 }} source={{ uri: user.avatar }} />
    </View>
  );
};

export default ProfileViewOthers;
