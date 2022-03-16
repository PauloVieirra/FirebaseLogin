import React, {useContext} from "react";
import { View, ActivityIndicator } from 'react-native';
import { AuthContext } from "../contexs/auth"; 

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

function Routes(){
  const { signeed, loading } = useContext(AuthContext);
  

  if(loading){
    return(
        <View style={{flex:1 ,backgroundColor:"#000"}}>
        <ActivityIndicator/>
   </View>
    )
}

    return(
      signeed ? <AppRoutes/> : <AuthRoutes/>
    );
}

export default Routes;