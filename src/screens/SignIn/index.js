import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, TextInput, Dimensions, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexs/auth';
import Header from '../../components/Header';
import style from './styled';
import styles from '../GlobalStyles';
import stylesDark from '../GlobalStylesDark'; // Importe os estilos escuros

export default function SignIn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, darkMode, setDarkMode } = useContext(AuthContext); // Acessar o estado e a função do dark mode

  function handleLogin() {
    signIn(email, password);
  }

  const appStyles = darkMode ? stylesDark : styles; // Selecionar os estilos apropriados
  const windowHeight = Dimensions.get('window').height;
  const keyboardOffset = windowHeight - 400; // Calculando o deslocamento vertical

  return (
    <View style={appStyles.background}>
      <Header />
      <View style={appStyles.container}>
        <View style={styles.areaInput}>
        <View style={[styles.viewinput, styles.shadowProp]}>
            <TextInput
            style={styles.input}
            placeholder="E-mail"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => setEmail(text)}
            />
            </View>

            <View style={[styles.viewinput, styles.shadowProp]}>
            <TextInput
            style={styles.input}
            placeholder="Senha"
            autoCorrect={false}
            autoCapitalize="none"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            />
            </View>
        </View>
      </View>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={keyboardOffset}
      >
        <View style={style.viewbase}>
          <TouchableOpacity style={[styles.btnPrimary, styles.shadowProp]} onPress={handleLogin}>
            <Text style={appStyles.textglobalPrimary}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSecundary} onPress={() => navigation.navigate('SignUp')}>
            <Text style={appStyles.textglobalSecundary}>Criar minha conta</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
