import React,{ useState, useContext } from 'react';
import {ImageBackground,Text,Image, View,TouchableOpacity, StatusBar,Pressable } from 'react-native';
import styles from './styled';
import { AuthContext } from '../../contexs/auth';
import { useNavigation } from '@react-navigation/native';
import Card from '../../components/Card';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons,FontAwesome5,MaterialCommunityIcons, Entypo,MaterialIcons } from '@expo/vector-icons';
import {AdMobBanner} from 'expo-ads-admob';

const gps = require('../../assets/gps.png');
const volan = require('../../assets/volate.png');
const imgManner = require('../../assets/gestao.png');
const btnone = require('../../assets/btnone.png');

export default function Pickup() {

  
  const navigation = useNavigation();
  const handleNavi = () => {alert('Ops, essa funcionalidade ainda não esta disponível');}
  const { user } = useContext(AuthContext);
  const [isCad, setIsCad] = useState(false);
  
 return (
   
      <View style={styles.GeneralsGuie}>
        <LinearGradient
          colors={['#262626', '#53198A' ]}
          style={styles.linearGradient}
          start={{ x: 1.0, y: 0.6 }}
          end={{ x: 1.0, y: 1.0 }}
        >

      <StatusBar
        animated={true}
        backgroundColor="#000"/>

        

    <View style={styles.container}>
    
            {!isCad &&
            <TouchableOpacity style={styles.btncard} onPress={() => setIsCad('true')}>
              <Ionicons name="person" size={35} color="black" />
            </TouchableOpacity>
                }
          <View style={styles.viewopencard}>
              {isCad &&
            <TouchableOpacity style={styles.btncardd} onPress={() => setIsCad()}>
              <Text>Fechar</Text>
            </TouchableOpacity>
                }
          </View>

         
        <View style={{width:"100%",height:"100%", position:'absolute',zIndex:0}}>
        <ImageBackground source={require('../../../assets/ngng.png')}  style={styles.imgback}></ImageBackground>
        </View>

        <View style={{width:"100%",height:"100%", position:'absolute',zIndex:1,justifyContent:'center'}}>
        <LinearGradient
          colors={['#262626:rgba(0,0,0,0.5)','#181818']}
          style={styles.linearGradientbn}
          start={{ x: 1.0, y: 0.6 }}
          end={{ x: 1.0, y: 1.0 }}
        >
        <Text style={styles.textbanner}>Olá, {user && user.nome}</Text>
        </LinearGradient>
        </View>
       

        {isCad &&
        <View style={{width:"100%",height:"100%",zIndex:2}}>
          <Card/>
        </View>
        }
       
        
    </View>
    
    <View style={styles.containertow}>
           
         
       <View style={styles.viewbtn}>
          <Image source={btnone} resizeMode="cover" style={styles.linearBtnOne}/>
            <LinearGradient
                  colors={['rgba(171,69,181,0.8)','rgba(214,78,152,0.8)', 'rgba(228,99,153,0.8)','rgba(235,117,139,0.8)','rgba(238,138,114,0.8)','rgba(237,133,124,0.8)' ]}
                  style={styles.linearBtnOne}
                  start={{ x: 0.2, y: 2.0 }}
                  end={{ x: 1.0, y: 0.5 }}
                  >
                    <Pressable style={styles.Choece} onPress={() => navigation.navigate('Home')}>
                      <Text style={styles.ChoeceText}>Chamar Guincho </Text>
                    </Pressable>
                
            </LinearGradient>
        </View>

        <View style={styles.viewbtn}>
          <Image source={gps} resizeMode="cover" style={styles.linearBtnOne}/>
            <LinearGradient
                  colors={['rgba(171,69,181,0.8)','rgba(214,78,152,0.8)', 'rgba(228,99,153,0.8)','rgba(235,117,139,0.8)','rgba(238,138,114,0.8)','rgba(237,133,124,0.8)' ]}
                  style={styles.linearBtnOne}
                  start={{ x: 0.2, y: 2.0 }}
                  end={{ x: 1.0, y: 0.5 }}
                  >
                    <Pressable style={styles.Choece} onPress={() => navigation.navigate('Home')}>
                      <Text style={styles.ChoeceText}>Chamar Motorista da vez </Text>
                    </Pressable>
                
            </LinearGradient>
        </View>

        <View style={styles.viewbtns}>
          <Image source={volan} resizeMode="cover" style={styles.linearBtnOne}/>
            <LinearGradient
                  colors={['rgba(171,69,181,0.8)', 'rgba(209,85,169,0.8)','rgba(235,117,139,0.8)','rgba(238,138,114,0.8)','rgba(237,133,124,0.8)' ]}
                  style={styles.linearBtnOne}
                  start={{ x: 0.1, y: 1.1 }}
                  end={{ x: 1.0, y: 0.4 }}
                  >
                 
                    <View style={styles.viewiconint}>

                      <View style={styles.vieworg}>
                        <View style={styles.iconum}>
                        <FontAwesome5 name="toolbox" size={30} color='#000:rgba(0,0,0,0.7)' />
                        </View>
                        <Text style={styles.texticons}>Oficinas</Text>
                      </View>
                      <View style={styles.vieworg}>
                        <View style={styles.icondois}>
                        <MaterialCommunityIcons name="engine" size={30} color='#000:rgba(0,0,0,0.7)' />
                        </View>
                        <Text style={styles.texticons}>Peças</Text>
                      </View>
                      <View style={styles.vieworg}>
                        <View style={styles.icontres}>
                        <FontAwesome5 name="tools" size={30} color='#000:rgba(0,0,0,0.7)' />
                        </View>
                        <Text style={styles.texticons}>Mecânico</Text>
                      </View>
                      <View style={styles.vieworg}>
                        <View style={styles.iconquat}>
                        <MaterialCommunityIcons name="face-woman-shimmer" size={30} color='#000:rgba(0,0,0,0.7)' />
                        </View>
                        <Text style={styles.texticons}>Elas</Text>
                      </View>

                    
                      
                     
                    </View>

                    <View style={styles.viewiconint}>
                    <View style={styles.vieworg}>
                        <View style={styles.iconcinco}>
                        <Entypo name="open-book" size={30} color='#000:rgba(0,0,0,0.7)' />
                        </View>
                        <Text style={styles.texticons}>Dicas</Text>
                      </View>
                      <View style={styles.vieworg}>
                        <View style={styles.iconseis}>
                        <MaterialIcons name="pan-tool" size={30} color='#000:rgba(0,0,0,0.7)' />
                        </View>
                        <Text style={styles.texticons}>Restaurar</Text>
                      </View>
                      <View style={styles.vieworg}>
                        <View style={styles.iconsete}>
                        <Ionicons name="location" size={30} color='#000:rgba(0,0,0,0.7)' />
                        </View>
                        <Text style={styles.texticons}>Rastrear</Text>
                      </View>
                      <View style={styles.vieworg}>
                        <View style={styles.iconoito}>
                        <MaterialIcons name="cleaning-services" size={30} color='#000:rgba(0,0,0,0.7)' />
                        </View>
                        <Text style={styles.texticons}>Limpeza</Text>
                      </View>
                    </View>
            </LinearGradient>
        </View>


   </View>
 
           <View style={{width:"100%", paddingRight:10,alignItems:"center"}}>
           <AdMobBanner
            bannerSize="fullBanner"
            adUnitID="ca-app-pub-5250847692952265/9567002638" 
            servePersonalizedAds/>
          </View>
             


          </LinearGradient>
   </View>
   
  );
}