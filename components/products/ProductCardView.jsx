import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants'
import { Ionicons,Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ProductCardView = ( ) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=>navigation.navigate('ProductDetails')} >
        <View style = {styles.container}>
             <View style = {styles.imageContainer}>
                 <Image 
                  source={{uri:'https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg'}}
                  style ={{aspectRatio:1,resizeMode:'cover',borderRadius:SIZES.small}}
                 />
             </View>
             <View style = {styles.detailsText}>
                  <Text style={styles.title}>Product</Text>
                  <Text style={styles.product}>Product</Text>
                  <Text style={styles.price}>$ 235</Text>
             </View>
             <TouchableOpacity style= {styles.addBtn}>
                   <Ionicons name='add-circle' color={SIZES.primary} size={35}  />
             </TouchableOpacity>
        </View>
    </TouchableOpacity>
  )
}

export default ProductCardView

const styles = StyleSheet.create({
   
    container:{
        backgroundColor:COLORS.secondary,
        width:182,
        height:250,
        borderRadius:SIZES.small,
        marginEnd:18,
        marginTop: 2
    },
    imageContainer:{
        width:170,
        marginTop:SIZES.small / 2,
        marginLeft: SIZES.small / 2,
        height:150
         
        

    },
    detailsText:{
        padding: SIZES.small
    },
    title:{
      fontFamily:'bold',
      fontSize:SIZES.large,
      marginTop:9
    },
    product:{
        fontFamily:'regular',
         color:COLORS.gray,
        marginTop:-10
      },
      price:{
        fontFamily:'bold',
        fontSize:SIZES.medium,
        marginTop:-6
      },
      addBtn:{
        position:'absolute',
        bottom:SIZES.xSmall,
        right:SIZES.xSmall

      }
      
})