import React from 'react';
import {
  Image,
} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import BookRequestScreen from '../screens/BookRequestScreen'
import DonatorScreen from '../screens/DonatorScreen'

export const AppTabNavigator = createBottomTabNavigator(
    {
        DonateBooks:{
         screen:DonatorScreen,
         navigationOptions:{
             tabBarIcon:<Image source={require('../assets/Donate.png')}
             style={{width:20,height:20}}/>,
             tabBarLabel:'Donate Book',
         }
        },
        BookRequests:{
            screen:BookRequestScreen,
            navigationOptions:{
                tabBarIcon:<Image source={require('../assets/Donate.png')}
                style={{width:20,height:20}}/>,
                tabBarLabel:'Request Book',
            }
           }
    })

