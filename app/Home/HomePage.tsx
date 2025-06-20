import React, { useCallback, useMemo } from "react";
import { useRef } from "react";
import {
  View,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, {
  BottomSheetScrollView,
  useBottomSheetSpringConfigs,
  BottomSheetBackdrop
} from "@gorhom/bottom-sheet";
import { Inter_100Thin as Inter } from "@expo-google-fonts/inter";
import { useFonts } from "expo-font";
import { Easing } from "react-native-reanimated";
import HomeHeader from "./HomeHeader";
import { SafeAreaView } from "react-native";
function HomePage() {
  const bottomSheetref = useRef<BottomSheet>(null);

  const[Loaded] = useFonts({
    Inter
  })

  if(!Loaded) return null 

  const animationConfigs = useBottomSheetSpringConfigs({
    damping: 80,
    overshootClamping: true,
    restDisplacementThreshold: 0.1,
    restSpeedThreshold: 0.1,
    stiffness: 510,
    duration: 10,
  
  });

  const snapPoints = useMemo(() => [ "25%", "50%" , "75%" ,"90%"], []);

  const handleSheetChange = useCallback((index:any)=>{
    console.log('handleChange' , index)
  },[])
  // call back for the hanldesheet changes
  const handleSnapPress = useCallback((index: any) => {
    bottomSheetref.current?.snapToIndex(index);
  }, []);

  const handleClosePress = useCallback(() => {
    bottomSheetref.current?.close();
  }, []);


  const renderBackDrops = useCallback((props:any)=>(
    <BottomSheetBackdrop
    {...props}
    disappearsOnIndex={0}
    appearsOnIndex={2}

    />

    
  ),[])
  

  const data: any[] = [
    {
      id: 1,
      name: "japa man",
    },
    {
      id: 2,
      name: "milo boy",
    },
    {
      id: 3,
      name: "trove man",
    },
    {
      id: 4,
      name: "medlink",
    },
  ];

  return (
    <>
      <GestureHandlerRootView style={styles.container}>
        <SafeAreaView style={styles.container2}>

          <HomeHeader />

        <BottomSheet
          ref={bottomSheetref}
          animationConfigs={animationConfigs}
          enableDynamicSizing={false}
          index={-1}
          snapPoints={snapPoints}
          onChange={handleSheetChange}
          backdropComponent={renderBackDrops}
          enablePanDownToClose={true}
          onClose={()=> handleClosePress()}
       
        
        >
          <Text style={[styles.sheetHeaderText]}> commen sava</Text>
          <BottomSheetScrollView style={styles.contentContainer}>
            <Text style={[styles.logo]}> hello how are you doing </Text>
          </BottomSheetScrollView>
        </BottomSheet>

        <TouchableOpacity
          style={styles.button}
          onPress={()=> handleSnapPress(1)}
         
       
        >
          <FontAwesome6
            name="add"
            size={24}
            color={"white"}
            style={styles.logo}
          />
        </TouchableOpacity>
        </SafeAreaView>
        </GestureHandlerRootView>
   
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  //  backgroundColor: "white",
  //  paddingTop: 20,
    backgroundColor: 'ghostwhite'
  },
  container2:{
    flex:1 ,
    backgroundColor: 'coldwhite',
    padding:10,
    paddingTop:20
  },
  button: {
    position: "absolute",
    height: 60,
    width: 60,
    borderRadius: 40,
    backgroundColor: "#1652f0",
    bottom: 15,
    right: 20,
    justifyContent: "center",
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowColor: "grey",
    elevation: 5,
  },
  logo: {
    textAlign: "center",
    fontFamily: 'Inter',
    fontWeight: 'bold',

  },
  contentContainer: {
    flex: 1,
    padding: 20,
  //  alignItems: "center",
 // backgroundColor: 'ghostwhite'


  },
 
  sheetHeaderText:{
    fontFamily: 'Inter',
    fontWeight: 'bold',
    justifyContent: 'center',
    letterSpacing:0.2,
    textAlign: 'center'
  },
  sheetHandleStyle:{
    
  }
});

export default HomePage;
