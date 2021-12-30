import React from "react";
import {createStackNavigator} from '@react-navigation/stack';



import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import Splash from "../componests/Splash";


const AuthStack = createStackNavigator();

function AuthRoutes(){
    return(
       <AuthStack.Navigator>

         
         <AuthStack.Screen 
           name="SignIn" 
           component={SignIn}
           options={{headerShown: false}}
           />
           
         <AuthStack.Screen 
           name="SignUp" 
           component={SignUp}
           />

       
       </AuthStack.Navigator>
    );
}

export default AuthRoutes;
