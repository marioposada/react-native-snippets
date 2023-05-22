import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Screen from '../screens/OnLongPress';


const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="onLongPressEvent" component={Screen} />
        </Stack.Navigator>
    );
};


