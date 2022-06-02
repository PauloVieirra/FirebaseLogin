import React, {useContext, useRef, useState} from 'react';
import { View, Text, Image ,StyleSheet, TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

import { AuthContext } from '../contexs/auth';

export default function components() {

    const { user,signOut, opencad} = useContext(AuthContext);

 return (
     <View style={styles.container}>
     <LinearGradient
          colors={['#FBB040', '#F7893C', '#F04E37' ]}
          style={styles.linearGradient}
          start={{ x: 1.2, y: 0.5 }}
          end={{ x: 0.5, y: 1.8 }}
        >
    
     <View style={styles.contup}>
    

     <View style={styles.imgpiker}>
        <Image style={styles.img} source={require('../../assets/iconapp.png')} />
     </View>
     
     <View style={styles.continfo}>

     <Text style={{fontSize:18, fontWeight:'bold'}}>{user && user.nome}</Text>
      <Text style={{fontSize:12, fontWeight:'bold'}}>{user && user.email}</Text>
      <Text style={{fontSize:12}}> {user && user.telefone}</Text>
      <Text style={{fontSize:12}}> {user && user.rg}</Text>
     </View>

      </View>

       <View style={styles.contdown}> 

       <View style={styles.continfot}>

       <View style={styles.continfoua}>
       <Text style={{fontSize:12}}>{user && user.veiculo}</Text>
       <Text style={{fontSize:12}}>{user && user.ano}</Text>
       <TouchableOpacity style={styles.btnSair} onPress={signOut}>
        <Text style={{color:"#fff",alignItems:'center',justifyContent:'center'}}>Sair</Text>
        </TouchableOpacity>
       </View>

       <View style={styles.continfou}>
       <Text style={{fontSize:12}}>Cor: {user && user.cor}</Text>
       <Text style={{fontSize:12}}>Modelo: {user && user.modelo}</Text>
       <Text style={{fontSize:12}}>Revisão: {user && user.revisao}</Text>
       <Text style={{fontSize:12}}>Selo: {user && user.selo}</Text>
       </View>

       <View style={styles.continfou}>
       <Text style={{fontSize:12}}>Rastreável: {user && user.gps}</Text>
       <Text style={{fontSize:12}}>Tipo: {user && user.tipo}</Text>
      
       </View>


       </View>
       </View>
       </LinearGradient>
     </View>
  );
}

const styles = StyleSheet.create({
    container:{
        width:"96%",
        height:"94%",
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        marginBottom:"2%"
    },
    contup:{
      flexDirection:'row',
      width:"100%",
      height:"50%",
      padding:10,
      zIndex:0
    },
    contdown:{
        alignItems:'center',
        justifyContent:'flex-end',
        marginBottom:"3%",
        width:"100%",
        height:"35%",
        zIndex:1
      },
      continfo:{
        alignItems:'flex-start',
        marginLeft:20,
        padding:6,
        flex:1
      },
      continfot:{
        width:'90%',
        height:'100%',
        flexDirection:'row',
        alignItems:'flex-start',
      },
      continfoua:{
        width:"20%",
        height:"100%",
      },
      continfou:{
        flex:1
      },
    imgpiker:{
        borderWidth:1,
        borderColor:"#220022",
        marginLeft:20,
        width:70,
        height:70,
        borderRadius:35,
        backgroundColor:"#fff",
        zIndex:2
    },
    btnSair:{
      width:50, 
      height:30, 
      borderWidth:2, 
      borderColor:"#fff",
      marginTop:12,
      justifyContent:'center',
      backgroundColor:"#000",
      alignItems:'center',

      borderRadius:8,
    },

    img:{
        width:"100%",
        height:"100%"
    },
    linearGradient: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      height: 200,
      width: 350,
    },
});