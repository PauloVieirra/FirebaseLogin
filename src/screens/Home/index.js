import  React, {useEffect, useRef, useState} from 'react';
import MapView from 'react-native-maps';
import {View,Text, TouchableHighlight,TouchableOpacity} from 'react-native';
import styles from './styled';
import { MapsAPI } from '../../services/apigoogle';
import MapViewDirections from 'react-native-maps-directions';
import useApi from '../../services/requestApi';
import Geocoder from 'react-native-geocoding';
import AddressModal from '../../components/modalhome/AddressModal';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
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
          zoom:18,
          pitch:0,
          altitude:0,
          heading:0
          
    });

    const [fromLoc, setFromLoc] = useState({});
    const [toLoc, setToLoc] = useState({});
    const  [showDirections, setShowDirections] = useState(false);
    const  [requestDistance, setRequestDistance] = useState(0);
     const [requesTime, setRequestTime] = useState(0);
     const [requestPrice, setRequestPrice] = useState(0);
     const [modaltitle, setModalTitle] = useState('');
     const [modalvisible, setModalVisible] = useState (false);
     const [modalField, setModalField] = useState ('');

     const [setLoading] = useState (false);

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
                   zoom:18,
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
                bottom:200,
                top:310,
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

         const handleMapChange = async () => {
           const cam = await map.current.getCamera();
           cam.altitude = 0;
           setMapLoc(cam);
         }

  

  
  return (
    <View style={styles.container}>
      <MapView 
       ref={map}
       style={{width:'100%', height:'100%'}}
       showsUserLocation={true}
       loadingEnabled={true}
       camera={mapLoc}
       onRegionChangeComplete={handleMapChange}
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
               <Text style={{marginLeft:1}}>Procurando sua localização....</Text>
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
                        <Text style={{marginLeft:1}}>Você pode clicar aqui para chamar um guincho</Text>
                      }

                    {toLoc.name &&
                        <Text style={{marginLeft:1}}>{toLoc.name}</Text>
                       } 
           </View>
        </View>
     </TouchableHighlight>

     {toLoc.name && 
        <View style={styles.viewdetails}>
         
            <View style={styles.Viewdet}> 
                <Text style={{color:"#000", fontSize:15, }}>Distancia</Text>
                <Text style={{color:"#000", fontSize:17,fontWeight: "bold"}}>{requestDistance > 0?`${requestDistance.toFixed(1).replace('.',',')}km`:'--'}</Text>
            </View>
            <View style={styles.Viewdet}> 
                <Text style={{color:"#000", fontSize:15,}}>Tempo</Text>
                <Text style={{color:"#000", fontSize:17,fontWeight: "bold"}}>{requesTime > 0?`${requesTime.toFixed(0)}mins`:'--'}</Text>
            </View>
            <View style={styles.Viewdet}>
                <Text style={{color:"#000", fontSize:15,}}>Valor</Text>
                <Text style={{color:"#000", fontSize:17,fontWeight: "bold"}}>{requestPrice > 0?`R$ ${requestPrice.toFixed(2).replace('.',',')}`:'--'}</Text>
            </View>
           
        </View>
}
     

             {toLoc.name && 
               <View style={styles.viewdetailz}>
               <TouchableOpacity style={styles.bntc}>
                 <Text style={{color:"#eee", fontSize:15,}} onPress={handleRequestCancel}>X</Text>
               </TouchableOpacity> 
               </View>
              }
          
           
    </View>
    <View style={styles.viewdetail}>
             

             <View style={styles.viewbtnsair}>
                 <TouchableOpacity style={styles.bntsair}onPress={() => navigation.navigate('Pickup')}>
                   <Text style={{color:"#FFF", fontSize:18,}}>Sair</Text>
                   </TouchableOpacity>
             </View>
             {toLoc.name &&
             <View style={styles.viewbtn}>
             <TouchableOpacity style={styles.bntchamar}>
             <Text style={{color:"#FFF", fontSize:18,}} onPress={handleRequestGo}>Chamar Reboque</Text>
             </TouchableOpacity> 
             </View>
             } 
               
          </View>

          <AddressModal
     title={modaltitle}
     visible={modalvisible}
     visibleAction={setModalVisible}
     field={modalField}
     clickAction={handleModalClick}
     />

    </View>
  );
}

