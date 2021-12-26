import React, {useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getChangeTime} from '../../store/settings/selector';
import {NavigationProp} from '@react-navigation/native';
import {IRouteParamList} from '../../navigation/types';
import {changeTimeAction} from '../../store/settings/action';

interface IProps {
  navigation: NavigationProp<IRouteParamList>;
}

const timesUpload = [1000, 1500, 2000];

interface IPickerValue {
  pickerValue: number | string | null;
}

const SettingsScreen = ({navigation}: IProps) => {
  const [showPicker, setShowPicker] = useState<boolean>(false);
  const [pickerValue, setPickerValue] = useState<number | string>(0);
  const dispatch = useDispatch();
  const getUpdateTime = useSelector(getChangeTime);
  console.log(getUpdateTime);

  const updateTimeHandler = (value: number) => {
    dispatch(changeTimeAction(value));
  };

  return (
    <>
      <View style={styles.container}>
        <Text>SETTINGS SCREEN</Text>
        <View style={styles.showPicker}>
          <TouchableOpacity onPress={() => setShowPicker(!showPicker)}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                borderWidth: 1,
              }}>
              <Text>PICKER HANDLER</Text>
              <Text>{pickerValue && pickerValue}</Text>
            </View>
          </TouchableOpacity>
        </View>
        {showPicker && (
          <View style={styles.picker}>
            {timesUpload.map((value, index) => {
              return (
                <View style={styles.pickerItem} key={index}>
                  <TouchableOpacity
                    onPress={() => {
                      setShowPicker(!showPicker);
                      setPickerValue(value);
                      updateTimeHandler(value);
                    }}>
                    <Text> {value}</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        )}

        <Button title="go back" onPress={() => navigation.goBack()} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  showPicker: {
    width: '50%',
  },

  picker: {
    borderColor: 'BLACK',
    width: '50%',
  },
  pickerItem: {
    borderWidth: 1,
    marginBottom: 3,
  },
});
export default SettingsScreen;
