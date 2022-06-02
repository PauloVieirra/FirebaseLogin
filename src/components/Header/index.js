import React from 'react';
import { View, StyleSheet,TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



export default function Header() {
  
  const navigation = useNavigation();
  return (
    <View style={styles.constainer}>
       <View style={styles.viewIcon}>
         <TouchableOpacity onPress={()=> navigation.navigate('SignIn')}>
            <AntDesign name="arrowleft" size={24} color="white" />
         </TouchableOpacity> 
      </View>
    </View>
   );
 }

const styles= StyleSheet.create({
  constainer:{
    backgroundColor:'#000 rgba(0,0,0,0.1)',
    width:"100%",
    height:90
  },
  viewIcon:{
    position:'absolute', bottom:1,
    justifyContent:'center',
    alignItems:'center',
    width:50,
    height:50
  },
});




