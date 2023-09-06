import React, { useContext } from 'react';
import { View, StyleSheet, Text, Switch, TouchableOpacity } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { AuthContext } from '../../contexs/auth';
import { AntDesign } from '@expo/vector-icons';

export default function Header() {
  const navigation = useNavigation();

  const { darkMode, setDarkMode } = useContext(AuthContext); 

  const toggleDarkMode = () => {
    setDarkMode(!darkMode); 
  };

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer()); // Abra o menu lateral
  };

  return (
    <View style={styles.constainer}>
       
      <View style={styles.viewIconS}>
     
       <View>
         <Switch
          value={darkMode}
          style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
          onValueChange={toggleDarkMode}
        />
       </View>
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: {
    width: "100%",
    height: 80,
    paddingTop:20,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    position:'absolute',
    zIndex:1,
    top:0,
    left:0,
  },
  viewIcon: {
    width: 40,
    height:'100%',
    alignItems:'center',
    justifyContent:'center',
  },
  viewIconS: {
    flexDirection:'column',
    position:'absolute',
    zIndex:100,
    right:20,
    top:30,
    width: 40,
    alignItems:'center',
    justifyContent:'center',
  },
});
