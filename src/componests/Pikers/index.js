import React, { Component } from 'react';
import { View,Text, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';



export default (props) => {
    
  const navigation = useNavigation();

  return (
   
         <TouchableOpacity
         style={{width:150,height:45, backgroundColor:"#000"}} 
         onPress={() => navigation.navigate('Home')}>
          
         </TouchableOpacity>
   );
 }