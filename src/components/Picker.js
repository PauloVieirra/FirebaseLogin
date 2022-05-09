import React from 'react';
import { View,StyleSheet,TouchableOpacity,ImageBackground,Text } from 'react-native';

export default function components() {
 return (
  <View style={styles.picker}>
       <TouchableOpacity style={styles.Toucheblle} onPress={() => navigation.navigate('Home')}>
            
            <Text style={styles.ChoeceText}numberOfLines={2}>Guincho e Oficinas</Text>
           </TouchableOpacity>
  </View>
  );
}

const styles= StyleSheet.create({
    picker:{
        width:"90%",
        height:60,
        borderRadius:22
    }
});