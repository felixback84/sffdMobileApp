import React from 'react';
import {View, StyleSheet} from 'react-native';
// navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// components
import HomeScreen from '../screens/admin/HomeScreen'
import SearcherScreen from '../screens/admin/SearcherScreen'
import TodayScreen from '../screens/admin/TodayScreen'
import DeviceScreen from '../screens/admin/DeviceScreen'
import NotificationsScreen from '../screens/admin/NotificationsScreen'
import ProfileScreen from '../screens/admin/ProfileScreen'


const StackNavigationAdmin = () => {
    // react native navigator
    const Stack = createNativeStackNavigator()
    
    return ( 
        <Stack.Navigator>
            {/* home - map */}
            <Stack.Screen name="Home" component={HomeScreen} />  
            <Stack.Screen name="Searcher" component={SearcherScreen} /> 
            <Stack.Screen name="Today" component={TodayScreen} />  
            <Stack.Screen 
                name="Device" 
                component={DeviceScreen}
                options={{
                    presentation:"fullScreenModal",
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name="Notifications" 
                component={NotificationsScreen}
                options={{
                    presentation:"fullScreenModal",
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name="Profile" 
                component={ProfileScreen}
                options={{
                    presentation:"fullScreenModal",
                    headerShown:false
                }}
            />
        </Stack.Navigator>
    );
}

export default StackNavigationAdmin;
