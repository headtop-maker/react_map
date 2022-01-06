import * as React from 'react';
import database from '@react-native-firebase/database';
import {
  Alert,
  Button,
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  NativeModules,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {useEffect, useState} from 'react';
import QrScannerScreen from '../../../common/components/QrScannerScreen/QrScannerScreen';
import {BarCodeReadEvent} from 'react-native-camera';

const {ShortMethods} = NativeModules;

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

  const [showScanner, setShowScanner] = useState<Boolean>(false);
  const [qrRemoteDevice, setQrRemoteDevice] = useState<BarCodeReadEvent>();
  const [track, setTrack] = useState<Boolean>(false);

  useEffect(() => {
    if (qrRemoteDevice) {
      const reference = database().ref(`/${qrRemoteDevice?.data}`);
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
    }
  }, [database().ref, qrRemoteDevice]);

  const handleRemoteQrCode = (e: BarCodeReadEvent) => {
    setQrRemoteDevice(e);
    setShowScanner(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      {showScanner && <QrScannerScreen onSuccess={handleRemoteQrCode} />}

      {!qrRemoteDevice ? (
        <Button
          title="Сканировать QR"
          onPress={() => {
            setShowScanner(!showScanner);
          }}
        />
      ) : (
        <>
          <Text>{qrRemoteDevice.data}</Text>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={initialRegion}
          >
            <Marker coordinate={oneMarker} />
          </MapView>
        </>
      )}
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

// const reference = database().ref('/location');
