import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

export default function Splash() {
    const navigation = useNavigation();
 return (
     <View style={{flex:1 ,backgroundColor:"#E0441F"}}>
         <LottieView source={require('../../assets/ddixx.json')} 
    autoPlay 
    loop={false}
    onAnimationFinish={() => navigation.navigate('SignIn')}
    />
    </View>
  );
}