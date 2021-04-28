import React, { Component} from 'react';
import { View, Text,TouchableOpacity, StyeSheet, Touchable } from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import firebase from 'firebase';

export default class CostomSideBarMenu extends Component {
    render(){
        return(
            <View style={{flex:1}}>
                <View style={styles.drawerItemsCountainer}>

                <DrawerItems {...this.props}/>
              
                </View>

                <View style={styles.logoutCountainer}>

                <TouchableOpacity style={styles.logoutBotton} 
                 onPress={()=>{
                this.props.navigation.navigate('WelcomeScreen')
                 firebase.auth().signOut()}}>
                
                <Text style={styles.logoutText}> LogOut !</Text>

                </TouchableOpacity>

                </View>
              
            </View>
        );
    }
}

const styles = StyleSheet.create({
    countainer:{
        flex:1
    },
    drawerItemsCountainer:{
        flex:0.8
    },
    logoutCountainer:{
        flex:1,
        justifyContent:'flex-end',
        paddingBottom:20
    },
    logoutBotton:{
        height:30,
        width:'100%',
        justifyContent:'center',
        padding:10,
    },  
    logoutText:{
        fontSize:30,
        fontWeight:"bold"
    },
})