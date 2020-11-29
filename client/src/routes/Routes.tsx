import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Messaging from '../screens/messaging/Messaging';
import Register from '../screens/auth/register/Register';

const Stack = createStackNavigator();

export default function Routes() {

  const { room } = useSelector((state: any) => state.Chat);

  return (
        <NavigationContainer>
            <Stack.Navigator headerMode='none'>
                {room ? (
                  <Stack.Screen name='Messaging' component={Messaging} />
                ) : (
                  <Stack.Screen name='Register' component={Register} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
