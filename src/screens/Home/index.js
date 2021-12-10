import  React, {useEffect, useRef, useState} from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { MapsAPI } from '../../apigoogle';
import Geocoder from 'react-native-geocoding';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';




export default function Home() {
  const map = useRef();
  
   const [regiaomap, setRegiaomap] = useState({
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

    useEffect(() => {
     Geocoder.init(MapsAPI ,{language:'pt-br' });
     getMyCurrentPosition();
      },[]);

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

               setToLoc(loc);
               setFromLoc(loc);
           }
          
           
        }, (error)=>{
            

        });
        }

  

  
  return (
    <View style={styles.container}>
      <MapView 
       ref={map}
       style={{width:'100%', height:'100%'}}
       showsUserLocation={true}
       loadingEnabled={true}
       camera={toLoc}
        ></MapView>
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
  

});