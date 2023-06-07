import React from 'react';
import {View, StyleSheet} from 'react-native';
// navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// components
import LandingScreen from '../screens/public/LandingScreen'
import ShowScreen from '../screens/public/ShowScreen'
import TodayPublicScreen from '../screens/public/TodayPublicScreen'
import SearcherResultsPublic from '../screens/public/results/SearcherResultsPublic'
import ResultCompanyScreenPublic from '../screens/public/results/ResultCompanyScreenPublic'
import ResultProductScreenPublic from '../screens/public/results/ResultProductScreenPublic'
import ResultEventScreenPublic from '../screens/public/results/ResultEventScreenPublic'
import ResultOffertScreenPublic from '../screens/public/results/ResultOffertScreenPublic'

const StackNavigationPublic = () => {

    // react native navigator
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen name="Landing" component={LandingScreen} /> 
            <Stack.Screen name="Show" component={ShowScreen} /> 
            <Stack.Screen name="TodayPublic" component={TodayPublicScreen} /> 
            <Stack.Screen 
                name="SearcherResultsPublic" 
                component={SearcherResultsPublic} 
                options={{
                    presentation:"fullScreenModal",
                    headerShown:false
                }}
            /> 

            {/* public results */}
            <Stack.Screen 
                name="ResultCompanyScreenPublic" 
                component={ResultCompanyScreenPublic} 
                options={{
                    presentation:"fullScreenModal",
                    headerShown:false
                }}
            /> 
            <Stack.Screen 
                name="ResultProductScreenPublic" 
                component={ResultProductScreenPublic} 
                options={{
                    presentation:"fullScreenModal",
                    headerShown:false
                }}
            /> 
            <Stack.Screen 
                name="ResultEventScreenPublic" 
                component={ResultEventScreenPublic} 
                options={{
                    presentation:"fullScreenModal",
                    headerShown:false
                }}
            /> 
            <Stack.Screen 
                name="ResultOffertScreenPublic" 
                component={ResultOffertScreenPublic} 
                options={{
                    presentation:"fullScreenModal",
                    headerShown:false
                }}
            /> 
        </Stack.Navigator>
    );
}

export default StackNavigationPublic;
