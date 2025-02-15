import cartImg1 from "../../../assets/cart_sample_img1.png";
import cartImg2 from "../../../assets/cart_sample_img2.png";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const CartScreen = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Sugar free gold",
      description: "bottle of 500 pellets",
      price: 25,
      quantity: 1,
      image: cartImg1,
    },
    {
      id: 2,
      name: "Sugar free gold",
      description: "bottle of 500 pellets",
      price: 18,
      quantity: 1,
      image: cartImg2,
    },
  ]);

  const updateQuantity = (id, type) => {
    setCart(
      cart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity:
              type === "increase"
                ? item.quantity + 1
                : Math.max(1, item.quantity - 1),
          };
        }
        return item;
      })
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const orderTotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const itemsDiscount = orderTotal * 0.125;
  const couponDiscount = 15.8;
  const total = orderTotal - itemsDiscount - couponDiscount;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-left" size={24} />
        <Text style={styles.headerText}>Your cart</Text>
      </View>

      <View style={styles.cartSubHeader}>
        <Text> {cart.length} Items in your cart</Text>
        <Text style={styles.addMoreText}> + Add more</Text>
      </View>
      {cart.map((item) => (
        <View key={item.id} style={styles.itemContainer}>
          <Image source={item.image} style={styles.itemImage} />
          <View style={styles.itemDetails}>
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Text style={styles.itemSubtitle}>{item.description}</Text>
            <Text style={styles.itemPrice}>Rs.{item.price}</Text>
          </View>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={styles.quantityDecButton}
              onPress={() => updateQuantity(item.id, "decrease")}
            >
              <Text style={styles.quantityDecButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{item.quantity}</Text>
            <TouchableOpacity
              style={styles.quantityIncButton}
              onPress={() => updateQuantity(item.id, "increase")}
            >
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.removeButton}
            onPress={() => removeItem(item.id)}
          >
            <Icon name="times" size={20} color="#ccc" />
          </TouchableOpacity>
        </View>
      ))}
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryTitle}>Payment Summary</Text>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Order Total</Text>
          <Text style={styles.summaryText}>Rs.{orderTotal.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Items Discount</Text>
          <Text style={styles.summaryText}>
            - Rs.{itemsDiscount.toFixed(2)}
          </Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Coupon Discount</Text>
          <Text style={styles.summaryText}>
            - Rs.{couponDiscount.toFixed(2)}
          </Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Shipping</Text>
          <Text style={styles.summaryText}>Free</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryTotalText}>Total</Text>
          <Text style={styles.summaryTotalText}>Rs.{total.toFixed(2)}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.orderButtonText}>Place Order</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: "#f3f3f3", padding: 16 },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 16 },
  cartSubHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  headerText: { fontSize: 20, fontWeight: "bold", marginLeft: 8 },
  itemsText: {
    color: "#888",
    marginBottom: 16,
    display: "flex",
    justifyContent: "space-between",
  },
  addMoreText: { color: "#4157FF" },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  itemImage: { width: 60, height: 60, borderRadius: 8 },
  itemDetails: { flex: 1, marginLeft: 16 },
  itemTitle: { fontSize: 16, fontWeight: "bold" },
  itemSubtitle: { color: "#888", fontSize: 12 },
  itemPrice: { fontSize: 16, fontWeight: "bold", marginTop: 8 },
  quantityContainer: { flexDirection: "row", alignItems: "center" },
  quantityIncButton: {
    backgroundColor: "#A0ABFF",
    borderRadius: 16,
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  quantityDecButton: {
    backgroundColor: "#DFE3FF",
    borderRadius: 16,
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  quantityButtonText: { fontSize: 18, color: "#FFFFFF" },
  quantityDecButtonText: { fontSize: 18, color: "#4157FF" },
  quantityText: { marginHorizontal: 8, fontSize: 16 },
  removeButton: { marginLeft: 16 },
  summaryContainer: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  summaryTitle: { fontSize: 16, fontWeight: "bold", marginBottom: 16 },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  summaryText: { color: "#888" },
  summaryTotalText: { fontSize: 16, fontWeight: "bold" },
  orderButton: {
    backgroundColor: "#4157FF",
    paddingVertical: 16,
    borderRadius: 100,
    alignItems: "center",
  },
  orderButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});

export default CartScreen;
