import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import Splash from '../screens/Splash/Splash';
import MovieDetails from '../screens/MovieDetails/MovieDetails';
import User from '../screens/User/User';
import Search from '../screens/Search/Search';

const Stack = createNativeStackNavigator();


const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Search' screenOptions={{headerShown:false}}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="User" component={User} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="MovieDetails" component={MovieDetails} />
            <Stack.Screen name="Search" component={Search} />

        </Stack.Navigator>
    )
}

export default AppNavigator

const styles = StyleSheet.create({})