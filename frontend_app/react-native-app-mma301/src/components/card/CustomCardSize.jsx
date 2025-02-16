import React from 'react'
import { FlatList, StyleSheet, View, Text } from 'react-native'
import { responsiveHeight, responsiveWidth } from '../../utils/theme/ResponsiveTheme'

const dataCardSize = [
   { text: 'Rs.106', content: '500 pellets' },
   { text: 'Rs.166', content: '110 pellets' },
   { text: 'Rs.252', content: '300 pellets' }
]

export const CustomCardSize = () => {

   const renderItem = ({item}) => {
      return (
         <View style={styles.container}>
            <View style={styles.subContainer}>
               <Text style={styles.title}>{item.text}</Text>
               <Text style={styles.content}>{item.content}</Text>
            </View>
         </View>
      )
   }

   return (
      <FlatList
         horizontal={true}
         data={dataCardSize}
         renderItem={renderItem}
         keyExtractor={(item) => item.text}
         contentContainerStyle={{ marginTop: 10 }}
      />
   )
}

const styles = StyleSheet.create({
   container: {
      width: responsiveWidth(79),
      height: responsiveHeight(68),
      borderRadius: 6,
      borderWidth: 2,
      borderColor: '#FFA41B',
      backgroundColor: '#F5F5F5',
      marginRight: 5,
   },
   subContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
   },
   title: {
      textAlign: 'center',
      fontSize: 16,
      fontFamily: 'OverpassBold',
      color: '#FFA41B'
   },
   content: {
      textAlign: 'center',
      fontSize: 12,
      fontFamily: 'OverpassRegular',
      color: '#FFA41B'
   }
})