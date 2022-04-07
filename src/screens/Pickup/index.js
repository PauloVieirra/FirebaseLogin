import React, { useContext } from 'react';
import { Image,Text, View,TouchableOpacity, SafeAreaView } from 'react-native';
import styles from './styled';
import { AuthContext } from '../../contexs/auth';
import { useNavigation } from '@react-navigation/native';

export default function Pickup() {

  const { user, signOut } = useContext(AuthContext);

  const navigation = useNavigation();
  
  const handleNavi = () => {
    alert('Ops, essa funcionalidade ainda não esta disponível');
}

 return (
      <SafeAreaView>
        <View style={styles.container}>
          <TouchableOpacity onPress={ () => signOut() }>
            <Text>Sair da conta</Text>
          </TouchableOpacity>
          <Text> Olá { user && user.nome }</Text>
          <Text>{ user && user.email }</Text>
        </View>
        <View style={styles.containertow}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}> 
        <Image source={require('../../assets/bannergui.png')} 
        style={styles.OpcaoSos}/>
        </TouchableOpacity>
      
    <TouchableOpacity onPress={handleNavi} >
      <Image source={require('../../assets/OpcapMarkert.png')} 
      style={styles.OpcaoMarketPlace}/>
    </TouchableOpacity>

    <TouchableOpacity onPress={handleNavi} >
      <Image source={require('../../assets/Opwhassh.png')} 
      style={styles.OpcaoWhash}/>
    </TouchableOpacity>
      </View>
   </SafeAreaView>
  
  
  );
}