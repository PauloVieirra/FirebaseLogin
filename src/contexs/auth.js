import React, { useState, createContext, useEffect } from "react";
import firebase from '../services/firebaseConnection';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cidade, setCidade] = useState('');
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        async function loadStorage() {
            try {
                const storageUser = await AsyncStorage.getItem('Auth_user');

                if (storageUser) {
                    setUser(JSON.parse(storageUser));
                }
            } catch (error) {
                console.error("Error loading storage:", error);
            } finally {
                setLoading(false);
            }
        }

        loadStorage();
    }, []);

    async function signIn(email, password) {
        try {
            const { user: firebaseUser } = await firebase.auth().signInWithEmailAndPassword(email, password);
            const uid = firebaseUser.uid;
            const snapshot = await firebase.database().ref('users').child(uid).once('value');
            const userData = { uid, ...snapshot.val(), email: firebaseUser.email };

            setUser(userData);
            storageUser(userData);
        } catch (error) {
            console.error("Error signing in:", error);
            alert(error.code);
        }
    }

    async function storageUser(data) {
        try {
            await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
        } catch (error) {
            console.error("Error storing user data:", error);
        }
    }

    async function signOut() {
        try {
            await firebase.auth().signOut();
            await AsyncStorage.clear();
            setUser(null);
        } catch (error) {
            console.error("Error signing out:", error);
        }
    }

    async function signUp(email, password, nome) {
        try {
          setLoading(true);
      
          const emailRegex = /^[a-zA-Z0-9._-]+@(?:[a-zA-Z0-9.-]+\.)+(com|com\.br)$/;
          if (!emailRegex.test(email)) {
            setLoading(false);
            return { success: false, errorCode: 'auth/invalid-email' };
          }
      
          const { user: firebaseUser } = await firebase.auth().createUserWithEmailAndPassword(email, password);
          const uid = firebaseUser.uid;
          await firebase.database().ref('users').child(uid).set({
            nome, email
          });
          const userData = { uid, nome, email: firebaseUser.email };
      
          setUser(userData);
          storageUser(userData);
          setLoading(false);
      
          return { success: true };
        } catch (error) {
          setLoading(false);
      
          switch (error.code) {
            case 'auth/email-already-in-use':
              return { success: false, errorCode: 'auth/email-already-in-use' };
            case 'auth/invalid-email':
              return { success: false, errorCode: 'auth/invalid-email' };
            case 'auth/weak-password':
              return { success: false, errorCode: 'auth/weak-password' };
            default:
              return { success: false };
          }
        }
      }
      
      
    
    

    async function cadAmigao(nome, telefone, cidade) {
        if (nome !== '' && telefone !== '' && cidade !== '') {
            try {
                const amigaoRef = firebase.database().ref('amigao');
                const newAmigaoRef = amigaoRef.push();
                const chave = newAmigaoRef.key;

                await newAmigaoRef.set({ nome, telefone, cidade });

                alert('Cadastrado com sucesso!');
                setNome('');
                setTelefone('');
                setCidade('');
            } catch (error) {
                console.error("Error registering Amigão:", error);
            }
        }
    }

  

    return (
        <AuthContext.Provider value={{ signed: !!user, user, signUp, signIn, loading, signOut, cadAmigao, darkMode, setDarkMode }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
