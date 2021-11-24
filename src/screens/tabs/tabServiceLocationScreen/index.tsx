import * as React from 'react';

import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import IconCamera from '../../../common/icons/svg/camera.svg';

const TabServiceLocationScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Tab Service Location Screen</Text>
      <View>
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
