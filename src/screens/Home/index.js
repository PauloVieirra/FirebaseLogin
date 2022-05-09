import  React, {useEffect, useState} from 'react';
import MapView,{ PROVIDER_GOOGLE } from 'react-native-maps';
import {View,Platform,Text,Dimensions,StyleSheet, TouchableHighlight,TouchableOpacity,Animated,Image} from 'react-native';
import styles from './styled';
import { MapsAPI } from '../../services/apigoogle';
import MapViewDirections from 'react-native-maps-directions';
import useApi from '../../services/requestApi';
import Geocoder from 'react-native-geocoding';
import AddressModal from '../../components/modalhome/AddressModal';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
import  {markers} from '../../../services/mapData';
import StarRating from '../../components/StarRating';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

const { width } = Dimensions.get("window");
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;


export default function Home() {

  
  const api = useApi();
  const navigation = useNavigation();

  const [fromLoc, setFromLoc] = useState({});
  const [toLoc, setToLoc] = useState({});
  const [showDirections, setShowDirections] = useState(false);
  const [requestDistance, setRequestDistance] = useState(0);
  const [requesTime, setRequestTime] = useState(0);
  const [requestPrice, setRequestPrice] = useState(0);
  const [modaltitle, setModalTitle] = useState('');
  const [modalvisible, setModalVisible] = useState (false);
  const [modalField, setModalField] = useState ('');
  const [controller, setController] = useState ('f');
  const [setLoading] = useState (false);
  
  const [mapLoc, setMapLoc] = useState({
    center:{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.000904,
      longitudeDelta: 0.000905,
      },
        zoom:10,
        pitch:0,
        altitude:0,
        heading:0  
  });

   const initialMapState = {
    markers,
    categories: [
      { 
        name: 'Ford', 
        
      },
      {
        name: 'Honda',
        
      },
      {
        name: 'Fiat',
        
      },
      {
        name: 'Citroen',
        
      },
      {
        name: 'Volks',
        
      },
  ],
    region: {
      latitude: 22.62938671242907,
      longitude: 88.4354486029795,
      latitudeDelta: 0.04864195044303443,
      longitudeDelta: 0.040142817690068,
    },
  };

   const [state, setState] = React.useState(initialMapState);
   let mapIndex = 0;
   let mapAnimation = new Animated.Value(0);

   useEffect(() => {
    mapAnimation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
      if (index >= state.markers.length) {
        index = state.markers.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(regionTimeout);

      const regionTimeout = setTimeout(() => {
        if( mapIndex !== index ) {
          mapIndex = index;
          const { coordinate } = state.markers[index];
          map.current.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: state.region.latitudeDelta,
              longitudeDelta: state.region.longitudeDelta,
            },
            350
          );
        }
      }, 10);
    });
  });

  const interpolations = state.markers.map((marker, index) => {
    const inputRange = [
      (index - 1) * CARD_WIDTH,
      index * CARD_WIDTH,
      ((index + 1) * CARD_WIDTH),
    ];

    const scale = mapAnimation.interpolate({
      inputRange,
      outputRange: [1, 1.1, 1],
      extrapolate: "clamp"
    });

    return { scale };
  });

  const map = React.useRef(null);
  const _scrollView = React.useRef(null);

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
                zoom:13,
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
          setModalVisible(true);}

      
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
                 bottom:150,
                 top:360,
            }});

         setRequestDistance(r.distance);
         setRequestTime(r.duration);
  const priceReq = await api.getRequestPrice(r.distance);
         if(!priceReq.error){  setRequestPrice( priceReq.price);}}

         

  const handleRequestGo = async () => {
         setLoading(true);
  const driver = await api.findDriver({
               fromlat:fromLoc.center.latitude,
               fromlng:fromLoc.center.longitude,
               tolat:toLoc.latitude,
               tolng:toLoc.longitude});

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
            zoom:18,
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

  const onMarkerPress = (mapEventData) => {
  const markerID = mapEventData._targetInst.return.key;
      
          let x = (markerID * CARD_WIDTH) + (markerID * 20); 
          if (Platform.OS === 'ios') {
            x = x - SPACING_FOR_CARD_INSET;
          }
      
          _scrollView.current.scrollTo({x: x, y: 0, animated: true});
        }


  return (
    <View style={styles.container}>
      <MapView 
       ref={map}
       provider={PROVIDER_GOOGLE}
       style={{width:'100%', height:'100%'}}
       followsUserLocation={true}
       showsMyLocationButton={true}
       loadingEnabled={true}
       camera={mapLoc}
       onRegionChangeComplete={handleMapChange}
        >  
       
        {state.markers.map((marker, index) => {
          const scaleStyle = {
            transform: [
              {
                scale: interpolations[index].scale,
              },
            ],
          };
   return (
            
    <MapView.Marker key={index} coordinate={marker.coordinate} onPress={(e)=>onMarkerPress(e)}>
             
      <Animated.View style={[styles.markerWrap]}>
          <Animated.Image
             source={require('../../assets/map_marker.png')}
             style={[styles.marker, scaleStyle]}
             resizeMode="cover"
          />
          </Animated.View>
          </MapView.Marker>
        );
    })}
         
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
      
      <View style={{
       width:"100%", 
       height:80,
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'center',
       }} >
     
      <TouchableOpacity style={styles.bntsair}onPress={() => navigation.navigate('Pickup')}>
      <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>

      <TouchableHighlight onPress={handleFromClick} underlayColor={"#000"} style={styles.RotaOrig}>
     <View style={styles.CampoLabel}>
          {fromLoc.name && 
     <View style={styles.RotaPointa}>
     <View style={styles.RotaPoin}/>
         <Text style={{marginLeft:10}}>Ponto de partida</Text>
     </View>
          }

          {fromLoc.name && 
            <Text style={styles.textvaluea}>{fromLoc.name}</Text>
          }
          
          {!fromLoc.name &&
             <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}} >
               <View style={styles.RotaPoinOff}/>
             <Text style={{marginRight:70,fontSize:11}}>Procurando sua localização....</Text>
             </View>
          }
          </View>
      </TouchableHighlight>
     </View>
    
     <View style={{
       width:"100%", 
       height:80,
       alignItems:'center',
       justifyContent:'center',
       }} >

      {!toLoc.name &&
       <View style={{
        marginTop:10,
        marginBottom:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:"90%",
        height:60,
        backgroundColor:'#000 rgba(0,0,0,0.9)',
        borderRadius:12,
        borderWidth:1,
        borderColor:'#000 rgba(0,0,0,0.2)',
      }}>              
                      
     <View style={{
        width:"10%", 
        height:"100%",
        position:'absolute', left:2,
        borderTopLeftRadius:30,
        borderBottomLeftRadius:30,
        justifyContent:'center',
        alignItems:'center'
       }}>
        <FontAwesome name="search" size={18} color="#fff" />
     </View>
        
        <TouchableHighlight onPress={handleToClick}>
         <Text style={{marginLeft:8, fontSize:20, color:"#fff"}}>Chamar guincho</Text>
        </TouchableHighlight>
       </View>
        }

           
           {toLoc.name &&   
           <TouchableHighlight onPress={handleToClick} underlayColor={"#000"} style={styles.RotaDest}>
     <View style={styles.CampoLabel}>
           {toLoc.name &&
     <View style={styles.RotaPointab}>
     <View style={styles.RotaPoinn}/>
            <Text style={{marginLeft:10}}>Seu destino é:</Text>
     </View>
           }
           {toLoc.name &&
     <View style={{
              width:"100%",
              height:"30%",
              justifyContent:'center',
              marginLeft:20
              }}>
              <Text style={{marginLeft:1, fontSize:11}}>{toLoc.name}</Text>
     </View>
              }      
     </View>
           </TouchableHighlight>
            }

            
     </View>

     </View>

     {toLoc.name && 
     
     <View style={styles.viewdetails}>
         
     <View style={styles.Viewdet}> 
             <Text style={{color:"#000", fontSize:11, }}>Distancia</Text>
             <Text style={{color:"#000", fontSize:14,fontWeight: "bold"}}>{requestDistance > 0?`${requestDistance.toFixed(1).replace('.',',')}km`:'--'}</Text>
     </View>
     <View style={styles.Viewdet}> 
             <Text style={{color:"#000", fontSize:11,}}>Tempo</Text>
             <Text style={{color:"#000", fontSize:14,fontWeight: "bold"}}>{requesTime > 0?`${requesTime.toFixed(0)}mins`:'--'}</Text>
     </View>
     <View style={styles.Viewdet}>
             <Text style={{color:"#000", fontSize:11,}}>Valor</Text>
             <Text style={{color:"#000", fontSize:14,fontWeight: "bold"}}>{requestPrice > 0?`R$ ${requestPrice.toFixed(2).replace('.',',')}`:'--'}</Text>
     </View>
     
       {toLoc.name && 
     <View style={styles.Viewdet}>
        <TouchableOpacity style={styles.bntc}onPress={handleRequestCancel}>
             <Text style={{color:"#eee", fontSize:15,}}  >Cancelar</Text>
        </TouchableOpacity> 
     </View>
       }

     </View>
       } 
    
     <View style={styles.rodape}>
          
       {!toLoc.name && 
        <Animated.ScrollView
        ref={_scrollView}
        horizontal
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        style={stylex.scrollView}
        pagingEnabled
        snapToInterval={CARD_WIDTH + 20}
        snapToAlignment="center"
        contentInset={{ // iOS only
        top:0,
        left:SPACING_FOR_CARD_INSET,
        bottom:0,
        right:SPACING_FOR_CARD_INSET
      }}
       contentContainerStyle={{
       paddingHorizontal: Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0
      }}
        onScroll={Animated.event(
        [
         {
            nativeEvent: {
            contentOffset: {
            x: mapAnimation,
             }
            },
           },
          ],
          {useNativeDriver: true}
       )}>

        {state.markers.map((marker, index) =>(
     <View style={stylex.card} key={index}>
        <Image 
          source={marker.image}
          style={styles.cardImage}
          resizeMode="cover"
        />
     <View style={styles.textContent}>
         <Text numberOfLines={1} style={styles.cardtitle}>{marker.title}</Text>
              <StarRating ratings={marker.rating} reviews={marker.reviews} />
         <Text numberOfLines={1} style={styles.cardDescription}>{marker.description}</Text>
     <View style={styles.button}>
         <TouchableOpacity onPress={() => navigation.navigate('Motorista')}
            style={[styles.signIn, {
            borderColor: '#FF6347',
            borderWidth: 1
          }]}
         >
                 
           <Text style={[styles.textSign, {
                    color: '#FF6347'
                  }]}>Ver mais</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
      }
      
      {toLoc.name &&
     <View style={styles.viewbtn}>
          <TouchableOpacity style={styles.bntchamar}>
          <Text style={{color:"#FFF", fontSize:18,}} onPress={handleRequestCancel}>Confirmar guincho</Text>
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
    
  );}

  const stylex = StyleSheet.create({
    container: {
      flex: 1,
    },
    searchBox: {
      position:'absolute', 
      marginTop: Platform.OS === 'ios' ? 40 : 20, 
      flexDirection:"row",
      backgroundColor: '#fff',
      width: '90%',
      alignSelf:'center',
      borderRadius: 5,
      padding: 10,
      shadowColor: '#ccc',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 10,
    },
    chipsScrollView: {
      position:'absolute', 
      top:Platform.OS === 'ios' ? 90 : 80, 
      paddingHorizontal:10
    },
    chipsIcon: {
      marginRight: 5,
    },
    chipsItem: {
      flexDirection:"row",
      backgroundColor:'#fff', 
      borderRadius:20,
      padding:8,
      paddingHorizontal:20, 
      marginHorizontal:10,
      height:35,
      shadowColor: '#ccc',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 10,
    },
    scrollView: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      paddingVertical: 10,
    },
    endPadding: {
      paddingRight: width - CARD_WIDTH,
    },
    card: {
      // padding: 10,
      elevation: 2,
      backgroundColor: "#FFF",
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      marginHorizontal: 10,
      shadowColor: "#000",
      shadowRadius: 5,
      shadowOpacity: 0.3,
      shadowOffset: { x: 2, y: -2 },
      height: CARD_HEIGHT,
      width: CARD_WIDTH,
      overflow: "hidden",
    },
    cardImage: {
      flex: 3,
      width: "100%",
      height: "100%",
      alignSelf: "center",
    },
    textContent: {
      flex: 2,
      padding: 10,
    },
    cardtitle: {
      fontSize: 12,
      // marginTop: 5,
      fontWeight: "bold",
    },
    cardDescription: {
      fontSize: 12,
      color: "#444",
    },
    markerWrap: {
      alignItems: "center",
      justifyContent: "center",
      width:50,
      height:50,
    },
    marker: {
      width: 30,
      height: 30,
    },
    button: {
      alignItems: 'center',
      marginTop: 5
    },
    signIn: {
        width: '100%',
        padding:5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3
    },
    textSign: {
        fontSize: 14,
        fontWeight: 'bold'
    }
  });
  