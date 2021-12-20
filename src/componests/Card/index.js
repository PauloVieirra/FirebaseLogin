import React, {useState, useContext, useRef,useEffect} from 'react';
import { View, Image, TouchableOpacity,Text, ActivityIndicator} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Modalize } from 'react-native-modalize';
import * as Firebase from 'firebase';
import {AuthContext} from '../../contexs/auth';
import firebaseConetion from '../../services/firebaseConnection';
import styles from './styled';



export default (props) => {

    if(!Firebase.apps.length){
        Firebase.initializeApp(firebaseConetion);
    }

    const [image,setImage] = useState();
    const [upLoading, setupLoading] = useState(false);


    const {user, signOut} = useContext(AuthContext);
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
          cropping:true,
          aspect: [4, 3],
          compressImageQuality: 0.7,
          compressImageMaxWidth:300,
          compressImageMaxHeight:300,
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

          const ref = Firebase.storage().ref().child("imagesProfile").child(new Date().toISOString());
          const snapshot = ref.put(blob);

          
            (error)=>{
              setupLoading(false)
              console.log(error);
              blob.close()
              return
            },
          

            snapshot.on(
              Firebase.storage.TaskEvent.STATE_CHANGED,()=>{
            setupLoading(true)
            snapshot.snapshot.ref.getDownloadURL().then( function (url_image) {
              
              console.log("url: "+ url_image)
              blob.close();
              return url_image;
              
            })
            

        },
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
           <TouchableOpacity onPress={onOpen} style={styles.btnupdate}>
           <Text style={{fontSize:12, color:"#171717"}}>Atualizar  dados</Text>
           </TouchableOpacity>
        </View>
         
     </View>
       <View style={styles.viewprofilethow}>
         
           <Text style={styles.textname}>{user.nome}</Text>
           <Text style={styles.textitemns}>{user.email}</Text>
           <Text style={styles.textitemns}>Telefone</Text>
           <Text style={styles.textitemns}>Modelo e ano</Text>  
         
       </View>
     </View>

<Modalize
ref={modalizeRef}
snapPoint={560}
HeaderComponent={


  <>
  <View style={styles.headermodal}>
           <View style={{width:130,height:130,borderRadius:50, marginTop:20}}>
                 <Image source={{uri:image}}style={{width:"98%",height:"98%", borderRadius:12}}/>
           </View>
           <Text style={styles.textname}>{user.nome}</Text>
           <View style={{flexDirection:'row',marginTop:4, alignItems:'center',marginLeft:10}}>
          <TouchableOpacity onPress={pickImage}  style={{width:120,height:40, backgroundColor:"#eee", alignItems:'center', justifyContent:'center'}}>
                <Text>Escolher uma foto</Text>
      </TouchableOpacity>
      {image &&
      <Image source={require('../../assets/verificacao.png')} style={{marginLeft:"1%",width:30,height:30}}/>
      }</View>
  </View>
  <View style={styles.headermodalon}>
 
    <TouchableOpacity onPress={uploadImage}><Text>UPLOAD</Text></TouchableOpacity>
   </View>
   <View style={styles.headermodalon}>
 
    <TouchableOpacity onPress={()=>signOut()}><Text>Sair</Text></TouchableOpacity>
   </View>
   </>
}
>
  
</Modalize>

</>



  );
}