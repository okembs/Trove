import React from 'react';
import { View , Text , StyleSheet} from 'react-native';
import HomeMessage from './HomeMessage';
import HomeRow from './HomeRow';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import RootNavigator, { RootStackParamList } from "@/app/Navigation/RootNavigator";


function HomeHeader() {

  return (
    <>
    <View style={styles.container}>
    <HomeMessage />
    <HomeRow  />
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default HomeHeader