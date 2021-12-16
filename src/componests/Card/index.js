import React, {useState, useContext, useRef,useEffect} from 'react';
import { View, Image, TouchableOpacity,Text, ActivityIndicator} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Modalize } from 'react-native-modalize';
import * as Firebase from 'firebase';
import {AuthContext} from '../../contexs/auth';
import styles from './styled';



export default (props) => {

    const [image,setImage] = useState();
    const [upLoading, setupLoading] = useState(false);


    const {user} = useContext(AuthContext);
    const modalizeRef = useRef ();

    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Permissão negada! para registrar seus dados precisamos da permissão!');
            }
          }
        })();
      }, []);
    

    const pickImage = async () => {

        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };

        const uploadImage = async () => {

          const blob = await new Promise((resolve, reject) =>{
        
              const xhr = new XMLHttpRequest();
               xhr.onload = function() {
               resolve(xhr.response);
                };
               xhr.onerror = function(){
               reject(new TypeError('Falha'));
            };
             xhr.responseType = 'blob';
             xhr.open('GET', image,true);
             xhr.send(null);
          });

          const ref = Firebase.storage().ref().child(new Date().toISOString());
          const snapshot = ref.put(blob);

          snapshot.on(
            Firebase.storage.TaskEvent.STATE_CHANGED,()=>{
           setupLoading(true)
        },
        (error)=>{
            setupLoading(false)
            console.log(error);
            blob.close()
            return
        },
        snapshot.snapshot.ref.getDownloadURL().then((url)=>{
            setupLoading(true)
        console.log("download url :",url)
        blob.close();
        return url;
        })
        );


        };

        
        

      function onOpen() {
        modalizeRef.current?.open();
      }

 return (
<>    
    <View style={styles.container} >

    
       
    <View style={styles.viewprofileone}>
       <View style={styles.imgeview}>
         {image && <Image source={{uri:image}} style={{width:"80%",height:"80%", borderRadius:12}}/>}
         <TouchableOpacity onPress={onOpen} style={{alignItems:'center',justifyContent:'center',position:'absolute',bottom:1,width:"80%", height:25,backgroundColor:"#D8F0F8"}}>
          <Text style={{fontSize:12, color:"#171717"}}>Atualizar  dados</Text>

         </TouchableOpacity>
        </View>
         
    </View>
    <View style={styles.viewprofilethow}>
       <Text>{user.nome}</Text>
       <Text>{user.email}</Text>
       <Text>Telefone</Text>
    <Text>Modelo e ano</Text>   
    </View>
  </View>

<Modalize
ref={modalizeRef}
snapPoint={560}
HeaderComponent={


  <>
  <View style={styles.headermodal}>
           <View style={{width:130,height:130,borderRadius:50}}>
                 <Image source={{uri:image}}style={{width:"80%",height:"80%", borderRadius:12}}/>
           </View>
           <View style={{flexDirection:'row',marginTop:4, alignItems:'center',marginLeft:10}}>
           <TouchableOpacity onPress={pickImage}  style={{width:120,height:40, backgroundColor:"#eee", alignItems:'center', justifyContent:'center'}}>
                <Text>Escolher uma foto</Text>
      </TouchableOpacity>
      {image &&
      <Image source={require('../../assets/verificacao.png')} style={{marginLeft:"1%",width:30,height:30}}/>
      }</View>
  </View>
  <View style={styles.headermodalon}>
 
     {!upLoading?<TouchableOpacity onPress={uploadImage}><Text>UPLOAD</Text></TouchableOpacity>:<ActivityIndicator size="large" color="#000"/>}
   </View>
   </>
}
>
  
</Modalize>
</>



  );
}