
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

  //Basic Global
    background: {
      flex: 1,
      backgroundColor:"#ffffff",
    },
    container: {
      height:'70%',
      paddingTop:80,
      justifyContent:'flex-end',
      alignItems:'center',
    },
    keyboard:{
      flex:1,
      justifyContent:'flex-start',
      width:'100%',
    },

    //Inputs
    areaInput: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'flex-end',

      width: '90%',
      height:'100%',
     
    },
    viewinput:{
      flexDirection:'row',
      width:'90%',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor: '#fdfdfd',
      borderRadius:8,
      marginBottom:15,
  },
  
    input: {
      fontSize: 17,
      color: '#353535f9',
      padding: 10,
      borderRadius: 8,
      width: '90%',
      
    },
   
    shadowProp: {
      shadowColor: 'rgba(82, 82, 82, 0.30)',
      shadowOffset: {width: 8, height: 8},
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 3,
    },
    textPrimary: {
      fontSize: 20,
    },
    textTittlePrimary: {
      fontSize: 26,
      fontWeight:'700',
      color:"#363636aa"
    },
    errorMessage: {
      color: 'red',
      marginBottom: 10,
    },
    viewtittle:{
      width:'100%',
      height:60,
      justifyContent:'center',
      alignItems:'flex-start',
      position:'absolute',
      paddingHorizontal:36,
      zIndex:1,
      top: 60,
    },
    textglobalPrimary:{
      fontSize:16,
      color:"#222222bb"
    },
    textglobalSecundary:{
      fontSize:16,
      color:"#181818ba"
    },
   
  //Icones
  icon:{
    color:'#4545457f'
   },

  //Botoes
  btnPrimary: {
    width: '80%',
    height: 45,
    backgroundColor: '#EBA054',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  btnSecundary: {
    width: '80%',
    height: 45,
    borderColor:'#EBA054',
    borderWidth:1,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  //Mensagens de erro 
  inputError: {
    borderColor: 'red', 
    borderWidth: 1,
  },

  });


  export default styles;