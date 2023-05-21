import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const LocationInputScreen = () => {
  const [currentLocation, setCurrentLocation] = useState('');
  const [workLocation, setWorkLocation] = useState('');

  const handleCurrentLocationChange = (text) => {
    setCurrentLocation(text);
  };

  const handleWorkLocationChange = (text) => {
    setWorkLocation(text);
  };

  const handleFindMatches = () => {
    // TODO: send currentLocation and workLocation to backend and receive matched users
    var currentLocation = navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    }
    );
    var worklocation = self.workLocation;
  };

  return (
    <View>
      <Text>Current Location:</Text>
      <TextInput value={currentLocation} onChangeText={handleCurrentLocationChange} />
      <Text>Work Location:</Text>
      <TextInput value={workLocation} onChangeText={handleWorkLocationChange} />
      <Button title="Find Matches" onPress={handleFindMatches} />
    </View>
  );
};

export default LocationInputScreen;
