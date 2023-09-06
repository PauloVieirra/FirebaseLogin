import React, {useState, useEffect} from "react";
import {Modal,Text, ScrollView} from 'react-native';
import styled from "styled-components/native";
import { MapsAPI } from "../../services/apigoogle";
import Geocoder from "react-native-geocoding";
import { markeron } from "../../services/mapData";

const ModalArea = styled.View`
width:100%;
height:60%;
background-color:#eee;
align-items:center;
`;

const Head = styled.View`
width:100%;
height:80px;
justify-content:center;
align-items:center;
`; 

const ModalAds = styled.View`
width:100%;
height:80%;
background-color:#eee;
`; 

const ModalHeader = styled.View`
flex-direction:row;
width:90%;
height:50px;
background-color:#fff;
border-radius:25px;
justify-content:center;
align-items:center;
padding:1px;
`; 

const ModalClose = styled.TouchableHighlight`
width:25px;
height:25px;
justify-content:center;
align-items:center;
background-color:#FA1208;
border-radius:20px;
`;

const ModalCloseText = styled.Text`
color:#fff;
`;

const ModalInput = styled.TextInput`
width:250px;
margin-left:20px;
font-size:18px;
color:#999;
font-weight:bold;
`;

const ModalResults = styled.View`
width:96%;
height:80%;
`;

const ModalResult = styled.TouchableHighlight`
padding:15px;
`;

const ModalResulsText = styled.Text`
color:#000;
font-size:14px;
`;

let timer;

export default (props,route) => {

    const [results, setResults] = useState ([]);
    const [searchText, setSearchText] = useState('');

    useEffect(()=>{
        Geocoder.init(MapsAPI, {language:'pt-br'});
     }, []);

     useEffect(()=>{
        if(searchText){
         if(timer){
           clearTimeout(timer);
      }
        timer = setTimeout(async()=>{
        console.log("PESQUISANDO")
        const geo = await Geocoder.from(searchText);
        console.log("RESULTADO", geo.results.length);
            if(geo.results.length > 0) {
             let tmpResults = [];
             for(let i in geo.results){
              tmpResults.push({
               address:geo.results[i].formatted_address,
               latitude:geo.results[i].geometry.location.lat,
               longitude:geo.results[0].geometry.location.lng
               });

        }

        setResults(tmpResults); 
          }else{
         setResults([]);
          }
        }, 1000);
     }
    }, [searchText]);

     const handleCloseAction = () => {
         props.visibleAction(false);
     }

     

     const handleClose = () => {
         setResults([]);
         setSearchText('');
     }
     const handleResultClick = (item) => {
        props.clickAction(props.field,item);
        props.visibleAction(false);
     }

    return (
        <Modal
           animationType="slide"
           transparent={false}
           visible={props.visible}
           onShow={handleClose}
        >

            <ModalArea>
                <Head>
                 <ModalHeader>
                     <ModalClose onPress={handleCloseAction}>
                         <ModalCloseText>X</ModalCloseText>
                      </ModalClose>
                     <ModalInput value={searchText} onChangeText={t=>setSearchText(t)} autoFocus={true} placeholder={props.title} placeholderTextColor="#999"></ModalInput>
                 </ModalHeader>
                </Head>
                 <ModalResults>
                     <ScrollView>
                     {results.map((i,k)=>(
                        <ModalResult key={k} onPress={() => handleResultClick(i)}>
                         <ModalResulsText>{i.address}</ModalResulsText>
                        </ModalResult>
                     ))}
                     </ScrollView>
                 </ModalResults>
                 <ModalAds>

                 <Text>123{markeron}</Text>
                            
                            
                  

                 </ModalAds>
            </ModalArea>

        </Modal>
    );
}