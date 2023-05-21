import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styleSheets/home_styles';

const LocationInputScreen = () => {
  const [currentLocation, setCurrentLocation] = useState('');
  const [workLocation, setWorkLocation] = useState('');
  const navigation = useNavigation();

  const handleCurrentLocationChange = (text) => {
    setCurrentLocation(text);
  };

  const handleWorkLocationChange = (text) => {
    setWorkLocation(text);
  };

  const handleFindMatches = () => {
    // TODO: send currentLocation and workLocation to backend and receive matched users
    // Implement the logic for finding matches here
  };

  const handleOpenSettings = () => {
    // Handle the press of the settings button
    // Implement the logic to show the settings menu here
  };

  const handleTutorialPress = () => {
    // Handle the press of the tutorial button
    // Implement the logic to navigate to the tutorial screen here
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.settingsButton} onPress={handleOpenSettings}>
        <View style={styles.settingsIcon} />
        <View style={styles.settingsIcon} />
        <View style={styles.settingsIcon} />
      </TouchableOpacity>
      <Text style={styles.welcomeText}>Welcome to Roadies</Text>
      <TouchableOpacity style={styles.tutorialButton} onPress={handleTutorialPress}>
        <Text style={styles.tutorialButtonText}>Tutorial</Text>
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.label}>Current Location:</Text>
        <TextInput
          style={styles.input}
          value={currentLocation}
          onChangeText={handleCurrentLocationChange}
        />
        <Text style={styles.label}>Work Location:</Text>
        <TextInput
          style={styles.input}
          value={workLocation}
          onChangeText={handleWorkLocationChange}
        />
        <TouchableOpacity style={styles.button} onPress={handleFindMatches}>
          <Text style={styles.buttonText}>Find Matches</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomNavBar}>
        <TouchableOpacity
          style={styles.navBarItem}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.navBarItemText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navBarItem}
          onPress={() => navigation.navigate('Maps')}
        >
          <Text style={styles.navBarItemText}>Maps</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navBarItem}
          onPress={() => navigation.navigate('List')}
        >
          <Text style={styles.navBarItemText}>List</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navBarItem}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.navBarItemText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LocationInputScreen;
