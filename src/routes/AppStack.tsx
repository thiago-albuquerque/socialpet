import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AppTabNavigator} from './AppTabNavigator';

export type AppStackParamList = {
  AppTabNavigator: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="AppTabNavigator"
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}>
      <Stack.Screen name="AppTabNavigator" component={AppTabNavigator} />
    </Stack.Navigator>
  );
}
