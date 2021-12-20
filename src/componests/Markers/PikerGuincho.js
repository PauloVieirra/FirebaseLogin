import React from 'react';
import { View,TouchableOpacity,Text,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function PikerGuincho(props) {
    const navigation = useNavigation();
    
    return (
        
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={require('../../assets/bannergui.png')} 
          style={styles.OpcaoMarketPlace}/>
              <View style={{position:'absolute',top:30,left:10,width:"100%",height:20}}>
              <Text style={styles.textname}>Guincho</Text>
              <Text style={styles.textitemns}>Chamar serviço de reboque</Text>
              </View>
        </TouchableOpacity>
        
       );
}