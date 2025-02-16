import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const Footer = () => {
  return (
    <LinearGradient
      colors={['#6A5AE0', '#9C59E0']}
      style={styles.footerContainer}
    >
      <Text style={styles.footerText}>
        © {new Date().getFullYear()} XYZ Clothing Store. All rights reserved.
      </Text>
      <View style={styles.socialIcons}>
        <TouchableOpacity style={styles.iconButton}>
          <Feather name="facebook" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Feather name="twitter" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Feather name="instagram" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerContainer: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 8,
  },
  socialIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginHorizontal: 8,
  },
});
