import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const PURPLE = '#6A5AE0';

const Navbar = () => {
  return (
    <View style={styles.navBar}>
      <TouchableOpacity style={styles.navBarItem}>
        <Feather name="home" size={24} color={PURPLE} />
        <Text style={styles.navLabel}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navBarItem}>
        <Feather name="heart" size={24} color={PURPLE} />
        <Text style={styles.navLabel}>Favorites</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navBarItem}>
        <Feather name="shopping-cart" size={24} color={PURPLE} />
        <Text style={styles.navLabel}>Cart</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navBarItem}>
        <Feather name="user" size={24} color={PURPLE} />
        <Text style={styles.navLabel}>Profile</Text>
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
    color: PURPLE,
    marginTop: 4,
  },
});
