import React from 'react';
import {View, StyleSheet} from 'react-native';
// navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// components
import LandingScreen from '../screens/public/LandingScreen'
import ShowScreen from '../screens/public/ShowScreen'
import TodayPublicScreen from '../screens/public/TodayPublicScreen'


const StackNavigationPublic = () => {

    // react native navigator
    const Stack = createNativeStackNavigator()

    return (
        
        <Stack.Navigator>
            <Stack.Screen name="Landing" component={LandingScreen} /> 
            <Stack.Screen name="Show" component={ShowScreen} /> 
            <Stack.Screen name="TodayPublic" component={TodayPublicScreen} /> 
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default StackNavigationPublic;
