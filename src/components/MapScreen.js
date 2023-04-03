import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = ({ matchedUsers }) => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      },
      (error) => alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }, []);

  return (
    <MapView style={{ flex: 1 }} region={userLocation}>
      {userLocation && <Marker coordinate={userLocation} title="You are here" />}
      {matchedUsers.map((user) => (
        <Marker key={user.id} coordinate={{ latitude: user.latitude, longitude: user.longitude }} title={user.name} />
      ))}
    </MapView>
  );
};

export default MapScreen;
