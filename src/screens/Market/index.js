import * as React from 'react';
//import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

  

export default function Market() {
 
  return (
    <View style={styles.container}>
      <Text>123</Text>
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