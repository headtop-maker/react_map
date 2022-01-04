import * as React from 'react';

import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  NativeModules,
} from 'react-native';
import IconCamera from '../../../common/icons/svg/camera.svg';
import GetLocation from 'react-native-get-location';
import {useEffect, useState} from 'react';
import database from '@react-native-firebase/database';
import {useSelector} from 'react-redux';
import {getChangeTime} from '../../../store/settings/selector';
import QRCode from 'react-native-qrcode-svg';

interface ILocation {
  latitude: number;
  longitude: number;
  altitude: number;
  accuracy: number;
  speed: any;
  time: number;
  bearing?: number;
  provider?: number;
  verticalAccuracy?: number;
  course?: number;
}

const {ShortMethods} = NativeModules;

const TabServiceLocationScreen = () => {
  const [location, setLocation] = useState<ILocation>();
  const [startService, setStartService] = useState<boolean>(false);
  const [deviceId, setDeviceId] = useState<String>('');
  const getUpdateTimeLocation = useSelector(getChangeTime);

  useEffect(() => {
    ShortMethods.getDeviceID((devId: String) => {
      setDeviceId(devId);
    });
    return setStartService(false);
  }, []);

  const handleAwaitLocation = async () => {
    const location = await GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 1500000,
    });
    setLocation(location);
    if (deviceId) {
      const reference = database().ref(`/${deviceId}`);
      reference
        .set({
          latitude: location.latitude,
          longitude: location.longitude,
        })
        .then(() => console.log('Data set'));
    }
  };

  useEffect(() => {
    if (startService) {
      setTimeout(handleAwaitLocation, getUpdateTimeLocation);
    }
  }, [location, startService]);

  console.log(location);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Tab Service Location Screen</Text>
      <View style={styles.body}>
        <Text>
          {location &&
            `longitude= ${location.longitude}  latitude = ${location.latitude}`}
        </Text>
        {deviceId ? (
          <View style={styles.qrData}>
            <Text>Ваш ID : {deviceId}</Text>
            <QRCode value={`${deviceId}`} size={200} />
          </View>
        ) : (
          <Text>Нет данных ID </Text>
        )}

        <Button
          title={`start location ${startService} `}
          onPress={() => setStartService(!startService)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    alignItems: 'center',
  },
  qrData: {
    alignItems: 'center',
  },
});

export default TabServiceLocationScreen;

// useEffect(() => () => setStartService(false), []);

// const glocation = () => { // из документации
//   GetLocation.getCurrentPosition({
//     enableHighAccuracy: true,
//     timeout: 150000,
//   })
//       .then(location => {
//         // console.log(location.latitude);
//         setLocation(location);
//       })
//       .catch(error => {
//         const {code, message} = error;
//         console.warn(code, message);
//       });
// };

// const handleAwaitLocation = async () => {
//   setLocation(
//       await GetLocation.getCurrentPosition({
//         enableHighAccuracy: true,
//         timeout: 1500000,
//       }),
//   );
// };
