import React, {useContext, useRef, useState} from 'react';
import { View, Text, Image ,StyleSheet, TouchableOpacity } from 'react-native';
import { AuthContext } from '../contexs/auth';

export default function components() {
    const { user,sigUp} = useContext(AuthContext);

 return (
     <View style={styles.container}>

     <View style={styles.imgpiker}>
        <Image
        style={styles.img}
        source={require('../../assets/iconapp.png')}
        />
     </View>

     <View style={styles.contup}>
       
       </View>

       <View style={styles.contdown}> 
           <Text style={{fontSize:18, fontWeight:'bold'}}> {user && user.nome}</Text>
           <Text>{user && user.email}</Text>
       </View>
     </View>
  );
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"100%",
        justifyContent:'center',
        alignItems:'center'
    },
    contup:{
      width:"100%",
      height:"50%",
      backgroundColor:"#000",
      zIndex:0
    },
    contdown:{
        alignItems:'center',
        justifyContent:'flex-end',
        marginBottom:"8%",
        width:"100%",
        height:"42%",
        zIndex:1
      },
    imgpiker:{
        borderWidth:1,
        borderColor:"#220022",
       position:'absolute',bottom:85,
        width:118,
        height:118,
        borderRadius:60,
        backgroundColor:"#eee",
        zIndex:2
    },

    img:{
        width:"100%",
        height:"100%"
    },
});