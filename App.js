import 'react-native-gesture-handler';
import React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from './src/contexs/auth';
import Routes from './src/routes';

LogBox.ignoreAllLogs(true);


export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
         <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
}


