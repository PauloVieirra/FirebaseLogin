import React,{useState, useEffect} from 'react';
import { View,Text, FlatList } from 'react-native';
import firebase from './firebaseConnection';
import Listagem from './Listagem';


export default function oficeData() {


const [usuarios, setUsuarios] = useState([]);

useEffect(()=> {

    async function dados(){

       firebase.database().ref('users').on('value', (snapshot)=> {
        setUsuarios([]);

        snapshot.forEach((chilItem) => {
          let data = {
            key: chilItem.key,
            ano: chilItem.val().ano,
            cor: chilItem.val().cor,
            modelo: chilItem.val().modelo,
            nome: chilItem.val().nome,
            veiculo: chilItem.val().veiculo,
          };

          setUsuarios(oldArray => [...oldArray, data].reverse());
        })

        

      })

    }

    dados();


  }, []);

 return (
   
    <View style={{flex:1}}>
        <FlatList
        keyExtractor={item => item.key}
        data={usuarios}
        renderItem={ ({item}) => ( <Listagem data={item} /> )  }
        />
    </View>
  
  );
}