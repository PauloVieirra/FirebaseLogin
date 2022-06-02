import React, {useState, useContext} from 'react';
import { AuthContext } from '../../contexs/auth';
import { Platform, ScrollView } from 'react-native';
import {Background,Container,TextLogin,AreaInput, Input, InputCar,AreaInputCar,BtnLogin, UserImg} from './styled';
import Header from '../../components/Header';

export default function SignUp() {

  const [nome,setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [veiculo, setVeiculo] = useState('');
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');
  const [cor, setCor] = useState('');
  const [rg, setRg] = useState('');
  const [telefone, setTelefone] = useState('');

  const { signUp } = useContext(AuthContext);

  function handleSignUp(){
    signUp(email, password, nome,veiculo,ano,modelo,cor,telefone, rg);
  }
 
  
 return (
   <Background
   behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
     <>
     <Header/>
     <ScrollView style={{marginTop:1}}>
       <Container>

         <UserImg></UserImg>

          
  
           <AreaInput>
           <Input
           placeholder="Nome"
           autoCorrect={false}
           autoCapitalize="none"
           value={nome}
           onChangeText={(text) => setNome(text)}
           />
           <Input
           placeholder="E-mail"
           autoCorrect={false}
           autoCapitalize="none"
           value={email}
           onChangeText={(text) => setEmail(text)}
           />
           <Input
           placeholder="Senha"
           autoCorrect={false}
           autoCapitalize="none"
           value={password}
           onChangeText={(text) => setPassword(text)}
           />
           <Input
           placeholder="Telefone"
           autoCorrect={false}
           autoCapitalize="none"
           value={telefone}
           keyboardType="numeric"
           onChangeText={(text) => setTelefone(text)}
           />
           <Input
           placeholder="RG"
           autoCorrect={false}
           autoCapitalize="none"
           value={rg}
           keyboardType="numeric"
           onChangeText={(text) => setRg(text)}
           />
           
           </AreaInput>

           <AreaInputCar>
           <InputCar
           placeholder="Veiculo"
           autoCorrect={false}
           autoCapitalize="none"
           value={veiculo}
           onChangeText={(text) => setVeiculo(text)}
           />

            <InputCar
           placeholder="Ano"
           autoCorrect={false}
           autoCapitalize="none"
           value={ano}
           onChangeText={(text) => setAno(text)}
           />
           </AreaInputCar>
           <AreaInputCar>
           <InputCar
           placeholder="Modelo"
           autoCorrect={false}
           autoCapitalize="none"
           value={modelo}
           onChangeText={(text) => setModelo(text)}
           />

            <InputCar
           placeholder="Cor"
           autoCorrect={false}
           autoCapitalize="none"
           value={cor}
           onChangeText={(text) => setCor(text)}
           />
           </AreaInputCar>

           <BtnLogin onPress={handleSignUp}>
             <TextLogin>Cadastrar</TextLogin>
           </BtnLogin>
       </Container>
       </ScrollView>
       </>
   </Background>

  );
}