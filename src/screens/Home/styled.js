import { StyleSheet, Dimensions } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


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
          flexDirection:'column',
          position:'absolute',bottom:1,
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
          height:80,
          backgroundColor:"#eee",
          opacity: 0.9,
          paddingTop:1,
      },
      viewdetailsg:{
          position:'absolute',top:180,
          alignItems:'center',
          flexDirection: "row",
          marginTop:5,
          width:"100%",
          height:80,
          opacity: 0.7,
          paddingTop:1,
    },
      viewbtn:{
          alignItems:'center',
          justifyContent:'center',
          position:'absolute', bottom:20,
          borderRadius:30,
          width:"80%",
          height:50,
          borderWidth:1,
          borderColor:'#131313:rgba(0,0,0,0.2)',
          backgroundColor: '#eee:rgba(0,0,0,0.1)',
      },
    
       viewbtnsair:{
          flexDirection:'row',
          justifyContent:'center',
          position:'absolute', top:200,left:10,
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
        position:'absolute',top:280,left:"3%",
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
    chipsScrollView: {
      bottom:Platform.OS === 'ios' ? 90 : 80, 
      paddingHorizontal:10
    },
    chipsIcon: {
      marginRight: 5,
    },
    chipsItem: {
      flexDirection:"row",
      backgroundColor:'#fff', 
      borderRadius:20,
      padding:8,
      paddingHorizontal:20, 
      marginHorizontal:10,
      height:35,
      shadowColor: '#ccc',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.8,
      shadowRadius: 5,
      elevation: 10,
    },
    rodape:{
      flexDirection:'column',
      alignItems:'center',
      width:"100%",
      height:200,
      position:'absolute',bottom:1,
    },
    scrollView: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      paddingVertical: 10,
    },
    card: {
      elevation: 2,
      backgroundColor: "#fff",
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      marginHorizontal: 10,
      shadowColor: "#000",
      shadowRadius: 5,
      shadowOpacity: 0.3,
      shadowOffset: { x: 2, y: -2 }, 
      height: "100%",
      width: 350,
      overflow: "hidden",
    },
    cardImage: {
      flex: 2,
      width: "100%",
      height: 120,
      alignSelf: "center",
    },
    textContent: {
      flex: 2,
      padding: 10,
    },
    cardtitle: {
      fontSize: 12,
      // marginTop: 5,
      fontWeight: "bold",
    },
    cardDescription: {
      fontSize: 12,
      color: "#444",
    },
    markerWrap: {
      width: 150,
      height: 200,
    },
    marker: {
      width: 23,
      height: 33,
    },
    button: {
      alignItems: 'center',
      marginTop: 5
    },
    signIn: {
        width: '100%',
        padding:5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3
    },
    textSign: {
        fontSize: 14,
        fontWeight: 'bold'
    }
 
   
  });

  export default styles;