import {NavigationProp} from '@react-navigation/native';
import * as React from 'react';

import {
  Button,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import SCREENS from '../../constants/screen';
import {IRouteParamList} from '../../navigation/types';
import {useState} from 'react';

interface IProps {
  navigation: NavigationProp<IRouteParamList>;
}
const MainScreen = ({navigation}: IProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hide, setHide] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <Text>Main Container</Text>
        {hide && (
          <View>
            <Text>Вы вошли как:</Text>
            <Text testID="showEmail">{email}</Text>
          </View>
        )}
        <TextInput
          testID="testEmailInput"
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          keyboardType={'email-address'}
          placeholder={'Введите e-mail'}
        />
        <TextInput
          testID="testPasswordInput"
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
          keyboardType={'default'}
          placeholder={'Введите пароль'}
        />
        <View style={styles.button}>
          <Button
            title="Войти"
            onPress={() => {
              email && password ? setHide(true) : setHide(false);
            }}
          />
        </View>

        <Button
          title="Navigate TabScreen"
          onPress={() => navigation.navigate(SCREENS.TabScreen)}
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: '50%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    marginBottom: 10,
  },
});

export default MainScreen;
