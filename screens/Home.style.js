import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../constants";
const styles = StyleSheet.create({
  text: {
    fontFamily: 'bold',
    fontSize: 25
  },
  appBarWrapper:{
       marginHorizontal:22,
       marginTop:SIZES.small,
        
        
  },
  appBar:{
    flexDirection:"row",
    justifyContent:"space-between",
    
  },
  location:{
    fontSize:SIZES.medium,
    fontFamily:'semiBold',
    color:COLORS.gray
  },
  cartCount:{
    position:"absolute",
    bottom:21,
    backgroundColor:'green',
    width:16,
    height:17,
    borderRadius:8,
    zIndex:999,
    justifyContent:"center",
    alignItems:"center"
  },
  cartNumber:{
    color:COLORS.lightWhite,
    fontSize:10,
    fontFamily:'regular',
    fontWeight:'600'
  }

});

export default styles;
