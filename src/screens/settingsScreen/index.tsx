import React from 'react';
import {Button, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {getChangeTime} from '../../store/settings/selector';
import {NavigationProp} from '@react-navigation/native';
import {IRouteParamList} from '../../navigation/types';

interface IProps {
  navigation: NavigationProp<IRouteParamList>;
}

const SettingsScreen = ({navigation}: IProps) => {
  const getUpdateTime = useSelector(getChangeTime);
  return (
    <>
      <View>
        <Text>SETTINGS SCREEN</Text>
        <Text>{getUpdateTime}</Text>
        <Button title="go back" onPress={() => navigation.goBack()} />
      </View>
    </>
  );
};
export default SettingsScreen;
