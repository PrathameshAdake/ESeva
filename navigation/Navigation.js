import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import Complaint from '../screens/Complaint';
import Corporator from '../screens/Corporator';
import Events from '../screens/Events';
import Recruitment from '../screens/Recruitment';
import Schemes from '../screens/Schemes';
import Environment from '../screens/Environment';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';
import WomenSection from '../screens/WomenSection';
import Web from '../screens/Web';


const HomeStack = createStackNavigator();

class HomeStackScreen extends React.Component{
    render(){
        return(
            <HomeStack.Navigator screenOptions={{
                headerStyle:{
                    backgroundColor:"#009387"
                },
                headerTintColor:"#fff",
                headerTitleStyle:{
                    fontWeight:"bold"
                }
            }}>
                <HomeStack.Screen name="Home" component={HomeScreen} options={{
                    headerLeft:()=>(
                        <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={()=>this.props.navigation.openDrawer()}/>
                    )
                }}/>
                <HomeStack.Screen name="Complaint" component={Complaint}/>
                <HomeStack.Screen name="Corporator" component={Corporator}/>
                <HomeStack.Screen name="Events" component={Events}/>
                <HomeStack.Screen name="Recruitment" component={Recruitment}/>
                <HomeStack.Screen name="WomenSection" component={WomenSection}/>
                <HomeStack.Screen name="Environment" component={Environment}/>
            </HomeStack.Navigator>
        )
    }
}




const MaterialBottom = createMaterialBottomTabNavigator();

class Bottom extends React.Component{
    render(){
        return(
            <MaterialBottom.Navigator
                initialRouteName="HomeBottom"
                activeColor="#fff"
                shifting={true}
                >

                <MaterialBottom.Screen
                    name="HomeBottom"
                    component={HomeStackScreen}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarColor:"#009387",
                        tabBarIcon: ({ color }) => (
                            <Icon name="ios-home" color={color} size={26} />
                        ),
                    }}
                />
                <MaterialBottom.Screen
                    name="Schemes"
                    component={Schemes}
                    options={{
                        tabBarLabel: 'Schemes',
                        tabBarColor:'#d02869',
                        tabBarIcon: ({ color }) => (
                            <Icon name="ios-paper" color={color} size={26} />
                        ),
                    }}
                />
            </MaterialBottom.Navigator>
        )
    }
}

const DrawerSlider = createDrawerNavigator();

export default class Navigation extends React.Component{
    render(){
        return(
            <NavigationContainer>
                <DrawerSlider.Navigator>
                    <DrawerSlider.Screen name="Home" component={Bottom}/>
                    <DrawerSlider.Screen name="Web" component={Web} />
                </DrawerSlider.Navigator>
            </NavigationContainer>
        );
    }
}