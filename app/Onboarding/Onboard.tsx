import React , {useCallback, useRef , useState} from 'react';
import {View , Text , TouchableOpacity , FlatList , StyleSheet, StatusBar} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import { useWindowDimensions } from 'react-native';
import { Image } from 'react-native';
import Noti from '../../assets/images/Noti.png';
import Notified from '../../assets/images/Notifed.png';
import Delivery from '../../assets/images/delivery.png.png'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Data } from './OnboardingItems';
import Animated , {useAnimatedRef, useAnimatedScrollHandler, useSharedValue} from 'react-native-reanimated';
import OnboardingItems from './OnboardingItems';





function OnboardScreen(){

  const{width , height} = useWindowDimensions()

  const Pagination = () =>{
  
  return(
    <>
    <View style={styles.paginatorContainer}>
      {
        Data.map((_ , i )=>(
          <View style={[styles.paginDot , {backgroundColor: currentImg === i ? 'blue' : 'ghostwhite'}]} key={i}>

            </View>
        ))
      }
    </View>
    </>
  )
}

  const[currentImg , setCurrentImg] = useState(0);
  const FlatRef:any = useRef(null)

  const handlePagination = (event:any) =>{
    const index = Math.round(event.nativeEvent.contentOffset.x /event.nativeEvent.layoutMeasurement.width)
    setCurrentImg(index)
    
  }

  let contentOffset;
  let index;
  
  const handleNext = () =>{
    if(currentImg  < Data.length - 1){
      FlatRef.scrollToIndex({index:currentImg + 1})
    }else{
      FlatRef.scrollToIndex({index:currentImg - 1})
    }
  }
  
  return (
    <>
    <StatusBar/>
    <SafeAreaView style={styles.container}>
      
      <FlatList 
      data={Data}
      renderItem={({item})=><OnboardingItems title={item} />}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      bounces={false}
      contentContainerStyle={styles.listContainerStyle}
      onMomentumScrollEnd={(event)=>{
        contentOffset = event.nativeEvent.contentOffset.x
        index = Math.round(contentOffset/width)
        setCurrentImg(index)
      }}
      
      />
      {/*
      <Pagination />
      */}
      
    </SafeAreaView>
    
    </>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1 ,
   // marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'white',
    padding:5,

  },
  container2:{
    padding:10,
    flex:1
  },
  paginatorContainer:{
    width:10,
    height:10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'red'
  },
  paginDot:{
    height:10,
    width:10,
    borderRadius:5

  },
  listContainerStyle:{
    paddingHorizontal:2
  }
})


export default OnboardScreen;