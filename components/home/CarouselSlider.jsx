import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../../constants';


export const CarouselSlider = () => {
  const data = [
    "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/11/19/17/25/furniture-1840463_1280.jpg",  
]
  return (
     < View style={{flex:1,justifyContent:'center'}}>

             <SliderBox 
                images = {data}
                dotColor = {COLORS.primary}
                inActiveDotColor = {COLORS.secondary}
                ImageComponentStyle = {{borderRadius:15,width:'95%', marginTop:15}}
                autoplay
                circleLoop
             />

     </ View>
  );
};
const styles = StyleSheet.create({
   
});