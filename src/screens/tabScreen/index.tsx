import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabMapScreen from '../tabs/tabMapScreen';
import TabServiceLocationScreen from '../tabs/tabServiceLocationScreen';
import TAB_SCREENS from '../../constants/tabscreens';
import {Text} from 'react-native';

const Tab = createBottomTabNavigator();
const TabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: 'powderblue'},
      }}>
      <Tab.Screen
        name={TAB_SCREENS.TabMapScreen}
        component={TabMapScreen}
        options={{
          title: 'Карта',
          headerRight: () => {
            return <Text>Настройки</Text>;
          },
        }}
      />
      <Tab.Screen
        name={TAB_SCREENS.TabServiceLocationScreen}
        component={TabServiceLocationScreen}
        options={{title: 'Включить наблюдение'}}
      />
    </Tab.Navigator>
  );
};

export default TabScreen;
