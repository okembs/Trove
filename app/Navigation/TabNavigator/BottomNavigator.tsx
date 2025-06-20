import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "../RootNavigator";
import Notifications from "../../Notifications/Notifications";
import Order from "../BottomScreen/Order";
import Profile from "../BottomScreen/Profile";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { Easing } from "react-native-reanimated";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Chat from "../../Chat/Chat";
import HomePage from "../../Home/HomePage";
export type BottomNavList = {

  Cart: undefined;
  Settings: undefined;
  profile: undefined;
  Home: undefined;
  Chat: undefined;
};

const Tab = createBottomTabNavigator<BottomNavList>();

type Props = NativeStackScreenProps<RootStackParamList, "Tab">;

const BottomNavigator = () => {
  return (
    <>
      <StatusBar barStyle={"default"} backgroundColor={"black"} />
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarStyle: {
            height: 60,
            width: "90%",
            backgroundColor: "white",
            alignSelf: "center",
            borderRadius: 90,
            margin: 10,
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
          // for the animation
          transitionSpec: {
            animation: "timing",
            config: {
              duration: 150,
              easing: Easing.inOut(Easing.ease),
            },
          },
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
          name="Chat"
          component={Chat}
          options={{
            tabBarLabel: "notifications",
            tabBarIcon: ({ focused }) => (
              <View
                style={[
                  styles.logoView,
                  { backgroundColor: focused ? "#1652f0" : "ghostwhite" },
                ]}
              >
                <Ionicons
                  name="chatbubble-outline"
                  color={focused ? "white" : "black"}
                  size={22}
                  style={[
                    styles.logoText,
                    { color: focused ? "white" : "black" },
                  ]}
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
              <View
                style={[
                  styles.logoView,
                  { backgroundColor: focused ? "#1652f0" : "ghostwhite" },
                ]}
              >
                <AntDesign
                  name="home"
                  size={25}
                  color={focused ? "white" : "black"}
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
