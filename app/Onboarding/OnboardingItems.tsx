import React, { useEffect } from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Noti from "../../assets/images/Noti.png";
import Notified from "../../assets/images/Notifed.png";
import Delivery from "../../assets/images/delivery.png.png";
import { useWindowDimensions } from "react-native";
import { Inter_400Regular as Inter } from "@expo-google-fonts/inter";
import { useFonts } from "expo-font";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

interface Item {
  title: any;
}

export const Data: any[] = [
  {
    id: 1,
    title: "welcome to trove your campus marketplace",
    text: "buy , sell and trade with students just like you .No middlemnan ,no hassle",
    image: Noti,
  },
  {
    id: 2,
    title: "notification in real time",
    text: "recieve notification of orders placed in real time , less stress",
    image: Notified,
  },
  {
    id: 3,
    title: "delivery",
    text: "students to students Delivery : Faster , cheaper , safer",
    image: Delivery,
  },
];

function OnboardingItems({ title }: Item) {
  const { width, height } = useWindowDimensions();

  const duration:number = 10;
  const easing = Easing.bezier(0.25 , -0.5, 0.25 , 1)

  const sv = useSharedValue<number>(0);

  useEffect(()=>{
    sv.value = withRepeat(withTiming(1 , {duration , easing}) , -1)
  },[])


    const animatedStyle = useAnimatedStyle(()=>({
      transform: [{rotate: `${sv.value * 360 } deg`}]
    }))
 

  const [fontLoaded] = useFonts({
    Inter,
  });
  return (
    
      <View style={[styles.container, { width:width, height: height }]}>
        <Image
          source={title.image}
          style={[styles.imageStyle, { width: width / 1.2 }]}
        />
          <Text style={styles.Texttitle}> {title.title} </Text>
          <Text style={styles.TextWord}>
            {title.text}
          </Text>
      </View>
    
  );
}

const styles = StyleSheet.create({
  Texttitle: {
    fontFamily: "Inter",
    fontWeight: "bold",
    fontSize:18,
    width:'90%',
    textAlign:'center',
    alignItems: 'center',
    color:  "black"
    
   // letterSpacing:1
  },
  TextWord: {
    fontFamily: "Inter",
    padding:20,
    textAlign: 'center',
    width: '90%',
    color: 'dimgrey'

  },
  container: {
    //  paddingVertical:10,
    // paddingHorizontal: 100,
    borderRadius: 10,
    marginHorizontal:5,
    marginVertical: 10,
    // rowGap:90,
 //   backgroundColor: "#bbbbbb",
    justifyContent: "flex-start",
    gap:10,

    // flex:1,
    padding: 10,
  //  paddingRight: 50,
  },
  imageStyle: {
    height: 400,
    resizeMode: "contain",
    alignSelf: "center",
    marginRight:30,
    
  },
  horizontalCard: {
    flex: 1,
    backgroundColor: "ghostwhite",
    width: "100%",
    justifyContent: "flex-start",
    padding: 10,
    height: "50%",
  },
  button:{
    paddingHorizontal:20,
    paddingVertical:20,
    backgroundColor:  "#1652f0",
  }
});
export default OnboardingItems;
