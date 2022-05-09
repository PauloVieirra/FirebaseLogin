import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Gestao() {

 const navigation=useNavigation();


 return (
   <>
     <View style={{}}>

     </View>

    <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
      
        <TouchableOpacity onPress={()=> navigation.navigate('Amigao')}style={styles.btn}>
            <Text style={styles.texto}>Cadastro Amigão </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> navigation.navigate('Guinchos')}style={styles.btn}>
            <Text style={styles.texto}>Cadastro Guinchos </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> navigation.navigate('Limpeza')}style={styles.btn}>
            <Text style={styles.texto}>Cadastro Limpeza </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Lojas')}style={styles.btn}>
            <Text style={styles.texto}>Cadastro Lojas </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Oficinas')}style={styles.btn}>
            <Text style={styles.texto}>Cadastro Oficinas </Text>
        </TouchableOpacity>
      
          


    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    margin: 10,
  },
  texto: {
    fontSize: 20,
  },
  input:{
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#121212',
    height: 45,
    fontSize: 17
  },
  btn:{
      width:'90%',
      height:50,
      backgroundColor:"#fff",
      justifyContent:'center',
      alignItems:'center',
      margin:5
  },
});