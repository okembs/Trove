import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CardStyleInterpolators } from "@react-navigation/stack";
import Home from "../Screens/Home/Home";
import Profile from "./Info";
import Login from "../Screens/Login/Login";
import SignIn from "../Screens/singup/SignIn";
import BottomNavigator from "./TabNavigator/BottomNavigator";
import OnboardScreen from "../Onboarding/Onboard";
import { StatusBar } from "react-native";
import Notifications from "../Notifications/Notifications";
export type RootStackParamList = {
  Home: undefined;
  Info: undefined;
  Login: undefined;
  SignIn: undefined;
  Tab: undefined;
  Onboarding: undefined;
  Otp: undefined;
  Notifications:undefined;
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

const config:any = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
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
            headerShown: false,
            transitionSpec:{
              close:config,
              open:config
            }
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
             // backgroundColor: "white",
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
              backgroundColor:'transparent'
            },
            cardStyleInterpolator:CardStyleInterpolators.forFadeFromBottomAndroid
          }}
        />
         <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{ title: "notifications" }}
        />
      
      </Stack.Navigator>
    </>
  );
}

export default RootNavigator;
