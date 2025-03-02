import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';

const PRODUCTS = [
   { id: '1', name: 'Nike Air Max', category: 'Sneakers', image: 'https://picsum.photos/200/300' },
   { id: '2', name: 'Adidas Ultraboost', category: 'Running', image: 'https://picsum.photos/200/300' },
   { id: '3', name: 'Puma Future', category: 'Football', image: 'https://picsum.photos/200/300' },
   { id: '4', name: 'Jordan Retro', category: 'Basketball', image: 'https://picsum.photos/200/300' },
   { id: '5', name: 'Nike Air Force 1', category: 'Sneakers', image: 'https://picsum.photos/200/300' },
];

const SearchScreen = () => {
   const [searchText, setSearchText] = useState('');
   const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);

   const handleSearch = (text) => {
      setSearchText(text);
      const filtered = PRODUCTS.filter((product) =>
         product.name.toLowerCase().includes(text.toLowerCase()) ||
         product.category.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredProducts(filtered);
   };

   return (
      <SafeAreaView style={{flex: 1}}>
         <View style={styles.container}>
            {/* Search Input */}
            <View style={styles.searchContainer}>
               <Feather name="search" size={20} color="#999" style={styles.searchIcon} />
               <TextInput
                  style={styles.searchInput}
                  placeholder="Search products..."
                  value={searchText}
                  onChangeText={handleSearch}
               />
            </View>

            {/* Product List */}
            <FlatList
               data={filteredProducts}
               keyExtractor={(item) => item.id}
               renderItem={({ item }) => (
                  <TouchableOpacity style={styles.card}>
                     <Image source={{ uri: item.image }} style={styles.image} />
                     <View style={styles.info}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.category}>{item.category}</Text>
                     </View>
                  </TouchableOpacity>
               )}
            />
         </View>
      </SafeAreaView>
   );
};

export default SearchScreen;

const styles = StyleSheet.create({
   container: {  padding: 16, backgroundColor: '#fff' },
   searchContainer: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 10, marginBottom: 16 },
   searchIcon: { marginRight: 8 },
   searchInput: { flex: 1, fontSize: 16 },
   card: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f9f9f9', padding: 10, borderRadius: 8, marginBottom: 10 },
   image: { width: 50, height: 50, borderRadius: 8, marginRight: 10 },
   info: { flex: 1 },
   name: { fontSize: 16, fontWeight: 'bold' },
   category: { fontSize: 14, color: '#666' },
});
