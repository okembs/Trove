import React  from 'react';
import { useRef } from 'react';
import { View , StatusBar , TouchableOpacity , StyleSheet  } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet'

function HomePage() {
  return (
    <>
    <StatusBar barStyle={'default'} />
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <FontAwesome6 name='add' size={24} color={'white'} style={styles.logo} />
      </TouchableOpacity>
    </View>
    </>  
    
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'white'
  },
  button:{
    position: 'absolute',
    height: 60,
    width:60,
    borderRadius:40,
    backgroundColor: '#1e90ff',
    bottom:15,
    right:20,
    justifyContent:'center'
  },
  logo:{
    textAlign: 'center'
  }
})


export default HomePage