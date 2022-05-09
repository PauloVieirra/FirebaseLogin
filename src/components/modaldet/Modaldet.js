import React from "react";
import {View,Modal,Text, ScrollView} from 'react-native';
import styles from "./style";

export default (props) => {

    
    return (
        <Modal
           animationType="slide"
           transparent={false}
           visible={props.visible}
        >

           <View styles={styles.container}>

           </View>

        </Modal>
    );
}