import * as React from 'react';
import database from '@react-native-firebase/database';
import {Button, SafeAreaView, StyleSheet} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {useEffect, useState} from 'react';

const TabMapScreen = () => {
  const [initialRegion, setInitialRegion] = useState({
    latitude: 37.72825,
    longitude: -122.4324,
    latitudeDelta: 0.25,
    longitudeDelta: 0.15,
  });
  const [oneMarker, setOneMarker] = useState({
    latitude: 37.72825,
    longitude: -122.4324,
  });

  useEffect(() => {
    const reference = database().ref('/location');
    reference.on('value', snapshot => {
      console.log('User data: ', snapshot.val());
      setInitialRegion(prevState => ({
        ...prevState,
        latitude: snapshot.val().latitude,
        longitude: snapshot.val().longitude,
      }));
      setOneMarker({
        latitude: snapshot.val().latitude,
        longitude: snapshot.val().longitude,
      });
    });
  }, [database().ref]);

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Сканировать QR" onPress={() => {}} />
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={initialRegion}>
        <Marker coordinate={oneMarker} />
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
    height: '95%',
  },
});

export default TabMapScreen;
