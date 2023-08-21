import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';

import { COLORS, SIZES } from '../constants'
 import ProductList from '../components/products/ProductList';

const NewRivals = ({navigation}) => {
  return (
    <SafeAreaView style = {{flex:1,backgroundColor:COLORS.lightWhite}}>
       
        <View style = {{flex:1,backgroundColor:COLORS.lightWhite}}>
            <View style = {styles.upperRow} >
            <TouchableOpacity onPress={() => navigation.goBack()} >
          <Ionicons name='chevron-back-circle' size={35} color={COLORS.lightWhite} />
        </TouchableOpacity>
                <Text style = {styles.heading}>Products</Text>
            </View>
            <ProductList />
        </View>
        

      
    </SafeAreaView>
  )
}

export default NewRivals

const styles = StyleSheet.create({
  
    upperRow:{
        width:SIZES.width-40,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor:COLORS.primary,
        marginHorizontal:SIZES.large,
        borderRadius:SIZES.large,
        position:'absolute',
        top:SIZES.large,
        zIndex:999
    },
    heading:{
        fontFamily:'semiBold',
        color:COLORS.lightWhite,
        fontSize:SIZES.large-3,
        marginLeft:7
    }

})