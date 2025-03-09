import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";

const favoriteProducts = [
  { id: "1", name: "Product 1", image: "https://www.pexels.com/photo/products-of-personal-hygiene-for-women-on-wooden-stand-4238993/", price: "$100" },
  { id: "2", name: "Product 2", image: "https://www.pexels.com/photo/products-of-personal-hygiene-for-women-on-wooden-stand-4238993/", price: "$200" },
  { id: "3", name: "Product 3", image: "https://www.pexels.com/photo/products-of-personal-hygiene-for-women-on-wooden-stand-4238993/", price: "$150" },
  { id: "4", name: "Product 4", image: "https://www.pexels.com/photo/products-of-personal-hygiene-for-women-on-wooden-stand-4238993/", price: "$250" },
];

const FavoriteProductsScreen = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorite Products</Text>
      <FlatList
        data={favoriteProducts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2} // Hiển thị 2 cột
        columnWrapperStyle={styles.row} // Đảm bảo căn chỉnh giữa các cột
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  row: {
    justifyContent: "space-between",
  },
  productCard: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 10,
    margin: 5,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
  },
  productPrice: {
    fontSize: 14,
    color: "#888",
  },
});

export default FavoriteProductsScreen;
