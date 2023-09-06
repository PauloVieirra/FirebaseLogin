import React from "react";
import {createStackNavigator,TransitionPresets} from '@react-navigation/stack';
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import Recovery from "../screens/Recovery";

const AuthStack = createStackNavigator();

function AuthRoutes(){
    return(
       <AuthStack.Navigator>
          <AuthStack.Screen 
           name="SignIn" 
           component={SignIn}
           options={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS, 
          }}
           />
           
          <AuthStack.Screen 
           name="SignUp" 
           component={SignUp}
           options={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS, 
            }}/>
      
         <AuthStack.Screen 
           name="Recovery" 
           component={Recovery}
           options={{title:false}}
           />

       
       </AuthStack.Navigator>
    );
}

export default AuthRoutes;
