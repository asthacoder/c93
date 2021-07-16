import * as React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import LoginScreen from "./screens/LoginScreen";
import LoadingScreen from "./screens/LoadingScreen";
import LogoutScreen from "./screens/LogoutScreen";
import HomeScreen from "./screens/HomeScreen";

import * as firebase from "firebase";
import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const AppSwitchNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
   LoginScreen: LoginScreen,
  LoadingScreen: LoadingScreen,
   
  LogoutScreen:  LogoutScreen
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default function App() {
  return <AppNavigator/>;
}