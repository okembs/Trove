import React , {useState} from 'react';
import {View , Text , StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app/Navigation/RootNavigator";

type Props = NativeStackScreenProps<RootStackParamList, 'Notifications' >
export default function Notifications() {
  const[loaded] = useFonts({

  })
  return (
    <>
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.txt}> welcome to the notification </Text>
      </View>
    </View>
    </>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor: 'white'

    },
    container2:{
      flex: .5,
      backgroundColor: 'ghostwhite',
      padding:20

    },
    txt:{
      textAlign: 'center'
    }
})