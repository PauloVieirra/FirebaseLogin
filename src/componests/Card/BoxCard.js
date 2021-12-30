import React, {useState} from 'react';
import { View,TouchableOpacity,Text,Image,Modal } from 'react-native';
import styles from './styled';

export default function BoxCard(props) {
    const [modaelVisible, setModaelVisible] = useState (false);

    function onOpenCard() {
        setModaelVisible=(true);
    }
    
    return (

        <Modal
        visible={modaelVisible}
        animationType="fade"
        transparent={true}
         >
         <>
       <View style={styles.Box}>
         <View style={styles.boxCard}>
        <View style={{flexDirection:'column', height:"100%",width:"30%"}}>
       
             <View style={styles.boxCardOne}>
                 <View style={{
                     width:120,
                     height:120,
                     backgroundColor:"#000",
                     borderRadius:75,
                     alignItems:'center',
                     marginTop:20,
                     marginBottom:20,}}>
                        
                 </View>
                 <View style={{
                     width:200,
                     height:100,
                     justifyContent:'center',
                     marginTop:30,
                     }}>
                          <Image source={require('../../assets/CIVIC.png')} style={{margin:"2%",width:180,height:80}}/>
            

                 </View>
              </View>
         </View>

         <View style={styles.boxCardthow}>
                <View style={{
                     flex:1,
                     backgroundColor:"#ff0000"
                     }}>
                        
                 </View>
                 <View style={{
                     flex:1,
                     backgroundColor:"#131313"
                     }}>

                 </View>
             
            </View>



             <View style={styles.boxCardthree}>
             <Text>FlatList</Text>
             <Text>Histórico de atendimentos</Text>
             <Text>Todas as peças e manutenção feitas</Text>
                        
             </View>
               </View>
         </View>
       
       </>
     </Modal>
        
        
       );
}