import React from 'react';
import { View,Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import styles from './styled';

export default function Scrollespecialist(props) {
 return (
   <View style={styles.container}>
       <ScrollView 
       horizontal={true}
       showsHorizontalScrollIndicator={false}
       style={styles.viewespecialista}>

          <TouchableOpacity style={{alignItems:'center',justifyContent:'center',width:100, height:34,marginLeft:10,backgroundColor:"#fff", borderRadius:17}}> 
            <Text>Ford</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{alignItems:'center',justifyContent:'center',width:120, height:34,marginLeft:10,backgroundColor:"#fff", borderRadius:17}}> 
          <Text>Honda</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{alignItems:'center',justifyContent:'center',width:120, height:34,marginLeft:10,backgroundColor:"#fff", borderRadius:17}}> 
          <Text>Mercedes</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{alignItems:'center',justifyContent:'center',width:120, height:34,marginLeft:10,backgroundColor:"#fff", borderRadius:17}}> 
            <Text>Fiat</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{alignItems:'center',justifyContent:'center',width:120, height:34,marginLeft:10,backgroundColor:"#fff", borderRadius:17}}> 
          <Text>Citroen</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{alignItems:'center',justifyContent:'center',width:120, height:34,marginLeft:10,backgroundColor:"#fff", borderRadius:17}}> 
          <Text>Peogeot</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{alignItems:'center',justifyContent:'center',width:120, height:34,marginLeft:10,backgroundColor:"#fff", borderRadius:17}}> 
            <Text>Wolks</Text>
          </TouchableOpacity>

          


       </ScrollView>
   </View>
  );
}