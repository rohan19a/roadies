import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileEditScreen = ({ profileData, setProfileData }) => {
  const [name, setName] = useState(profileData.name);
  const [age, setAge] = useState(profileData.age);
  const [gender, setGender] = useState(profileData.gender);
  const [bio, setBio] = useState(profileData.bio);

  const navigation = useNavigation();

  const handleSaveChanges = () => {
    const updatedProfile = {
      ...profileData,
      name: name,
      age: age,
      gender: gender,
      bio: bio,
    };
    setProfileData(updatedProfile);
    navigation.goBack();
  };

  return (
    <View>
      <Text>Name:</Text>
      <TextInput value={name} onChangeText={setName} />
      <Text>Age:</Text>
      <TextInput value={age} onChangeText={setAge} />
      <Text>Gender:</Text>
      <TextInput value={gender} onChangeText={setGender} />
      <Text>Bio:</Text>
      <TextInput value={bio} onChangeText={setBio} multiline={true} numberOfLines={4} />
      <Button title="Save Changes" onPress={handleSaveChanges} />
    </View>
  );
};

export default ProfileEditScreen;
