import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabMapScreen from '../tabs/tabMapScreen';
import TabServiceLocationScreen from '../tabs/tabServiceLocationScreen';
import TAB_SCREENS from '../../constants/tabscreens';
import {TouchableOpacity, View} from 'react-native';

import Maps from '../../common/icons/svg/maps.svg';
import Person from '../../common/icons/svg/person.svg';
import Settings from '../../common/icons/svg/settings.svg';
import SCREENS from '../../constants/screen';
import {NavigationProp} from '@react-navigation/native';
import {IRouteParamList} from '../../navigation/types';

interface ITabProps {
  navigation: NavigationProp<IRouteParamList>;
}

const Tab = createBottomTabNavigator();
const TabScreen = ({navigation}: ITabProps) => {
  const SettingsHandler = () => {
    return (
      <View style={{marginRight: 20}}>
        <TouchableOpacity
          onPress={() => navigation.navigate(SCREENS.SettingsScreen)}>
          <Settings width={30} height={30} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 60,
          borderRadius: 50,
          elevation: 4,
          position: 'absolute',
          margin: 10,
        },
        tabBarItemStyle: {
          margin: 5,
          borderRadius: 50,
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name={TAB_SCREENS.TabMapScreen}
        component={TabMapScreen}
        options={{
          title: 'Карта',
          headerRight: () => {
            return <SettingsHandler />;
          },
          tabBarIcon: ({focused}) => (
            <Person
              width={30}
              height={30}
              strokeWidth={3}
              stroke={focused ? '#ff4343' : '#0040ff'}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TAB_SCREENS.TabServiceLocationScreen}
        component={TabServiceLocationScreen}
        options={{
          title: 'Включить наблюдение',
          headerRight: () => {
            return <SettingsHandler />;
          },
          tabBarIcon: ({focused}) => (
            <Maps
              width={30}
              height={30}
              strokeWidth={3}
              stroke={focused ? '#ff4343' : '#0040ff'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabScreen;
