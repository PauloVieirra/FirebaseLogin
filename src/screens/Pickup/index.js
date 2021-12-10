import React from 'react';
import { Image, View, Dimensions,TouchableOpacity, SafeAreaView } from 'react-native';
import styles from './styled';
import { useNavigation } from '@react-navigation/native';

export default function Pickup() {
  const navigation = useNavigation();
  const handleNavi = () => {
    alert('Ops, essa funcionalidade ainda não esta disponível');
}

 return (
      <SafeAreaView>
        <View style={styles.container}></View>
        <View style={styles.containertow}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}> 
        <Image source={require('../../assets/bannergui.png')} 
        style={styles.OpcaoSos}/>
        </TouchableOpacity>
      
    <TouchableOpacity onPress={handleNavi} >
      <Image source={require('../../assets/OpcapMarkert.png')} 
      style={styles.OpcaoMarketPlace}/>
    </TouchableOpacity>

    <TouchableOpacity onPress={handleNavi} >
      <Image source={require('../../assets/Opwhassh.png')} 
      style={styles.OpcaoWhash}/>
    </TouchableOpacity>
      </View>
   </SafeAreaView>
  
  
  );
}