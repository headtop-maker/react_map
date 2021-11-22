import {NavigationProp} from '@react-navigation/native';
import * as React from 'react';

import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';
import SCREENS from '../../constants/screen';
import {IRouteParamList} from '../../navigation/types';

interface IProps {
  navigation: NavigationProp<IRouteParamList>;
}
const MainScreen = ({navigation}: IProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Main Container</Text>
      <Button
        title="Navigate TabScreen"
        onPress={() => navigation.navigate(SCREENS.TabScreen)}
      />
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

export default MainScreen;
