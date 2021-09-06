import * as React from 'react';
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import LoginScreen from "./screens/LoginScreen";
import LoadingScreen from "./screens/LoadingScreen";
import DashboardScreen from "./screens/DashboardScreen";

import firebase from "firebase";
import { firebaseConfig } from "./config";
import Profile from "./screens/Profile";

import Feed from "./screens/Feed";



if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}


export default class App extends React.Component{
  render(){
return (
    <Profile/>
  )
  }
  
}

const switchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
//LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen
})

const AppContainer = createAppContainer(switchNavigator)