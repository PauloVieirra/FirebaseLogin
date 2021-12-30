import React, {useState, useEffect} from "react";
import {Modal, ScrollView} from 'react-native';
import styled from "styled-components/native";
import { MapsAPI } from "../../apigoogle";
import Geocoder from "react-native-geocoding";

const ModalArea = styled.View`
flex:1;
margin-top:30;
background-color:#eee;
border-top-left-radius:30px;
border-top-right-radius:30px;
`;

const ModalHeader = styled.View`
flex-direction:row;
padding:20px;
`;

const ModalClose = styled.TouchableHighlight`
width:40px;
height:40px;
justify-content:center;
align-items:center;
background-color:#eee;
border-radius:20px;
`;

const ModalCloseText = styled.Text``;

const ModalInput = styled.TextInput`
width:250px;
margin-left:20px;
font-size:18px;
color:#999;
font-weight:bold;
`;

const ModalResults = styled.View`
width:100%;
height:100%;
background-color:#fff;
`;

const ModalResult = styled.TouchableHighlight`
padding:15px;
`;

const ModalResulsText = styled.Text`
color:#000;
font-size:14px;
`;

let timer;

export default (props) => {

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
                 <ModalHeader>
                     <ModalClose onPress={handleCloseAction}>
                         <ModalCloseText>X</ModalCloseText>
                      </ModalClose>
                     <ModalInput value={searchText} onChangeText={t=>setSearchText(t)} autoFocus={true} placeholder={props.title} placeholderTextColor="#999"></ModalInput>
                 </ModalHeader>
                 <ModalResults>
                     <ScrollView>
                     {results.map((i,k)=>(
                        <ModalResult key={k} onPress={() => handleResultClick(i)}>
                         <ModalResulsText>{i.address}</ModalResulsText>
                        </ModalResult>
                     ))}
                     </ScrollView>
                 </ModalResults>
            </ModalArea>

        </Modal>
    );
}