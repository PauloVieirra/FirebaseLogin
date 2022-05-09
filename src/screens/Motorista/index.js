import React, {Component} from 'react';
import {  View, Text, TextInput, ScrollView} from 'react-native';
import styles from './styled';
import Motoristas from '../../components/Motoristas';

  

export default function Motorista() {
 
  return (
      <>
    <View style={styles.container}>

      <View style={styles.header}>
      <Text style={styles.titleone}>Amigão OSK</Text>
          <Text numberOfLines={2} style={styles.title}>Levamos você e seu veículo, ao destino solicitado.</Text>
          <View style={styles.cantainerseach}>
            <TextInput style={styles.seachMyLocation}> </TextInput>  
          </View>
          
      </View>

      <View style={styles.scroller}>
          
         <Motoristas/>

        
      </View>

    </View>
    </>
  );
}


