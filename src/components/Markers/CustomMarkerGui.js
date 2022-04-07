import React from 'react'
import {View, StyleSheet, Image } from 'react-native'


const CustomMarkerGui = ({item}) => {
    return (
        <View style = {styles.roundMarkerGui}>
            <Image style = {styles.roundImageGui} source = {{uri: item.markerImage}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    roundMarkerGui: {
        height: 60,
        width: 60,  
    },
    roundImageGui: {
        height: 50,
        width: 50,
    }

})

export default CustomMarkerGui