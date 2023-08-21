import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants';

const ProductDetails = ({ navigation }) => {
  const [count,setCount] = useState(10)
  const increment = () => {
      setCount(count + 1)
  }
  const decrement = () =>{
    if (count > 1) {
        setCount(count - 1)
    }
  }
  return (
    < View style={styles.container} >

      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack('Home')} >
          <Ionicons name='chevron-back-circle' size={35} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { }} >
          <Ionicons name='heart' size={35} />
        </TouchableOpacity>

      </View>
      <Image
        source={{ uri: 'https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg' }}
        style={{ aspectRatio: 1, resizeMode: 'cover' }}
      />
      <View style={styles.details}>
        <View style={styles.titleRow}  >
          <Text style={styles.title} >Product</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price} >$ 235.99</Text>
          </View>
        </View>
        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {
              [1, 2, 3, 4, 5].map((index) => (
                <Ionicons name='star'
                  key={index}
                  color='gold'
                  size={27}
                />
              ))
            }
            <Text style={{ fontFamily: 'medium', color: 'gray', marginLeft: 5, marginTop: 8 }}>(4.9)</Text>
          </View>
          <View style={{ flexDirection: 'row', paddingVertical: 10, marginTop: 10 }}>

            <TouchableOpacity onPress= {increment}>
              <SimpleLineIcons name='plus' size={24} />
            </TouchableOpacity   >
            <Text style={{ marginHorizontal: 8, fontFamily: "medium" }}>{count}</Text>
            <TouchableOpacity onPress= {decrement} >
              <SimpleLineIcons name='minus' size={24} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginHorizontal:10}}>
           <View style = {styles.description}>
            <Text style = {{fontFamily:'medium',fontSize:SIZES.large-2}} >Description</Text>
            <Text style = {{fontFamily:'regular',fontSize:SIZES.small+1,textAlign:'justify'}} >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati, corrupti dignissimos optio quam molestias mollitia odit qui ratione atque dolorem officiis ipsam nihil reprehenderit asperiores quo dolor quibusdam doloribus!
            </Text>
           </View>
        </View>
        <View style = {styles.location}>
              <View style={{justifyContent:'space-between',flexDirection:'row', alignItems:'center',marginHorizontal:5}}>
                 <Ionicons  name='location-outline' size={24} />
                 <Text>  Dallas</Text>
              </View>

              <View style={{justifyContent:'space-between',flexDirection:'row', alignItems:'center',marginHorizontal:10}}>
                 <MaterialCommunityIcons  name='truck-delivery-outline' size={24} />
                 <Text>   free Delivery</Text>
              </View>

        </View>
      </View>

    </ View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({

  container: {
    flex: 1
  },
  upperRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    alignItems: 'center',
    marginHorizontal: 20,

    position: 'absolute',
    top: SIZES.xxLarge - 20,
    width: SIZES.width - 44,
    zIndex: 999

  },
  details: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    marginTop: - SIZES.large - 5,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    Top: SIZES.xxLarge,
    width: SIZES.width
  },
  titleRow: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  ratingRow: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -2
  },
  title: {
    fontFamily: 'bold',
    fontSize: SIZES.large
  },
  price: {
    fontFamily: 'semiBold',
    fontSize: SIZES.large,
    paddingHorizontal: SIZES.large
  },
  priceWrapper: {
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.large
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'flex-start',

    alignItems: 'center'
  },
  location:{
  
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:COLORS.secondary
  }

})