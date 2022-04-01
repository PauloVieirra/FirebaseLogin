import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import { AuthContext } from '../../contexs/auth';
import {Background,
   Container,
   TextLogin,
    AreaInput,
     Input,
     AreRecovUp,
     RecoveryText, 
     SingUpText,
     Logo,
     BtnLogin} from './styled';



export default function SignIn() {

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signIn} = useContext(AuthContext);

  function handleLogin(){
    signIn(email, password);
  }
 
 return (
   <Background>
       <Container>
             <Logo source={require('../../assets/loggo.png')}/>
  
           <AreaInput>
           <Input
           placeholder="E-mail"
           autoCorrect={false}
           autoCapitalize="none"
           value={email}
           onChangeText={(text) => setEmail(text)}
           />
           </AreaInput>

           <AreaInput>
           <Input
           placeholder="Senha"
           autoCorrect={false}
           autoCapitalize="none"
           value={password}
           onChangeText={(text) => setPassword(text)}
           />
           </AreaInput>

           <BtnLogin>
             <TextLogin onPress={handleLogin}>Login</TextLogin>
           </BtnLogin>

           <AreRecovUp>
             <RecoveryText onPress={() => navigation.navigate('SignUp')}>
             <SingUpText>Criar minha conta</SingUpText>
             </RecoveryText>
           </AreRecovUp>

       </Container>
   </Background>
  );
}