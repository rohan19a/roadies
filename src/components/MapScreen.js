import React from 'react';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = ({ matchedUsers }) => {
  const defaultRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <MapView style={{ flex: 1 }} region={defaultRegion}>
      {matchedUsers.map((user) => (
        <Marker key={user.id} coordinate={{ latitude: user.latitude, longitude: user.longitude }} title={user.name} />
      ))}
    </MapView>
  );
};

export default MapScreen;
