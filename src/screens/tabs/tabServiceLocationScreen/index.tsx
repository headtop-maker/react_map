import * as React from 'react';

import {SafeAreaView, StyleSheet, Text} from 'react-native';

const TabServiceLocationScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Tab Service Location Screen</Text>
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
