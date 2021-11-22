import * as React from 'react';

import {SafeAreaView, StyleSheet, Text} from 'react-native';

const TabMapScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Tab Map Screen</Text>
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

export default TabMapScreen;
