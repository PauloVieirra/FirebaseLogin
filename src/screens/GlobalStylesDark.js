
import {StyleSheet} from 'react-native';

const stylesDark = StyleSheet.create({

   //Basic Global
   background: {
    flex: 1,
    backgroundColor:"#434957",
  },
  container: {
    width:'100%',
    height:'70%',
    justifyContent:'flex-end',
    alignItems:'center',
  },
  keyboard:{
    flex:1,
    width:'100%',
    height:100,
    paddingTop:'6%'
  },

  //Inputs
  areaInput: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
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
    fontSize: 22,
    color:"#363636"
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
    top: 0,
  },
  textglobalPrimary:{
    fontSize:16,
    color:"#222222bb"
  },
  textglobalSecundary:{
    fontSize:16,
    color:"#ffffffbb"
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

  });


  export default stylesDark;