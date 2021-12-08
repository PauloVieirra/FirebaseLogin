import React from "react";
import {createStackNavigator} from '@react-navigation/stack';

import Pickup from "../screens/Pickup/index";

const AppStack = createStackNavigator();

function AppRoutes(){
    return(
       <AppStack.Navigator>
           <AppStack.Screen name="Pickup" component={Pickup}/>
       </AppStack.Navigator>
    );
}

export default AppRoutes;