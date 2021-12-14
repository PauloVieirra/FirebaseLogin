import React from "react";
import {createStackNavigator} from '@react-navigation/stack';

import Pickup from "../screens/Pickup/index";
import Home from "../screens/Home";
import CenterAdm from "../screens/CenterAdm";

const AppStack = createStackNavigator();

function AppRoutes(){
    return(
       <AppStack.Navigator>
           <AppStack.Screen name="Pickup" component={Pickup}options={{headerShown: false}}/>
           <AppStack.Screen name="Home" component={Home}options={{headerShown: false}}/>
           <AppStack.Screen name="CenterAdm" component={CenterAdm}/>
       </AppStack.Navigator>
    );
}

export default AppRoutes;