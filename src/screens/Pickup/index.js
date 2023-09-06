  import React,{ useState, useContext } from 'react';
  import {ImageBackground,Text,Image, View,TouchableOpacity, StatusBar,Pressable } from 'react-native';
  import styles from './styled';
  import { AuthContext } from '../../contexs/auth';
  import { useNavigation } from '@react-navigation/native';
  import { LinearGradient } from 'expo-linear-gradient';

  export default function Pickup() {

    
    const navigation = useNavigation();
    const { user,signOut  } = useContext(AuthContext);
    
  return (
    
        <View style={styles.GeneralsGuie}>
         

        <StatusBar
          animated={true}
          backgroundColor="#000"/>

          

      <View style={styles.container}>
          <View style={{width:"100%",height:"100%", position:'absolute',zIndex:0}}>
         
          </View>
          <View style={{width:"100%",height:"100%", position:'absolute',zIndex:1,justifyContent:'center'}}>
          <LinearGradient
            colors={['#262626:rgba(0,0,0,0.5)','#181818']}
            style={styles.linearGradientbn}
            start={{ x: 1.0, y: 0.6 }}
            end={{ x: 1.0, y: 1.0 }}
          >
          <Text style={styles.textbanner}>Olá, {user && user.nome}</Text>
          <TouchableOpacity onPress={signOut}><Text>Sair</Text></TouchableOpacity>
          </LinearGradient>
          </View>
        

         
        
      </View>
      
      <View style={styles.containertow}>
                      <TouchableOpacity style={styles.viewbtn} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.ChoeceText}>Guincho e Oficinas </Text>
                      </TouchableOpacity>
      
    </View>   
    </View>
    
    );
  }