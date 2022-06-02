import React from 'react';
import { View, Text } from 'react-native';
import styles from './styed';
import { Ionicons, Fontisto,MaterialIcons } from '@expo/vector-icons';


export default function Recovery() {
 return (

   <View style={styles.container}>
     
    <Text style={{color:"#fff", fontSize:18}}>Centro de recuperação de contas</Text>
    <View style={styles.contgeral}>

      <View style={styles.controw}>
        <View style={styles.contone}>
        <MaterialIcons name="email" size={24} color="black" />
        </View>
        <View style={styles.contthow}></View>
      </View>
      
      <View style={styles.controw}>
        <View style={styles.contone}>
        <Ionicons name="people" size={30} color="black" /> 
        </View>
        <View style={styles.contthow}></View>
      </View>
         
      <View style={styles.controw}>
        <View style={styles.contone}>
        <Fontisto name="whatsapp" size={24} color="black" />
        </View>
        <View style={styles.contthow}></View>
      </View>

    </View>
   </View>
  );
}