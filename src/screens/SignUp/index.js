import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexs/auth';
import {Text, View, TextInput,KeyboardAvoidingView,TouchableOpacity, Dimensions } from 'react-native';
import Header from '../../components/Header';
import style from './styled';
  import styles from '../GlobalStyles';
import stylesDark from '../GlobalStylesDark';
import { Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons, Entypo, ArrowLeft  } from '@expo/vector-icons';

export default function SignUp() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nomeError, setNomeError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { darkMode, setDarkMode } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  
  const { signUp } = useContext(AuthContext);

  
  const appStyles = darkMode ? stylesDark : styles; 
  const windowHeight = Dimensions.get('window').height;

  const inputErrorStyle = {
    flexDirection:'row',
    width:'90%',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'red',
    borderRadius:8,
    marginBottom:15,
  };


  const handleSignUp = async () => {
    let errorMessage = '';

    setNomeError(!nome);
    setEmailError(!email);
    setPasswordError(!password);
    setConfirmPasswordError(!confirmPassword);

    if (!nome || !email || !password || !confirmPassword) {
      errorMessage = 'Por favor, preencha todos os campos obrigatórios.';
    } else if (password !== confirmPassword) {
      errorMessage = 'Senhas diferentes, insira senhas iguais.';
    } else {
      setLoading(true);
      const signUpResult = await signUp(email, password, nome);
      setLoading(false);

      if (!signUpResult.success) {
        switch (signUpResult.errorCode) {
          case 'auth/email-already-in-use':
            errorMessage = 'O email informado já está em uso por outro usuário.';
            setEmailError(true);
            break;
          case 'auth/invalid-email':
            errorMessage = 'O email informado não está em um formato válido.';
            setEmailError(true);
            break;
          case 'auth/weak-password':
            errorMessage = 'A senha deve ter no mínimo 6 caracteres.';
            setPasswordError(true);
            break;
          default:
            errorMessage = 'Ocorreu um erro ao cadastrar. Por favor, tente novamente.';
            break;
        }
      }
    }
    setErrorMessage(errorMessage);

    if (errorMessage) {
      setTimeout(() => {
        setErrorMessage('');
      }, 30000);
    }
  };
  
  
  

  return ( 
    <>
  <View style={[appStyles.background,{ height: (windowHeight * 0.2) - 80 }]}>
  <View style={{position:'absolute', top:20, left:20, zIndex:110}}><AntDesign name="back" size={24} color="black"/></View> 
  <Header />
  <View style={appStyles.container}>
            <View style={styles.viewtittle}>
              <Text style={styles.textTittlePrimary}>Criar conta</Text>
             
            </View>
          
          <View style={styles.areaInput}>
          <View style={[styles.viewinput, styles.shadowProp, emailError && inputErrorStyle]}>
            
            
              <Ionicons name="person" size={20} style={styles.icon}/>
              <TextInput
                style={styles.input}
                placeholder="Nome"
                autoCorrect={false}
                autoCapitalize="none"
                value={nome}
                onChangeText={(text) => {
                setNome(text);
                setNomeError(false);
                }}
        />
            </View>
            <View style={[styles.viewinput, styles.shadowProp]}
         
            >
               <Entypo name="email" size={20}  style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="E-mail"
                autoCorrect={false}
                autoCapitalize="none"
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
            </View>
            <View style={[styles.viewinput, styles.shadowProp]}
            
            >
              <Ionicons name="key-outline" size={20}style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Senha"
                autoCorrect={false}
                autoCapitalize="none"
                secureTextEntry
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
            </View>
            <View style={[styles.viewinput, styles.shadowProp]}
            
            >
              <Ionicons name="key-outline" size={20}style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Confirme a Senha"
                autoCorrect={false}
                autoCapitalize="none"
                secureTextEntry
                value={confirmPassword}
                onChangeText={(text) => setConfirmPassword(text)}
              />
            </View>
          </View>
          {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
        </View>

       <View style={style.viewbase}>
          <Pressable style={[styles.btnPrimary, styles.shadowProp]} onPress={handleSignUp}>
            <Text style={appStyles.textglobalPrimary}>Cadastrar</Text>
          </Pressable>
          
            <TouchableOpacity style={{height:60, justifyContent:'center' }}>
               <Text style={appStyles.textglobalSecundary}>Já tem uma conta? faça o Login </Text>
            </TouchableOpacity>
       </View>
       
      </View>
      </>
  );
  
}