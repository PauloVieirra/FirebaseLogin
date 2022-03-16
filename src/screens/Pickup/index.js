import React, {useContext, useEffect} from 'react';
import { Image, View,TouchableOpacity, SafeAreaView} from 'react-native';
import styles from './styled';
import firebase from '../../services/firebaseConnection';
import { useNavigation } from '@react-navigation/native';
import {AuthContext} from '../../contexs/auth';
import { useState } from 'react/cjs/react.development';
import PikerGuincho from '../../componests/Markers/PikerGuincho';
import Pikerpecas from '../../componests/Markers/PikerPecas';
import PikerLavagem from '../../componests/Markers/PikerLavagem';
import PikerMecanico from '../../componests/Markers/PikerMecanico';



export default function Pickup() {
  const [usetipo, setUsetipo] = useState ();
  const {user} = useContext(AuthContext);
  const uid = user && user.uid;
  const navigation = useNavigation();
  

useEffect(()=>{
   async function load(){
    firebase.database().ref('users').child(uid).on('value', (snapshot) => {
       setUsetipo(snapshot.val().usetipo);
     });
  }
  load();
},[]);

 return (
      <SafeAreaView style={{alignItems:'center',marginTop:60}}>

          
         
      <View style={styles.containertow}>
       
        <PikerGuincho/>
      
        <Pikerpecas/>

        <PikerLavagem/>

        <PikerMecanico/>

       
        {usetipo && 
      <TouchableOpacity  onPress={() => navigation.navigate('CenterAdm')}>
        <Image source={require('../../assets/parceiros.png')} 
        style={styles.OpcaoWhash}/>
      </TouchableOpacity>}

      </View>

     
   </SafeAreaView>
  
  
  );
}