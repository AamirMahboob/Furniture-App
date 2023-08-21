import { StyleSheet, Text, View ,FlatList, ActivityIndicator} from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants'
import ProductCardView from './ProductCardView'
import useFetch from '../../hooks/useFetch'
 

const ProductsRow = () => {
   
  

    const products = [1,2,3,4]
    return (
      <View style={{ margin: SIZES.medium - 5 }}>
          
              <FlatList
                  data={products}
                    // Make sure "_id" is the correct key
                  renderItem={() => <ProductCardView  />} // Pass the "item" prop
                  horizontal
                  contentContainerStyle={{ columnGap: SIZES.medium }}
              />
       
      </View>
  );
  
  
}

export default ProductsRow

const styles = StyleSheet.create({})

// import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
// import React from 'react';
// import { COLORS, SIZES } from '../../constants';
// import ProductCardView from './ProductCardView';
// import useFetch from '../../hooks/useFetch';

// const ProductsRow = () => {
//   const { data, loading } = useFetch(); // Destructure the result properly
//   // Rest of your code

//   return (
//     <View style={{ margin: SIZES.medium - 5 }}>
//       {loading ? (
//         <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
//       ) : (
//         <FlatList
//           data={data}
//           keyExtractor={(item) => item._id} // Use arrow function for keyExtractor
//           renderItem={({ item }) => <ProductCardView item={item} />} // Use destructuring to get the item
//           horizontal
//           contentContainerStyle={{ columnGap: SIZES.medium }}
//         />
//       )}
//     </View>
//   );
// };

// export default ProductsRow;

// const styles = StyleSheet.create({});
