import React from 'react';
import { Text,View, StyleSheet } from 'react-native';

export default function Pickup() {
 return (
 <View style={styles.container}>
     <Text>Escolha</Text>
 </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
      paddingTop: 50,
      backgroundColor:"#000"
    },
    stretch: {
      width: 50,
      height: 200,
      resizeMode: 'stretch',
    },
  });