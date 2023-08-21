import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS,SIZES } from '../constants'
import { Feather, Ionicons } from '@expo/vector-icons';
const Profiles = () => {
  return (
    <SafeAreaView>
        <View style={styles.searchContainer}>
        <TouchableOpacity >
          <Ionicons name='camera-outline' size={30} color={COLORS.gray} style={{ marginLeft: 8 }} />

        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.textInput}
            onPressIn={()=>{}}
            placeholder='what are you looking for'
             
          />
        </View>
        <View>
          <TouchableOpacity style={styles.searchBtn} >
            <Feather name='search' size={24} color={COLORS.offwhite} style={{marginLeft:10}} />

          </TouchableOpacity>
        </View>

      </View>

    </SafeAreaView>
     
 
  )
}

export default Profiles

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.secondary,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    borderRadius: SIZES.medium

  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    marginRight: SIZES.large,
    borderRadius: SIZES.small
  },
  textInput: {

    fontFamily: 'regular',
    paddingHorizontal: SIZES.small,
    width: '100',
    height: '100'
  },
  searchBtn: {
    backgroundColor: COLORS.primary, 
    height: '90%',
     width: 45,
      borderRadius: SIZES.medium, 
      justifyContent: 'center', 
      alignContent: 'center',
      marginRight:3
  }
})