import React from 'react';
import { Text ,View,TouchableOpacity, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './Home.style'; // Make sure the import path is correct
import { Ionicons,Fontisto } from '@expo/vector-icons';
import Welcome from '../components/home/Welcome';
import { CarouselSlider } from '../components/home/CarouselSlider';
import Heading from '../components/home/Heading';
import ProductsRow from '../components/products/ProductsRow';
 const Home = () => {
  return (
    <SafeAreaView>
       <View style = {styles.appBarWrapper}>
            <View style = {styles.appBar} >
               <Ionicons name='location-sharp' size={24}  />
               <Text style={styles.location}>Shangai China</Text>
               <View style={{alignItems:'flex-end'}}> 
                     <View style={styles.cartCount}>
                        <Text style={styles.cartNumber}>8</Text>
                     </View>
                      <TouchableOpacity>
                           <Fontisto name='shopping-bag' size={24} />
                      </TouchableOpacity>
               </View>
            </View>
       </View>
       <ScrollView>
           <Welcome  />
           <CarouselSlider />
           </ScrollView>
           <Heading />
           <ProductsRow />
    </SafeAreaView>
  );
}

export default Home;
