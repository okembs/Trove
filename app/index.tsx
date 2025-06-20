import { StyleSheet , StatusBar , View , Text  } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  NavigationContainer,
} from "@react-navigation/native";
import RootNavigator from "./Navigation/RootNavigator";

export default function Page(){
  return(
    <>
    <StatusBar />
     <RootNavigator />
 
  
     </>
  )
}


