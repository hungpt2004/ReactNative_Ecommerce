import React from 'react'
import { Image, ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { responsiveFontSize, responsiveSpacingWidth } from '../../utils/theme/ResponsiveTheme'
import { Dimensions } from 'react-native';
import { responsiveWidth } from '../../utils/theme/ResponsiveTheme';
import { responsiveHeight } from '../../utils/theme/ResponsiveTheme';
import { CustomCardSize } from '../../components/card/CustomCardSize';

export const ProductDetails = () => {

   const { width, height } = Dimensions.get('window');

   return (
      <ScrollView
         contentContainerStyle={styles.scrollContent}
      //refresh control
      >
         <View style={styles.container}>
            <Text style={styles.title}>Sugar Free Gold Low Calories</Text>
            <Text style={styles.subtitle}>Etiam mollis metus non purus</Text>
            {/* Swipper Image */}
            
            
            <View style={styles.btnAddToCart}>
               <View>
                  <Text style={styles.price}><Text style={{ textDecorationLine: 'line-through', fontSize: 18, color: 'darkgrey' }}>Rs.99 </Text>Rs.56</Text>
                  <Text style={styles.subtitle}>Etiam mollis</Text>
               </View>
               <TouchableOpacity>
                  <Image />
                  <Text style={styles.a}>Add to Cart</Text>
               </TouchableOpacity>
            </View>

            <View style={{
               width: responsiveWidth(),
               height: responsiveHeight(1),
               backgroundColor: 'darkgrey',
               marginBottom: 10
            }}></View>

            <Text style={styles.packageTitle}>Package size</Text>

            <CustomCardSize />

            <Text style={styles.packageTitle}>Product Details</Text>

            <Text style={styles.subtitle2}>Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi ut nisi odio. 
               Nulla facilisi. Nunc risus massa, gravida id egestas a, pretium vel tellus. 
               Praesent feugiat diam sit amet pulvinar finibus. Etiam et nisi aliquet, accumsan nisi sit.
            </Text>

            <Text style={styles.packageTitle}>Ingredients</Text>

            <Text style={styles.subtitle2}>Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi ut nisi odio. Nulla facilisi.
               Nunc risus massa, gravida id egestas a, pretium vel tellus. Praesent feugiat diam sit amet pulvinar finibus. Etiam et nisi aliquet, accumsan nisi sit.</Text>

            <Text style={styles.packageTitle}>Expiry Date <Text style={styles.subtitle}>  25/12/2023</Text></Text>

            <Text style={{
                fontSize: responsiveFontSize(16), 
                fontFamily: 'OverpassSemiBold', 
            }}>Brand Name <Text style={styles.subtitle2}>  Something</Text></Text>

         </View>
      </ScrollView>
   )
}


const styles = StyleSheet.create({
   scrollContent: {
      // flexGrow: 1,
      fontFamily: 'OverpassRegular'
   },
   container: {
      flex: 1,
      paddingHorizontal: responsiveFontSize(15)
   },
   title: {
      fontSize: responsiveFontSize(22),
      fontFamily: 'OverpassBold' 
   },
   subtitle: {
      fontSize: responsiveFontSize(14),
      color: 'darkgrey',
      fontFamily: 'OverpassRegular'
   },
   subtitle2: {
      fontSize: responsiveFontSize(14),
      color: 'darkgrey',
      fontFamily: 'OverpassLight'
   },
   price: {
      fontSize: responsiveFontSize(18),
      fontFamily: 'OverpassRegular'
   },
   a: {
      fontSize: responsiveFontSize(14),
      color: '#006AFF',
      fontFamily: 'OverpassRegular',
      textDecorationLine: 'underline',
      
   },
   packageTitle: {
      fontSize: responsiveFontSize(16), 
      fontFamily: 'OverpassSemiBold', 
      marginBottom: responsiveHeight(5),
      marginTop: responsiveHeight(20)
   },
   btnAddToCart: {
      flexDirection: 'row',
      alignItems: 'center',
      height: responsiveHeight(200),
      justifyContent: 'space-between'
   }
})
