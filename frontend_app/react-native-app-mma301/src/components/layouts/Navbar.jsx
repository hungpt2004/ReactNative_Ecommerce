import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const PURPLE = '#6A5AE0';
const GRAY = '#A0A0A0'; // Màu xám cho icon không được chọn

const Navbar = () => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState('home'); // Mặc định là 'home'

  const handlePress = (screen) => {
    setSelectedTab(screen);
    navigation.navigate(screen);
    setTimeout(() => {
      setSelectedTab('home')
    }, 500)
  };

  return (
    <View style={styles.navBar}>
      <TouchableOpacity onPress={() => handlePress('home')} style={styles.navBarItem}>
        <Feather name="home" size={24} color={selectedTab === 'home' ? PURPLE : GRAY} />
        <Text style={[styles.navLabel, selectedTab === 'home' && styles.activeLabel]}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handlePress('favorite')} style={styles.navBarItem}>
        <Feather name="heart" size={24} color={selectedTab === 'favorite' ? PURPLE : GRAY} />
        <Text style={[styles.navLabel, selectedTab === 'favorite' && styles.activeLabel]}>Favorites</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handlePress('cart')} style={styles.navBarItem}>
        <Feather name="shopping-cart" size={24} color={selectedTab === 'cart' ? PURPLE : GRAY} />
        <Text style={[styles.navLabel, selectedTab === 'cart' && styles.activeLabel]}>Cart</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handlePress('profile')} style={styles.navBarItem}>
        <Feather name="user" size={24} color={selectedTab === 'profile' ? PURPLE : GRAY} />
        <Text style={[styles.navLabel, selectedTab === 'profile' && styles.activeLabel]}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  navBarItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navLabel: {
    fontSize: 12,
    color: GRAY,
    marginTop: 4,
  },
  activeLabel: {
    color: PURPLE,
    fontWeight: 'bold',
  },
});
