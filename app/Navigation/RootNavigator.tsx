import React from "react";
import { createStackNavigator  } from "@react-navigation/stack";
import Home from "../Screens/Home";
import Profile from "./Info";
import Login from "../Screens/Login";
import SignIn from "../Screens/SignIn";
import BottomNavigator from "./TabNavigator/BottomNavigator";
import OnboardScreen from "../Onboarding/Onboard";
import {  StatusBar } from "react-native";
export type RootStackParamList = {
  Home: undefined;
  Info: undefined;
  Login: undefined;
  SignIn: undefined;
  Tab: undefined;
  Onboarding:undefined
};


const headerStyle: any = {
  headerTitle: "",
  headerTransparent: true,
  headerStyleV: {
    shadowOpacity: 10,
    elevation: 10,
    padding: 10,
    height: 40,
    color: "ghostwhite",
  },
  headerPadding: {
    paddingLeft: 16,
  },
};

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator(){
  return(
    <>
    <Stack.Navigator initialRouteName="Onboarding">
       <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "",
            headerTransparent: headerStyle.headerTransparent,
            headerStyle: headerStyle.headerStyleV,
            headerTitle: headerStyle.headerStyleV,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Info"
          component={Profile}
          options={{ title: "profile" }}
        />
        <Stack.Screen
        name="Onboarding"
        component={OnboardScreen}
        options={{
          headerShown: false
        }}
         />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "",
            headerTransparent: headerStyle.headerTransparent,
            headerStyle: { elevation: 0 },
            headerTitle: headerStyle.headerStyleV,
            headerBackButtonDisplayMode: "minimal",
            headerShown: true,
            headerTintColor: "black",
            headerLeftContainerStyle: {
              padding: 0,
              marginBottom: 30,
            },
          }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            headerShown: true,
            headerTintColor: "black",
            headerTitle: "",
            headerStyle: {
              elevation: 0,
              backgroundColor: "ghostwhite",
            },
            headerLeftContainerStyle: {
              padding: 0,
              height: 50,
            },
          }}
        />
        <Stack.Screen
          name="Tab"
          component={BottomNavigator}
          options={{
            headerShown: false,
            headerTitle: "",
            headerStyle: {
              elevation: 0,
            },
          }}
        />
    </Stack.Navigator>
    
    </>
  )
}

export default RootNavigator;