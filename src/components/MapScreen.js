import React, { useState } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {
    const [mapRegion, setMapRegion] = useState(null);

    const coordinates = [
        { latitude: 37.78825, longitude: -122.4324 },
        { latitude: 37.78795, longitude: -122.4321 },
        { latitude: 37.78765, longitude: -122.4318 },
        { latitude: 37.78735, longitude: -122.4315 },
      ];
      
  
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: coordinates[0].latitude,
            longitude: coordinates[0].longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onRegionChange={(region) => setMapRegion(region)}
        >
          {coordinates.map((coordinate, index) => (
            <Marker key={index} coordinate={coordinate} />
          ))}
        </MapView>
      </View>
    );
  };
    
export default MapScreen;
