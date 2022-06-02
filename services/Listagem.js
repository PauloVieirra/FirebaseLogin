import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';




export default function Listagem({data}){
 return (
   <View 
   style={{
     width:"100%",
     height:120, 
     padding:5,
     backgroundColor:"#fff",
      marginTop:10, 
      flexDirection:'row', 
      borderWidth:1,
      borderColor:"#787257",
      borderRadius:8}}>
      
       <View 
       style={{
         width:"25%", 
         height:80, 
         borderRadius:22, 
         backgroundColor:"#eee"}}>
      
       </View>
       <View 
       style={{
         width:"73%",
         height:80,
         justifyContent:'center',
         marginLeft:5,
         padding:5,
          
         borderRadius:25, 
         }}>
         <Text style={{fontSize:18, fontWeight:'bold'}}>{data.nome}</Text>
         <Text style={{fontSize:18}}>{data.cidade}  {data.telefone}</Text>

         <TouchableOpacity 
         style={{
           width:80, 
           height:25, 
           borderRadius:8,
           backgroundColor:"#fff",
           justifyContent:'center',
           alignItems:'center',
           borderWidth:1,
           borderColor:"##787257"}}>
              <Text>Ver Mais</Text>
           </TouchableOpacity>

       </View>
       
   </View>
  );
}