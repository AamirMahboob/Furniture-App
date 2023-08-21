import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import  *as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './navigation/BottomTabNavigation'
import productDetails from './screens/productDetails';
import NewRivals from './screens/NewRivals';
const Stack= createNativeStackNavigator()

export default function App() {
   
  const [fontsLoaded] = useFonts({
    regular: require( "./assets/fonts/Poppins-Regular.ttf"),
    bold: require('./assets/fonts/Poppins-ExtraBold.ttf'),
    light: require('./assets/fonts/Poppins-Light.ttf'),
    medium: require('./assets/fonts/Poppins-Medium.ttf'),
    semiBold: require('./assets/fonts/Poppins-SemiBold.ttf')
  });
  
  
   
   const onLayoutRootView = useCallback(async()=>{
       if(fontsLoaded){
        await SplashScreen.hideAsync();
       }
   },[fontsLoaded])

   if(!fontsLoaded){
    return null;
   }

  return (
    <NavigationContainer>
         <Stack.Navigator>
          <Stack.Screen
              name='Bottom Navigation'
              component = {BottomTabNavigation}
              options={{
                headerShown:false
              }}
          />
          <Stack.Screen
              name='ProductDetails'
              component = {productDetails}
              options={{
                headerShown:false
              }}
          />
          <Stack.Screen
              name='ProductList'
              component = {NewRivals}
              options={{
                headerShown:false
              }}
          />
         </Stack.Navigator>
    </NavigationContainer>
  );
}

