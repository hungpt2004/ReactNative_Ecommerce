import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CheckoutScreen = () => {
  const [selectedAddress, setSelectedAddress] = useState('home');
  const [selectedPayment, setSelectedPayment] = useState('cod');

  const addresses = [
    {
      id: 'home',
      title: 'Home',
      phone: '(205) 555-024',
      address: '1786 Wheeler Bridge'
    },
    {
      id: 'office',
      title: 'Office',
      phone: '(205) 555-024',
      address: '1786 w Dallas St underfield'
    }
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <View style={styles.header}>
        <Text style={styles.title}>Checkout</Text>
        <View style={styles.cartRow}>
          <Text style={styles.itemsCount}>2 items in your cart</Text>
          <Text style={styles.totalText}>TOTAL Rs.185.00</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Delivery Address</Text>

        {addresses.map((address) => (
          <TouchableOpacity
            key={address.id}
            style={styles.addressCard}
            onPress={() => setSelectedAddress(address.id)}
            activeOpacity={0.8}
          >
            <View style={styles.radioContainer}>
              <View
                style={[
                  styles.radio,
                  selectedAddress === address.id && styles.radioSelected
                ]}
              >
                {selectedAddress === address.id && <View style={styles.radioInner} />}
              </View>
            </View>

            <View style={styles.addressDetails}>
              <View style={styles.addressHeader}>
                <Text style={styles.addressTitle}>{address.title}</Text>
                <TouchableOpacity style={styles.editIconTouchable}>
                  <Ionicons name="create-outline" size={20} color="#4a90e2" />
                </TouchableOpacity>
              </View>
              <Text style={styles.addressText}>{address.phone}</Text>
              <Text style={styles.addressText}>{address.address}</Text>
            </View>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.addAddressButton} activeOpacity={0.8}>
          <Ionicons name="add" size={24} color="#4a90e2" />
          <Text style={styles.addAddressText}>Add Address</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment method</Text>

        <TouchableOpacity
          style={styles.paymentCard}
          onPress={() => setSelectedPayment('paypal')}
          activeOpacity={0.8}
        >
          <View style={styles.radioContainer}>
            <View
              style={[
                styles.radio,
                selectedPayment === 'paypal' && styles.radioSelected
              ]}
            >
              {selectedPayment === 'paypal' && <View style={styles.radioInner} />}
            </View>
          </View>
          <Text style={styles.paymentText}>PayPal</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.paymentCard}
          onPress={() => setSelectedPayment('cod')}
          activeOpacity={0.8}
        >
          <View style={styles.radioContainer}>
            <View
              style={[
                styles.radio,
                selectedPayment === 'cod' && styles.radioSelected
              ]}
            >
              {selectedPayment === 'cod' && <View style={styles.radioInner} />}
            </View>
          </View>
          <Text style={styles.paymentText}>Cash on Delivery</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.payNowButton} activeOpacity={0.8}>
        <Text style={styles.payNowText}>Pay Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  header: {
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8
  },
  cartRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  itemsCount: {
    fontSize: 16,
    color: '#666',
    maxWidth: '60%'
  },
  totalText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000'
  },
  section: {
    marginBottom: 30
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333'
  },
  addressCard: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
  },
  radioContainer: {
    justifyContent: 'center',
    marginRight: 15
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center'
  },
  radioSelected: {
    borderColor: '#4a90e2'
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#4a90e2'
  },
  addressDetails: {
    flex: 1,
    marginLeft: 10, 
  },
  addressHeader: {
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-between', 
    marginBottom: 5,
  },
  addressTitle: {
    fontSize: 16,
    fontWeight: '500',
    flex: 1, 
  },
  editIconTouchable: {
    marginLeft: 10,
  },
  addressText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 3,
  },
  addAddressButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#4a90e2',
    borderRadius: 8,
    borderStyle: 'dashed'
  },
  addAddressText: {
    color: '#4a90e2',
    marginLeft: 10,
    fontSize: 16
  },
  paymentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15
  },
  paymentText: {
    fontSize: 16,
    marginLeft: 15,
    color: '#333'
  },
  payNowButton: {
    backgroundColor: '#4a90e2',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginBottom: 10
  },
  payNowText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
