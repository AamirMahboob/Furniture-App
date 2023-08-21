import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
  
import {Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const Heading = () => {
  const navigation = useNavigation();
  return (
    <View style = {styles.container}>
         <View  style = {styles.header}>
            <Text style = {styles.headerText}>New Rivals</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('ProductList')} >
                <Ionicons name='ios-grid' size={26} color={COLORS.primary}  />
            </TouchableOpacity>
         </View>
    </View>
  )
}

export default Heading

const styles = StyleSheet.create({
   container:{
     
    marginHorizontal:SIZES.xSmall,
    marginTop:4
   },
   header:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
   },
   headerText:{
     fontFamily:'semiBold',
     fontSize: SIZES.xLarge - 2,
     marginTop:1
   }
   

})