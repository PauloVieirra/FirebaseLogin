import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from './src/contexs/auth';
import firebase from './src/services/firebaseConnection';

 import Routes from './src/routes';
 console.disableYellowBox = true;


export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
         <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
}


