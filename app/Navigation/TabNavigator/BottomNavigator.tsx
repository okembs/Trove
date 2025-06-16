import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar , TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "../RootNavigator";
import Notifications from "../../Notifications/Notifications";
import Order from "../BottomScreen/Order";
import Profile from "../BottomScreen/Profile";
import { Ionicons, AntDesign } from "@expo/vector-icons";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import HomePage from "../../Home/HomePage";
export type BottomNavList = {
  Notification: undefined;
  Cart: undefined;
  Settings: undefined;
  profile: undefined;
  Home: undefined;
};

const Tab = createBottomTabNavigator<BottomNavList>();

type Props = NativeStackScreenProps<RootStackParamList, "Tab">;

const BottomNavigator = () => {
  return (
    <>
      <StatusBar barStyle={"default"} backgroundColor={"black"} />
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            height: 60,
            width: "90%",
            backgroundColor: "white",
            alignSelf: "center",
            borderRadius:90,
            margin:10,
            shadowOpacity: 0,
            paddingTop: 10,
            //marginBottom: 10,
            elevation: 0,
            // borderWidth: 1,
        //    borderTopWidth: 1,
            //  borderRadius: 10,
          //  borderTopColor: "#bbbbbb",
            shadowRadius: 0,
            shadowOffset: {
              width: 0,
              height: 0,
            },
          },
          tabBarShowLabel: false,
          
          tabBarActiveTintColor: "#00b56",
          headerShown: false,
          tabBarLabelStyle: {
            color: "gray",
            fontSize: 12,
            fontFamily: "segoi ui",
          },
          tabBarInactiveTintColor: "gray",
          // tabBarShowLabel: false
        }}
      >
        <Tab.Screen
          name="Notification"
          component={Notifications}
          options={{
            tabBarLabel: "notifications",
            tabBarIcon: ({ focused }) => (
              <View style={[styles.logoView]}>
                <Ionicons
                  name="notifications-outline"
                  color={focused ? "black" : "grey"}
                  size={22}
                  style={styles.logoText}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ focused }) => (
                <View style={[styles.logoView]}>
                  <AntDesign
                    name="home"
                    size={25}
                    style={{ textAlign: "center" }}
                  />
                </View>
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Order}
          options={{
            tabBarLabel: "order",
            tabBarIcon: ({ focused }) => (
              
                <View style={[styles.logoView]}>
                  <Ionicons
                    name="cart-outline"
                    size={22}
                    color={focused ? "black" : "grey"}
                    style={styles.logoText}
                  />
                </View>
              
            ),
          }}
        />
        <Tab.Screen
          name="profile"
          component={Profile}
          options={{
            tabBarLabel: "profile",
            tabBarIcon: ({ focused }) => (
              
                <View style={[styles.logoView]}>
                  <Ionicons
                    name="person-outline"
                    size={22}
                    color={focused ? "black" : "gray"}
                    style={styles.logoText}
                  />
                </View>
            
            ),
          }}
        />
        
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  logoText: {
    color: "black",
    textAlign: "center",
  },
  logoView: {
    height: 40,
    width: 40,
    backgroundColor: "ghostwhite",
    justifyContent: "center",
    borderRadius: 20,
    borderWidth: 0,
  },
});
export default BottomNavigator;
