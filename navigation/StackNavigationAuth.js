import React from 'react';
import {View, StyleSheet} from 'react-native';
// navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// components
import LoginScreen from '../screens/auth/LoginScreen'
import SignupScreen from '../screens/auth/SignupScreen'
import PasswordRecoveryScreen from '../screens/auth/PasswordRecoveryScreen'


const StackNavigationAuth = () => {
    // react native navigator
    const Stack = createNativeStackNavigator()
    
    return (
        
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} /> 
            <Stack.Screen name="Signup" component={SignupScreen} />  
            <Stack.Screen 
                name="PasswordRecovery" 
                component={PasswordRecoveryScreen} 
                options={{
                    presentation:"modal",
                    headerShown:false
                }}
            /> 
        </Stack.Navigator>
        
    );
}

export default StackNavigationAuth;
