import React, {useState, useContext} from 'react';
import { AuthContext } from '../../../../contexs/auth';
import { View, Text,TextInput, TouchableOpacity } from 'react-native';

export default function Amigao() {

    const [nome,setNome] = useState('');
    const [telefone,setTelefone] = useState('');
    const [cidade,setCidade] = useState('');

    const {cadAmigao} = useContext(AuthContext);

    function handleCadAmigao(){
        cadAmigao (nome, telefone, cidade);
      }
    
 return (
   <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
        
        <View style={{width:"80%", height:50, backgroundColor:"#fff", margin:5}}>
           <TextInput
           style={{width:"80%", height:50}}
           placeholder="Nome"
           autoCorrect={false}
           autoCapitalize="none"
           value={nome}
           onChangeText={(text) => setNome(text)}
           />
        </View>

        <View style={{width:"80%", height:50, backgroundColor:"#fff", margin:5}}>
           <TextInput
           style={{width:"80%", height:50}}
           placeholder="Telefone"
           autoCorrect={false}
           autoCapitalize="none"
           value={telefone}
           onChangeText={(text) => setTelefone(text)}
           />
        </View>

        <View style={{width:"80%", height:50, backgroundColor:"#fff", margin:5}}>
           <TextInput
           style={{width:"80%", height:50}}
           placeholder="Cidade"
           autoCorrect={false}
           autoCapitalize="none"
           value={cidade}
           onChangeText={(text) => setCidade(text)}
           />
        </View>

        <TouchableOpacity onPress={handleCadAmigao} style={{justifyContent:'center',alignItems:'center',borderRadius:25,width:"80%", height:50, backgroundColor:"#fff", margin:5}}>
             <Text>Cadastrar Amigão</Text>
           </TouchableOpacity>



   </View>
  );
}