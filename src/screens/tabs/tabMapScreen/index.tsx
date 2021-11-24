import * as React from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const TabMapScreen = () => {
  const initialRegion = {
    latitude: 37.72825,
    longitude: -122.4324,
    latitudeDelta: 0.25,
    longitudeDelta: 0.15,
  };
  return (
    <SafeAreaView style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={initialRegion}>
        <Marker coordinate={{latitude: 37.78825, longitude: -122.4324}} />
        <Marker coordinate={{latitude: 37.78525, longitude: -122.4224}} />
        <Marker coordinate={{latitude: 37.7765, longitude: -122.4124}} />
        <Marker coordinate={{latitude: 37.7965, longitude: -122.4424}} />
        <Marker coordinate={{latitude: 37.8065, longitude: -122.4424}} />
        <Marker coordinate={{latitude: 37.7765, longitude: -122.4424}} />
        <Marker coordinate={{latitude: 37.7565, longitude: -122.4324}} />
      </MapView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default TabMapScreen;
