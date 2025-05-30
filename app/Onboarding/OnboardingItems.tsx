import React  from 'react'
import { Image , View , Text , StyleSheet  } from 'react-native';
import Noti from '../../assets/images/Noti.png';
import Notified from '../../assets/images/Notifed.png';
import Delivery from '../../assets/images/delivery.png.png'
import { useWindowDimensions } from 'react-native';
import { Inter_400Regular as Inter } from "@expo-google-fonts/inter";
import { useFonts } from 'expo-font';

interface Item  {
    title:any;

  
}




  export const Data : any[] = [
    {
      id:1 , 
      title: 'welcome to trove your campus marketplace',
      text: 'buy , sell and trade with students just like you .No middlemnan ,no hassle',
      image:Noti
    },
    {
      id:2 ,
      title: 'notification in real time',
      text: 'recieve notification of orders placed in real time , less stress' ,
      image: Notified
    },
    {
      id:3,
      title: 'delivery',
      text: 'students to students Delivery : Faster , cheaper , safer',
      image:Delivery
    }
  ]; 

  

function OnboardingItems({title} : Item) {
    const{width , height} = useWindowDimensions();

    const[fontLoaded] = useFonts({
        Inter
    })
  return (
    <>
    <View style={[styles.container , {width:width , height:height}]}>
      <Text> hello guy s</Text>
      <Image source={title.image}  style={styles.imageStyle} />
    </View>
    </>
  )
}


const styles = StyleSheet.create({
    Texttitle:{
        fontFamily: 'Inter' ,
        fontWeight: 'bold'   
    },
    TextWord:{
        fontFamily: 'Inter'
    },
    container:{
   //  paddingVertical:10,
    // paddingHorizontal: 100,
      borderRadius:10,
  //    marginHorizontal:20,
     marginVertical:10,
   // rowGap:90,
      backgroundColor: '#bbbbbb',
      justifyContent: 'center',
      
     // flex:1,
     padding:10,
    },
    imageStyle:{
    height:600,
    width:500,
    resizeMode: 'cover',
    alignSelf:'center'
    }
})
export default OnboardingItems