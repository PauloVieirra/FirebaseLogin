import React, {useContext, useEffect} from 'react';
import { Image, View,TouchableOpacity, SafeAreaView } from 'react-native';
import styles from './styled';
import firebase from '../../services/firebaseConnection';
import { useNavigation } from '@react-navigation/native';
import {AuthContext} from '../../contexs/auth';
import { useState } from 'react/cjs/react.development';

export default function Pickup() {
  const [usetipo, setUsetipo] = useState ();
  const {user} = useContext(AuthContext);
  const uid = user && user.uid;

  const navigation = useNavigation();
  const handleNavi = () => {
    alert('Ops, essa funcionalidade ainda não esta disponível');
}

useEffect(()=>{
   async function load(){
    await firebase.database().ref('users').child(uid).on('value', (snapshot)=>{
      setUsetipo(snapshot.val().usetipo);
      console.log(usetipo);
    });
  }
  load();
},[]);



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

    <TouchableOpacity onPress={handleNavi} >
      <Image source={require('../../assets/btnmecanico.png')} 
      style={styles.OpcaoWhash}/>
    </TouchableOpacity>

      {usetipo && 
    <TouchableOpacity  onPress={() => navigation.navigate('CenterAdm')}>
      <Image source={require('../../assets/parceiros.png')} 
      style={styles.OpcaoWhash}/>
    </TouchableOpacity>}


      </View>
   </SafeAreaView>
  
  
  );
}