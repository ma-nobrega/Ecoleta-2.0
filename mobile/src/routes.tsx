import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Feather} from '@expo/vector-icons';

import Home from './pages/Home';
import pointStack from './pointStack.routes';

const { Navigator, Screen } = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator
        tabBarOptions={{
          style: {
            elevation: 0,
            shadowOpacity: 0,
            height: 64,
          },
          tabStyle: {
            // flexDirection:''
            alignItems: 'center',
            justifyContent: 'center'
          },
          iconStyle: {
            flex: 0,
            width: 20,
            height: 20,
          },
          labelStyle: {
            fontFamily: 'Ubuntu_700Bold',
            fontSize: 13,
            marginTop: 8,
          },
          inactiveBackgroundColor: '#fafafc',
          activeBackgroundColor: '#ffffff',
          inactiveTintColor: '#d6d2dd',
          activeTintColor: '#34CB79'
        }}
      >
        <Screen name="Home" component={Home} options={{
          tabBarIcon: ({color, size}) => {
            return (
              <Feather name="home" color={color} size={size} />
            );
          }
        }} />
        <Screen name="FilterPoints" component={pointStack} options={{
          tabBarLabel: 'Pontos',
          tabBarIcon: ({color, size}) => {
            return (
              <Feather name="map" size={size} color={color} />
            );
          }
        }} />
      </Navigator>
    </NavigationContainer>

  );
}

export default Routes;