import React from 'react';
import {  createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import {CostomSideBarMenu}from './CostomSideBarMenu';


export const AppDrawerNavigator=createDrawerNavigator(
    {
    Home:{
     screen:AppTabNavigator
    },
    },
    {
    contentComponent:CostomSideBarMenu    
    },
    {
    initialRootName:'Home'
    }
    )
