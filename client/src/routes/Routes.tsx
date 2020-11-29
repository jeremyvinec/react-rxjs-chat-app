import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Messaging from '../screens/messaging/Messaging';
import Register from '../screens/auth/register/Register';

const Stack = createStackNavigator();

export default function Routes() {

  return (
        <NavigationContainer>
            <Stack.Navigator headerMode='none'>
                <Stack.Screen name='Register' component={Register} />
                <Stack.Screen name='Messaging' component={Messaging} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
