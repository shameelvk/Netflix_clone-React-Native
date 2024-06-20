import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import Splash from '../screens/Splash/Splash';
import MovieDetails from '../screens/MovieDetails/MovieDetails';
import User from '../screens/User/User';
import Search from '../screens/Search/Search';
import ComingSoon from '../screens/ComingSoon/ComingSoon';
import Download from '../screens/Download/Download';
import More from '../screens/More/More';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();


const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown:false}}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="User" component={User} />
            <Stack.Screen name="MovieDetails" component={MovieDetails} />
            <Stack.Screen name="BottomTab" component={BottomTabNavigator} />




        </Stack.Navigator>
    )
}

export default AppNavigator

const styles = StyleSheet.create({})