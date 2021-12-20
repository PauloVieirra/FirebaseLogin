import React, {useState, useContext} from 'react';
import { AuthContext } from '../../contexs/auth';
import { Platform, ScrollView} from 'react-native';
import {Background,
   Container,
   TextLogin,
   AreaInput,
   Input,
   InputCar,
   AreaInputCar,
   BtnLogin} from './styled';

export default function SignUp() {

  const [nome,setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [veiculo, setVeiculo] = useState('');
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');
  const [cor, setCor] = useState('');

  const { signUp } = useContext(AuthContext);

  function handleSignUp(){
    signUp(email, password, nome,veiculo,ano,modelo,cor);
  }
 
  
 return (
   <Background
   behavior={Platform.OS === 'ios' ? 'padding' : ''}
   enabled
   >
     <>
    
       <Container>
  
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
       </>
   </Background>
  );
}