import React from "react";
import {ScrollView, SafeAreaView,TouchableOpacity, TouchableOpacityBase, Text} from 'react-native';
import { DrawerItems } from "react-navigation-drawer";
import styles from './styled';

export default (props) => {

    const handleHome = () => {
        props.navigation.navigate('Pickout');
    }


    return (
        <ScrollView>
            <SafeAreaView style={styles.GeneralsGuie}>
               <DrawerItems {...props} />
               <TouchableOpacity onPress={handleHome}>
               <Text>Teste</Text>
               </TouchableOpacity>
             </SafeAreaView>
        </ScrollView>

    );
}

