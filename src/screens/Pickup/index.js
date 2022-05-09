import React, { useContext, useState } from 'react';
import {ImageBackground,Text, View,TouchableOpacity, SafeAreaView } from 'react-native';
import styles from './styled';
import { AuthContext } from '../../contexs/auth';
import { useNavigation } from '@react-navigation/native';
import Card from '../../components/Card';

const imgGuinch = require('../../assets/Bannergui.png');
const imgMarket = require('../../assets/Markert.png');
const imgWash = require('../../assets/Whassh.png');
const imgBrother = require('../../assets/Amigo.png');
const imgManner = require('../../assets/gestao.png');

export default function Pickup() {

  
  const { user,signOut,signIn } = useContext(AuthContext);
  const navigation = useNavigation();
  const handleNavi = () => {alert('Ops, essa funcionalidade ainda não esta disponível');}
  

 return (
      <SafeAreaView>

    <View style={styles.container}>

          <Card/>

    </View>
    
    <View style={styles.containertow}>
           
          <TouchableOpacity style={styles.Toucheblle} onPress={() => navigation.navigate('Home')}>
          <ImageBackground source={imgGuinch} resizeMode="cover" style={styles.Choece}>
           <Text style={styles.ChoeceText}numberOfLines={2}>Guincho e Oficinas</Text>
           </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Motorista')}>
          <ImageBackground source={imgBrother} resizeMode="cover" style={styles.Choece}>
            <Text style={styles.ChoeceText}>Motorista da vez</Text>
          </ImageBackground>
          </TouchableOpacity>
      
          

        
          <TouchableOpacity onPress={handleNavi} >
          <ImageBackground source={imgWash} resizeMode="cover" style={styles.Choece}>
            <Text style={styles.ChoeceText}>Limpeza Geral</Text>
          </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> navigation.navigate('Gestao')}>
          <ImageBackground source={imgManner} resizeMode="cover" style={styles.Choece}>
              <Text style={styles.ChoeceText}>Gestão</Text>
          </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity style={{width:80, height:25}} >
        <Text>Detalhes</Text>
        </TouchableOpacity>

          </View>
  
   </SafeAreaView>
  
  );
}