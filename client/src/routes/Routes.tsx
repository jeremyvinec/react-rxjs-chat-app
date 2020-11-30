import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Messaging from '../screens/messaging/Messaging';
import Register from '../screens/auth/register/Register';

const Stack = createStackNavigator();

export default function Routes() {

  const { user } = useSelector((state: any) => state.User);
  console.log('route', user)
  return (
        <NavigationContainer>
            <Stack.Navigator headerMode='none'>
                {user ? (
                  <Stack.Screen name='Messaging' component={Messaging} />
                ) : (
                  <Stack.Screen name='Register' component={Register} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
