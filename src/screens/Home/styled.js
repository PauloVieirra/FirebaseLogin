import { StyleSheet, Dimensions } from 'react-native';


const styles= StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },

      Rotacont: {
        position:'absolute', left:"3%",height:"3%",top:30,
        width:"94%",
        height:150,
        backgroundColor: "#fff",
        borderRadius:16,
        paddingBottom:1,
        paddingLeft:1,
        paddingRight:1,
      },
    
      viewdetail:{
          flexDirection:'row',
          position:'absolute',bottom:60,
          width:"100%",
          height:100,
      },
      viewespecialista:{
        flexDirection:'row',
        position:'absolute',bottom:10,
        width:"100%",
        height:90,
        backgroundColor:'#000:rgba(0,0,0,0.1)',
    },
      viewdetailz:{
        flexDirection: "column",
        position:'absolute',left:"90%",height:"3%",top:110,
        width:30,
        height:30,
    },
    
      viewdetails:{
          alignItems:'center',
          flexDirection: "row",
          marginTop:5,
          width:"100%",
          height:"50%",
          backgroundColor: 'white',
          opacity: 0.7,
          paddingTop:1,
      },
      viewbtn:{
          alignItems:'center',
          flexDirection:'row',
          justifyContent:'center',
          borderRadius:30,
          marginLeft:10,
          width:"80%",
          height:50,
          borderWidth:1,
          borderColor:'#131313:rgba(0,0,0,0.2)',
          backgroundColor: '#eee:rgba(0,0,0,0.1)',
      },
    
       viewbtnsair:{
          flexDirection:'row',
          justifyContent:'center',
          width:"15%",
          borderTopRightRadius:30,
          borderBottomRightRadius:30,
          height:50,
          borderWidth:1,
          borderColor:'#131313:rgba(0,0,0,0.2)',
          backgroundColor: '#eee:rgba(0,0,0,0.1)',
      },
    
      bntchamar:{
          position:'absolute', top:1,
          alignItems:'center',
          justifyContent:'center',
          borderRadius:30,
          backgroundColor:"#000",
          width:"98%",
          height:45,
      },
      bntsair:{
        position:'absolute',left:"15%",height:"40%", top:1,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
        backgroundColor:"#000",
        width:45,
        height:45,
    },
    
      bntc:{
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
        backgroundColor:"#c20000",
        width:25,
        height:25,
    },
    
      RotaPointa:{
       width:140,
       height:20,
       marginBottom:2,
       flexDirection:'row',
       alignContent:'center',
       backgroundColor:"#eee",
       borderRadius:13,
      },
    
      RotaPointab:{
        width:"98%",
        height:20,
        marginBottom:2,
        flexDirection:'row',
        alignContent:'center',
        backgroundColor:"#eee",
        borderRadius:13,
       },
    
      
      RotaPoin:{
          width:20,
          height:20,
          backgroundColor:"#000",
          borderRadius:13,
         },
    
         RotaPoinn:{
          width:20,
          height:20,
          backgroundColor:"#EEE000",
          borderRadius:13,
         },
    
      RotaOrig:{
       justifyContent:'center',
       height:"50%",
       padding:5,
       borderBottomColor:"#eee",
       borderBottomWidth:1,
      },
    
      RotaDest:{
          justifyContent:'center',
          height:"50%",
          padding:5,
          borderBottomColor:"#eee",
          borderBottomWidth:1,
      },
    
      RotaLabel:{
          flexDirection:'row',
          height:"100%",
      },
      CampoLabel:{
         width:"100%"
      },
      textvaluea:{
        fontSize:15,
        color:"#131313"
    },
    LoadingArea:{
      position:'absolute',left:0,top:0,right:0,bottom:0,
      backgroundColor:'#000 rgba(0,0,0,0.5)',
      justifyContent:'center',
      alignItems:'center',
    },
    pinoffice:{
      width:30,
      height:30,
      backgroundColor:"#131213"
    },

    Viewdet:{
      flex:1,
      alignItems:'center',
    },  
 
   
  });

  export default styles;