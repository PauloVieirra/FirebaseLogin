import React, {useContext} from 'react';
import { Image,Text, View } from 'react-native';
import styles from './styled';
import {AuthContext} from '../../contexs/auth';

export default (props) => {
    <View style={styles.container}>
          <View style={styles.viewprofileone}>
             <View style={styles.imgeview}>
             <Image source={require('../../assets/profileimg.png')}style={{width:60, height:60}}/>
             </View>
             <Text>NOME</Text>
             <Text>EMAIL</Text>
             <Text>Telefone</Text>
             <Text>Atualizar dados</Text>
          </View>
          <View style={styles.viewprofilethow}>
          <Text>Ford profile</Text>
          <Text>R-OSK: 10/10/2012</Text>

          </View>
    </View>
}