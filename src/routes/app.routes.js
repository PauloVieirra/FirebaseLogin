import React from "react";
import {createStackNavigator} from '@react-navigation/stack';

import Pickup from "../screens/Pickup/index";
import Home from "../screens/Home";

const AppStack = createStackNavigator();

function AppRoutes(){
    return(
       <AppStack.Navigator>
           <AppStack.Screen name="Pickup" component={Pickup}options={{headerShown: false}}/>
           <AppStack.Screen name="Home" component={Home}options={{headerShown: false}}/>
       </AppStack.Navigator>
    );
}

export default AppRoutes;