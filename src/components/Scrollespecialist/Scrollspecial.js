import React from 'react';
import { View, ScrollView, TouchableOpacity, Image } from 'react-native';
import styles from './styled';

export default function Scrollespecialist(props) {
 return (
   <View style={styles.container}>
       <ScrollView 
       horizontal={true}
       style={styles.viewespecialista}>

          <TouchableOpacity style={{width:70, height:"100%",marginLeft:10}}> 
            <Image source={require('../../assets/Especialistas/especijac.png')} style={{width:70, height:"100%", borderRadius:12}}/>
          </TouchableOpacity>

          <TouchableOpacity style={{width:70, height:"100%",marginLeft:10}}> 
            <Image source={require('../../assets/Especialistas/especiford.png')} style={{width:70, height:"100%", borderRadius:12}}/>
          </TouchableOpacity>

          <TouchableOpacity style={{width:70, height:"100%",marginLeft:10}}> 
            <Image source={require('../../assets/Especialistas/especiafiat.png')} style={{width:70, height:"100%", borderRadius:12}}/>
          </TouchableOpacity>

          <TouchableOpacity style={{width:70, height:"100%",marginLeft:10}}> 
            <Image source={require('../../assets/Especialistas/especibmwt.png')} style={{width:70, height:"100%", borderRadius:12}}/>
          </TouchableOpacity>

          <TouchableOpacity style={{width:70, height:"100%",marginLeft:10}}> 
            <Image source={require('../../assets/Especialistas/especicitroen.png')} style={{width:70, height:"100%", borderRadius:12}}/>
          </TouchableOpacity>

          <TouchableOpacity style={{width:70, height:"100%",marginLeft:10}}> 
            <Image source={require('../../assets/Especialistas/especihondat.png')} style={{width:70, height:"100%", borderRadius:12}}/>
          </TouchableOpacity>

          <TouchableOpacity style={{width:70, height:"100%",marginLeft:10}}> 
            <Image source={require('../../assets/Especialistas/especipeogeot.png')} style={{width:70, height:"100%", borderRadius:12}}/>
          </TouchableOpacity>


       </ScrollView>
   </View>
  );
}