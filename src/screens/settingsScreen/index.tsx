import React from 'react';
import {Button, Text, View} from 'react-native';

const SettingsScreen = ({navigation}) => {
  return (
    <>
      <View>
        <Text>SETTINGS SCREEN</Text>
        <Button title="go back" onPress={() => navigation.goBack()} />
      </View>
    </>
  );
};
export default SettingsScreen;
