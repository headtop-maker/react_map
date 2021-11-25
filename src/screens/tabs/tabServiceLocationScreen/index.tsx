import * as React from 'react';

import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import IconCamera from '../../../common/icons/svg/camera.svg';
import GetLocation from 'react-native-get-location';
import {useEffect, useState} from 'react';

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

const TabServiceLocationScreen = () => {
  const [location, setLocation] = useState<ILocation>();
  const [startService, setStartService] = useState<boolean>(false);

  // GetLocation.getCurrentPosition({
  //   enableHighAccuracy: true,
  //   timeout: 1500000,
  // })
  //   .then(location => {
  //     // console.log(location.latitude);
  //     setLocation(location);
  //   })
  //   .catch(error => {
  //     const {code, message} = error;
  //     console.warn(code, message);
  //   });

  const handleAwaitLocation = async () => {
    setLocation(
      await GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 1500000,
      }),
    );
  };

  useEffect(() => {
    if (startService) {
      setTimeout(handleAwaitLocation, 1500);
    }
  }, [location, startService]);

  console.log(location);
  // console.log(startService);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Tab Service Location Screen</Text>
      <View>
        <Text>
          {location &&
            `longitude= ${location.longitude}  latitude = ${location.latitude}`}
        </Text>
        <Button
          title={`start location ${startService} `}
          onPress={() => setStartService(!startService)}
        />

        <IconCamera width={200} height={200} />
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
});

export default TabServiceLocationScreen;

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
