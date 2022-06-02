import React from 'react';
import {View, StyleSheet, Image,Text } from 'react-native';


const CustomMarker = ({item}) => {
    return (
        <View style = {styles.roundMarker}>
            <Text style={styles.textlogo}>Oficina</Text>
            
          
        </View>
    )
}

const styles = StyleSheet.create({
    roundMarker: {
        height: 50,
        width: 50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#FA9C08',
        borderRadius:25
    },
    roundImage: {
        height: 50,
        width: 50,
        borderRadius: 25
    },
    textlogo:{
        fontSize:12,
        fontWeight:'bold',
        color:"#fff",

    },
    textDesconto:{
        fontSize:10,
        fontWeight:'bold',
        color:"#fff",

    },
})

export default CustomMarker