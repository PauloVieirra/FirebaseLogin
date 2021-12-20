import React from 'react';
import { View,TouchableOpacity,Text,Image } from 'react-native';
import styles from './styles';

export default function Pikerpecas(props) {
    const handleNavi = () => {
        alert('Ops, essa funcionalidade ainda não esta disponível');
    }
    return (
        <TouchableOpacity onPress={handleNavi}>
          <Image source={require('../../assets/OpcapMarkert.png')} 
          style={styles.OpcaoMarketPlace}/>
           <View style={{position:'absolute',top:30,left:10,width:"100%",height:20}}>
              <Text style={styles.textname}>Lojas</Text>
              <Text style={styles.textitemns}>Fornecedores de peças</Text>
              </View>
          </TouchableOpacity>
       );
}