import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import ProductCardView from './ProductCardView'
import { SIZES } from '../../constants'
 

const ProductList = () => {
    
    const products = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
  return (
    <View  style = {styles.container} >
       <FlatList
         data={products}
         numColumns={2}
         renderItem={()=><ProductCardView  />}

         


       />
    </View>
  )
}

export default ProductList

const styles = StyleSheet.create({
    container:{
        marginTop:20,
        paddingTop:SIZES.xxLarge,
        paddingLeft:SIZES.small,
        alignItems:'center'
    }
})