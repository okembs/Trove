import React from 'react';
import {Text , View, StyleSheet} from  'react-native'
import { RootStackParamList } from './RootNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { Pressable } from 'react-native';


type Props = NativeStackScreenProps<RootStackParamList , 'Info'>
export default function Info({navigation ,route}: Props){
    return(
      <View style={styles.container}>
        <Pressable> click </Pressable>
      </View>  
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width:'100%',
        padding: 10 , 
    },
    buttonStyle: {
        height:10
    }
})
