import React, { useState , useRef , useCallback } from "react";
import { View, Text, StyleSheet, Pressable , StatusBar } from "react-native";
import {  SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../../Navigation/RootNavigator";
import {NativeStackScreenProps} from '@react-navigation/native-stack';



type Props = NativeStackScreenProps<RootStackParamList , 'Home'>
export default  function Home({navigation} : Props) {
  const [nameK, setNameK] = useState<string>("");
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Pressable onPress={()=> navigation.navigate('Login')} style={styles.btnStyle}> 
        <Text style={styles.text}> hello guys see ya </Text>
      </Pressable>
    </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container : {
    height: '100%',
    width: '100%',
    padding:4,
    flex:1,
    margin:10,
    alignItems: 'flex-start'

  },
  container2: {
    padding:2
  },
  text: {
    color: 'white',
    textAlign: 'center'
  },
  btnStyle: {
  height: 40 , 
  width: '80%',
  padding:2 ,
  backgroundColor: 'red',
  justifyContent: 'center',
  borderWidth: 1 , 
  borderColor: 'red',
  borderRadius: 5
  }
  
});
