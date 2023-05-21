import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {
  const [mapRegion, setMapRegion] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [closestPeople, setClosestPeople] = useState([]);

  useEffect(() => {
    const fetchUserLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
          setMapRegion({
            latitude,
            longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
        },
        (error) => {
          console.error(error);
          // Handle geolocation error here
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    };

    if (navigator.geolocation) {
      fetchUserLocation();
    } else {
      // Handle geolocation not available
    }

    // Fetch closest people's locations
    // Implement the logic to fetch and set the closestPeople state here
    const closestPeopleData = [
      { name: 'John Doe', latitude: 37.78825, longitude: -122.4324 },
      { name: 'Jane Smith', latitude: 37.78795, longitude: -122.4321 },
      { name: 'Michael Johnson', latitude: 37.78765, longitude: -122.4318 },
      { name: 'Emily Davis', latitude: 37.78735, longitude: -122.4315 },
    ];
    setClosestPeople(closestPeopleData);
  }, []);

  const handleMarkerPress = (person) => {
    // Handle the press of a marker
    // Implement the logic to navigate to the person's profile using person.id
    console.log('Pressed marker:', person);
  };

  return (
    <View style={{ flex: 1 }}>
      {userLocation ? (
        <MapView
          style={{ flex: 1 }}
          region={mapRegion}
          onRegionChange={(region) => setMapRegion(region)}
        >
          {closestPeople.map((person, index) => (
            <Marker
              key={index}
              coordinate={{ latitude: person.latitude, longitude: person.longitude }}
              onPress={() => handleMarkerPress(person)}
            />
          ))}
          <Marker
            coordinate={{
              latitude: userLocation.latitude,
              longitude: userLocation.longitude,
            }}
            pinColor="blue"
            title="Your Location"
          />
        </MapView>
      ) : (
        <Text>Fetching user location...</Text>
      )}
    </View>
  );
};

export default MapScreen;
