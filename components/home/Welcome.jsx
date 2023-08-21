import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { COLORS, SIZES } from '../../constants';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={{ width: '100%' }}>
        <Text style={styles.welcomeTxt(COLORS.black, SIZES.xSmall)}>Find The Most</Text>
        <Text style={styles.welcomeTxt(COLORS.primary, -10)}>Luxurious Furniture</Text>
      </View>
      <View style={styles.searchContainer}>
        <TouchableOpacity >
          <Feather name='search' size={24} color={COLORS.gray} style={{ marginLeft: 10 }} />

        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.textInput}
            onPressIn={()=>navigation.navigate('Search')}
            placeholder='what are you looking for'
            value=''
          />
        </View>
        <View>
          <TouchableOpacity style={styles.searchBtn} >
            <Ionicons name='camera-outline' size={30} color={COLORS.offwhite} style={{marginLeft:8}} />
       
          </TouchableOpacity>
        </View>

      </View>

    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({

  welcomeTxt: (color, top) => ({
    fontFamily: "bold",
    marginHorizontal: 12,
    fontSize: SIZES.xxLarge - 12,
    color: color,
    marginTop: top

  }),
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.secondary,
    margin:10,
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



});
