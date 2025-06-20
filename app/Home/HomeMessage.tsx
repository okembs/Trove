import React , {useContext , useState} from 'react';
import { Text , View , StyleSheet , ImageBackground , SafeAreaView } from 'react-native';
import { useFonts } from '@expo-google-fonts/inter';
import { Inter_400Regular as Inter400 } from '@expo-google-fonts/inter';
import CoffePng from '../../assets/images/coffe.png'

function HomeMessage() {
    const[loaded] = useFonts({
        Inter400    
    })
    if(!loaded) return null
  return (
    <>
    <SafeAreaView style={styles.container}>
        <ImageBackground source={CoffePng} style={styles.avatarImage} borderRadius={20}  />
        <View style={[styles.messageHeader]}>
        <Text style={[styles.Message , {fontWeight:'thin' , fontSize:12}]}> Welcome Back</Text>
        <Text style={[styles.Message , {fontSize: 17}]}> Paul</Text>
        </View>
    </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        width: '50%',
      //  justifyContent: 'space-between',
      gap:10,
     // backgroundColor: 'red',
      padding:5,
    //    marginTop:5

    },
    avatarImage:{
        height: 50 ,
        width:50,
        borderRadius:20,
        alignItems: 'center',
        
    },
    Message:{
        fontFamily: 'Inter400',
      //  fontSize: 12,
        fontWeight: 'bold',
        color: 'gray',
    //  alignSelf:'center'
    },
    messageHeader:{
        flexDirection: 'column',
        justifyContent: 'flex-start'
        
    }
})
export default HomeMessage