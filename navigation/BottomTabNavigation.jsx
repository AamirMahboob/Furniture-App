import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
 import {Home,Search,Profiles} from '../screens'
import {COLORS}  from '../constants/index'
import { Ionicons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {

    const screenOptions = {
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            elevation:0,
            height:60
        }
    }
    return (
        <Tab.Navigator screenOptions={screenOptions} >

            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name={focused ? 'home' : 'home-outline'}
                         size = {24}
                         color = {focused?COLORS.primary:COLORS.gray2}

                        />
                    ),
                }}
            />


            <Tab.Screen name='Search' component={Search}  
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name={"search-sharp"}
                         size = {24}
                         color = {focused?COLORS.primary:COLORS.gray2}

                        />
                    ),
                }}
            />

            <Tab.Screen name='Profile' component={Profiles} options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name={focused ? 'person' : 'person-outline'}
                         size = {24}
                         color = {focused?COLORS.primary:COLORS.gray2}

                        />
                    ),
                }} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation

const styles = StyleSheet.create({})