import React from 'react';
import { View } from 'react-native';
import Animated , {useSharedValue , useAnimatedStyle ,withTiming} from 'react-native-reanimated'

function TabAnimation() {

    const tabPosition = useSharedValue(0);
    const AnimatedStyle = useAnimatedStyle(()=>({
        transform: [{translateX: withTiming(tabPosition.value)}]
    }))
  return (
    <>
    <View>

    </View>
    </>
  )
}

export default TabAnimation