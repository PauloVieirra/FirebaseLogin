import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import Pickup from "../screens/Pickup/index";
import Home from "../screens/Home";
import Market from "../screens/Market";
import Gestao from "../screens/Gestao";
import AddressModal from "../components/modalhome/AddressModal";
import Motorista from "../screens/Motorista";

//Screns ADM
import Amigao from "../screens/Gestao/screensADM/Amigao";
import Guinchos from "../screens/Gestao/screensADM/Guinchos";
import Limpeza from "../screens/Gestao/screensADM/Limpeza";
import Lojas from "../screens/Gestao/screensADM/Lojas";


const AppStack = createStackNavigator();

function AppRoutes(){
    return(
      
       <AppStack.Navigator>
           <AppStack.Screen name="Pickup" component={Pickup}options={{headerShown: false}}/>
           <AppStack.Screen name="Home" component={Home}options={{headerShown: false}}/>
           <AppStack.Screen name="Market" component={Market}options={{headerShown: false}}/>
           <AppStack.Screen name="Gestao" component={Gestao}options={{headerShown: false}}/>
           <AppStack.Screen name="AddressModal" component={AddressModal}options={{headerShown: false}}/>
           <AppStack.Screen name="Motorista" component={Motorista} options={{title:false}}/>
           
           <AppStack.Screen name="Amigao" component={Amigao}options={{headerShown: false}}/>
           <AppStack.Screen name="Guinchos" component={Guinchos}options={{headerShown: false}}/>
           <AppStack.Screen name="Limpeza" component={Limpeza}options={{headerShown: false}}/>
           <AppStack.Screen name="Lojas" component={Lojas}options={{headerShown: false}}/>
           
       </AppStack.Navigator>
     
    );
}

export default AppRoutes;