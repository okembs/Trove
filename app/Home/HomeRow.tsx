import React from 'react';
import { View , Text , StyleSheet , Pressable} from 'react-native';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app/Navigation/RootNavigator";


type Props = NativeStackScreenProps<RootStackParamList , 'Notifications'>
function HomeRow() {
   
    const navigation = useNavigation()
  return (
    <>
    <View style={styles.container}>
        <Pressable style={styles.button}
        
        >
            <EvilIcons name='search' size={26} color={'black'} />
        </Pressable>
        <Pressable style={styles.button}
        onPress={()=> navigation.canGoBack()}
        >
            <Ionicons name='notifications-outline' size={20} color={'black'} />

        </Pressable>
    </View>
    </>
  )
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        width: '40%',
        padding:5,
      //  backgroundColor: 'grey',
        justifyContent: 'space-around'
    },
    button:{
        alignSelf: 'center',
        width:40,
        height:40,
        justifyContent: 'center'
    }
})

export default HomeRow