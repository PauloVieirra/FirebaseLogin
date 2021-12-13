import  React, {useEffect, useRef, useState} from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, TouchableHighlight,TouchableOpacity, Image } from 'react-native';
import { MapsAPI } from '../../apigoogle';
import useApi from '../../services/requestApi';
import MapViewDirections from 'react-native-maps-directions';
import AddressModal from '../../componests/modalhome/AddressModal';
import { useNavigation } from '@react-navigation/native';
import Geocoder from 'react-native-geocoding';
import * as Location from 'expo-location';
import { Viewdet, LoadingArea} from './styled';
import * as Permissions from 'expo-permissions';




export default function Home() {
  const map = useRef();
  const api = useApi();
  const navigation = useNavigation();
  
   const [mapLoc, setMapLoc] = useState({
      center:{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.000904,
        longitudeDelta: 0.000905,
        },
          zoom:16,
          pitch:0,
          altitude:0,
          heading:0
          
    });

    const [fromLoc, setFromLoc] = useState({});
    const [toLoc, setToLoc] = useState({});
    const [showDirections, setShowDirections] = useState(false);
    const [requestDistance, setRequestDistance] = useState(0);
     const [requesTime, setRequestTime] = useState(0);
     const [requestPrice, setRequestPrice] = useState(0);
     
     const [modaltitle, setModalTitle] = useState('');
     const [modalvisible, setModalVisible] = useState (false);
     const [modalField, setModalField] = useState ('');

     const [loading, setLoading] = useState (false);

    useEffect(() => {
     Geocoder.init(MapsAPI ,{language:'pt-br' });
     getMyCurrentPosition();
      },[]);

      useEffect(()=>{
        if(fromLoc.center && toLoc.center) {
             setShowDirections(true);
        }
     },[toLoc]);

     useEffect(()=>{
      if(fromLoc.center){
          setMapLoc(fromLoc);
      }
       },[fromLoc]);

      const getMyCurrentPosition = () => {
        Location.installWebGeolocationPolyfill()
         navigator.geolocation.getCurrentPosition(async(info) => {
           console.log(info.coords);
            
          const geo = await Geocoder.from(info.coords.latitude, info.coords.longitude);
          if(geo.results.length > 0) {
               const loc = {
                   name:geo.results[0].formatted_address,
                   center:{
                       latitude:info.coords.latitude,
                       longitude:info.coords.longitude
                   },
                   zoom:16,
                   pitch:0,
                   altitude:0,
                   heading:0
               };

               setMapLoc(loc);
               setFromLoc(loc);
           }
          
           
        }, (error)=>{
            

        });
        }

        const handleFromClick = () =>{
          setModalTitle('Escolha a origem');
          setModalField('from');
          setModalVisible(true);
      }

      
        const handleToClick = async() => {
          setModalTitle('Escolha um destino');
          setModalField('to');
          setModalVisible(true);  
         }

      const handleDirectionsReady = async (r) => {
        map.current.fitToCoordinates(r.coordinates, {
          edgePadding:{
              left:50,
              right:50,
              bottom:220,
              top:290,
          }

       });
            setRequestDistance(r.distance);
            setRequestTime(r.duration);
            const priceReq = await api.getRequestPrice(r.distance);
            if(!priceReq.error){  setRequestPrice( priceReq.price);}
      }

      const handleRequestGo = async () => {
        setLoading(true);
        const driver = await api.findDriver({
                fromlat:fromLoc.center.latitude,
                fromlng:fromLoc.center.longitude,
                tolat:toLoc.latitude,
                tolng:toLoc.longitude
        });
        setLoading(false);
        if(!driver.error){
            //Encontrou Motorista
        }else{
            alert(driver.error)
        }
    }


      const handleRequestCancel = () => {
        setToLoc({});
        setShowDirections(false);
        setRequestDistance(0);
        setRequestTime(0);
        setRequestPrice(0);

        setMapLoc(fromLoc);
    }

    const handleModalClick = ( field, address) =>{
      const loc = {
          name:address.address,
          center:{
              latitude:address.latitude,
              longitude:address.longitude,
          },
          zoom:16,
          pitch:0,
          altitude:0,
          heading:0
      };

      switch(field){
          case 'from':
          setFromLoc(loc);
          break;
          case 'to':
              setToLoc(loc);
              break;
      }
  } 
  return (
    <View style={styles.container}>
      <>
      <MapView
       
       ref={map}
       style={{width:'100%', height:'100%'}}
       showsUserLocation={true}
       loadingEnabled={true}
       pitch={true}
       camera={mapLoc}
        >

                 {fromLoc.center &&
                 <MapView.Marker pinColor="#000" coordinate={fromLoc.center}/>
                 } 
                  {toLoc.center &&
                 <MapView.Marker pinColor="#000" coordinate={toLoc.center}/>
                 }

                {showDirections &&
                <MapViewDirections
                 lineDashPattern={[0]}
                 origin={fromLoc.center}
                 destination={toLoc.center}
                 strokeColor="black"
                 strokeWidth={5}
                 apikey={MapsAPI}
                 onReady={handleDirectionsReady}
                 
                />
                 } 

                  <Marker
                    coordinate={{ latitude : -15.837183 , longitude : -48.011885 }}
                    image={require('../../assets/offparceria.png')}
                  /> 


        </MapView>

      <View style={styles.Rotacont}>
      
       <TouchableHighlight onPress={handleFromClick} underlayColor={"#EEE"} style={styles.RotaOrig}>
            <View style={styles.RotaLabel}>
              <View style={styles.CampoLabel}>
                <View style={styles.RotaPointa}>
                 <View style={styles.RotaPoin}/>
                  <Text style={{marginLeft:1}}>Ponto de partida</Text>
                 </View>
                 {fromLoc.name && 
                <Text style={styles.textvaluea}>{fromLoc.name}</Text>
                 }
                 {!fromLoc.name &&
                <Text style={{marginLeft:1}}>Procurando sua localização...</Text>
                 }
              </View>
            </View>
       </TouchableHighlight>

      <TouchableHighlight onPress={handleToClick} underlayColor={"#EEE"} style={styles.RotaDest}>
          <View style={styles.RotaLabel}>
             <View style={styles.CampoLabel}>
             <View style={styles.RotaPointab}>
                       <View style={styles.RotaPoinn}/>

                       {!toLoc.name &&
                         <Text style={{marginLeft:1}}>Escolha uma oficina no mapa.</Text>
                       }
                       {toLoc.name &&
                         <Text style={{marginLeft:1}}>Seu destino é:</Text>
                       }
                           
                     </View>

                     {!toLoc.name &&
                         <Text style={{marginLeft:1}}>Você pode clicar aqui para digitar seu destino</Text>
                       }

                     {toLoc.name &&
                         <Text style={{marginLeft:1}}>{toLoc.name}</Text>
                        } 
            </View>
         </View>
      </TouchableHighlight>

      {toLoc.name && 
         <View style={styles.viewdetails}>
          
             <Viewdet> 
                 <Text style={{color:"#000", fontSize:15, }}>Distancia</Text>
                 <Text style={{color:"#000", fontSize:17,fontWeight: "bold"}}>{requestDistance > 0?`${requestDistance.toFixed(1)}km`:'--'}</Text>
             </Viewdet>
             <Viewdet> 
                 <Text style={{color:"#000", fontSize:15,}}>Tempo</Text>
                 <Text style={{color:"#000", fontSize:17,fontWeight: "bold"}}>{requesTime > 0?`${requesTime.toFixed(0)}mins`:'--'}</Text>
             </Viewdet>
             <Viewdet> 
                 <Text style={{color:"#000", fontSize:15,}}>Valor</Text>
                 <Text style={{color:"#000", fontSize:17,fontWeight: "bold"}}>{requestPrice > 0?`R$ ${requestPrice.toFixed(2)}`:'--'}</Text>
             </Viewdet>
            
         </View>
}
      

              {toLoc.name && 
                <View style={styles.viewdetailz}>
                <TouchableOpacity style={styles.bntc}>
                  <Text style={{color:"#eee", fontSize:18,}} onPress={handleRequestCancel}>X</Text>
                </TouchableOpacity> 
                </View>
               }
           
            
     </View>
                    
      
     
       <View style={styles.viewdetail}>
             
             <View style={styles.viewbtn}>
            
               <TouchableOpacity style={styles.bntsair}onPress={() => navigation.navigate('Pickup')}>
                  <Text style={{color:"#FFF", fontSize:18,}}>Sair</Text>
                </TouchableOpacity> 
                {toLoc.name &&
                <TouchableOpacity style={styles.bntchamar}>
                  <Text style={{color:"#FFF", fontSize:18,}} onPress={handleRequestGo}>Chamar Reboque</Text>
                </TouchableOpacity> 
                } 
             </View>
            
       </View>
       

      <AddressModal
     title={modaltitle}
     visible={modalvisible}
     visibleAction={setModalVisible}
     field={modalField}
     clickAction={handleModalClick}
     />
      
              </>      
</View>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  
  Rotacont: {
    position:'absolute', left:"3%",height:"3%",top:30,
    width:"94%",
    height:150,
    backgroundColor: "#fff",
    borderRadius:16,
    paddingBottom:1,
    paddingLeft:1,
    paddingRight:1,
  },

  viewdetail:{
      flexDirection: "row",
      position:'absolute',left:"3%",height:"3%",bottom:60,
      width:"94%",
      height:100,
  },
  viewdetailz:{
    flexDirection: "column",
    position:'absolute',left:"90%",height:"3%",top:110,
    width:"94%",
    height:100,
},

  viewdetails:{
      alignItems:'center',
      flexDirection: "row",
      marginTop:5,
      width:"100%",
      height:"50%",
      backgroundColor: 'white',
      opacity: 0.7,
      paddingTop:1,
  },
  viewbtn:{
      flexDirection:'row',
      justifyContent:'center',
      borderRadius:30,
      width:"100%",
      height:50,
      borderWidth:1,
      borderColor:'#131313:rgba(0,0,0,0.2)',
      backgroundColor: '#eee:rgba(0,0,0,0.1)',
  },

  bntchamar:{
      position:'absolute',left:"7%",height:"99%", top:1,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:30,
      backgroundColor:"#000",
      marginLeft:45,
      width:"80%",
      height:45,
  },
  bntsair:{
    position:'absolute',left:"1%",height:"99%", top:1,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:30,
    backgroundColor:"#000",
    width:45,
    height:45,
},

  bntc:{
    alignItems:'center',
    justifyContent:'center',
    borderRadius:30,
    backgroundColor:"#c20000",
    width:30,
    height:30,
},

  RotaPointa:{
   width:140,
   height:20,
   marginBottom:2,
   flexDirection:'row',
   alignContent:'center',
   backgroundColor:"#eee",
   borderRadius:13,
  },

  RotaPointab:{
    width:"98%",
    height:20,
    marginBottom:2,
    flexDirection:'row',
    alignContent:'center',
    backgroundColor:"#eee",
    borderRadius:13,
   },

  
  RotaPoin:{
      width:20,
      height:20,
      backgroundColor:"#000",
      borderRadius:13,
     },

     RotaPoinn:{
      width:20,
      height:20,
      backgroundColor:"#EEE000",
      borderRadius:13,
     },

  RotaOrig:{
   justifyContent:'center',
   height:"50%",
   padding:5,
   borderBottomColor:"#eee",
   borderBottomWidth:1,
  },

  RotaDest:{
      justifyContent:'center',
      height:"50%",
      padding:5,
      borderBottomColor:"#eee",
      borderBottomWidth:1,
  },

  RotaLabel:{
      flexDirection:'row',
      height:"100%",
  },
  CampoLabel:{
     width:"100%"
  },
  textvaluea:{
    fontSize:15,
    color:"#131313"
},
LoadingArea:{
  position:'absolute',left:0,top:0,right:0,bottom:0,
  backgroundColor:'#000 rgba(0,0,0,0.5)',
  justifyContent:'center',
  alignItems:'center',
}

});