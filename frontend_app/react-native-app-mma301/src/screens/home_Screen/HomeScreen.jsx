import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Navbar from '../../components/layouts/Navbar';
import Footer from '../../components/layouts/Footer';

const dealsData = [
  {
    id: '1',
    name: "Men's Denim Jeans",
    price: 'Rs.112',
    image:
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQoLEVTUBDpU0mHKMUKmMoo3Ck9kFVGGAraXHmx4inSLD1lOl3doSMxruLrwp_EY1qGb6F9T3bAN-zv2zmnWFvPPvzoBgS_dQqPWWbOLgER&usqp=CAE',
    rating: '⭐ 2',
  },
  {
    id: '2',
    name: "Women's T-Shirt",
    price: 'Rs.220',
    image:
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS5Vh7yBkqWFkrGPeWcXktkdgnEhAyrf_px35-SOeUjjXUfF5zUcDOLt1pKAeTEmNe8nbLV4OtgJNxZNsgM7-DCFExWdYXPwkZjorTnENc&usqp=CAE',
    rating: '⭐ 2',
  },
  {
    id: '3',
    name: "Men's Sneakers",
    price: 'Rs.350',
    image:
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ74LvVpG6pfH6X1lTWnKlYZuV13K3FOvIOIzC2o8i178_MfcZflDaeVSvR9K_nElFLQJ6uOKJqFYYNywA9fVrv2eD86IeV-3Xer3VkKh1ISz1Mj87xafVCZA&usqp=CAE',
    rating: '⭐ 4.5',
  },
  {
    id: '4',
    name: "Casual Hoodie",
    price: 'Rs.499',
    image:
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQMUMaXWZE6D-Ry1ZmBk-QsNgBvsneJ6cj1yWyEl4gthcshZM-6lZlOadzU1SQ01XMMWoSy4TB99ZVXSmzmXak9GMgMLOTKfRTLknxgC1I&usqp=CAE',
    rating: '⭐ 4.2',
  },
  {
    id: '5',
    name: "Formal Leather Shoes",
    price: 'Rs.899',
    image:
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR-gIVd1OMVwTZ3Vk4rDKa9b6egkjrpiIpkO8pQDQ-JJx9wiTQn4Oycbep7GIrxnP3h0JYVQIFz8mwVRnyNgjchGD3nnxcNkEjMk3DjtAoJyoJ0Wexmnq5TYg&usqp=CAE',
    rating: '⭐ 5',
  },
  {
    id: '6',
    name: "Slim Fit Jacket",
    price: 'Rs.650',
    image:
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRxrgdm74_x2lFKxf9hf1Vs_FcDF5RUb40gZ23P__haogQ6hXlVmCjmto-OCz790FvDUyDbqwtCBERrlcq8mf58_8Lg-Rv5IbK3ZIgvhuCs2Tg2QFCGlsDj&usqp=CAE',
    rating: '⭐ 4.8',
  },
];


const HomeScreen = ({navigation}) => {

  const handleProductDetail = () => {
    navigation.navigate('product_details')
  }

  const renderDealItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleProductDetail()} style={styles.dealItem}>
      <Image source={{ uri: item.image }} style={styles.dealImage} />
      <Text style={styles.dealName}>{item.name}</Text>
      <Text style={styles.dealPrice}>{item.price}</Text>
      <View style={styles.dealBadge}>
        <Text style={styles.dealBadgeText}>{item.rating}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <LinearGradient
          colors={['#6A5AE0', '#9C59E0']} 
          style={styles.headerBackground}
        >
          <View style={styles.headerTopRow}>
            <Image
              source={require('../../../assets/pngwing.com.png')} 
              style={styles.avatar}
            />
            <View style={styles.headerIcons}>
              <TouchableOpacity>
                <Image
                  source={require('../../../assets/bell-860.png')}
                  style={styles.icon}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{ marginLeft: 16 }}>
                <Image
                  source={require('../../../assets/add-to-cart-3046.png')}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.headerTextContainer}>
            <Text style={styles.greeting}>Hi, Rahul</Text>
            <Text style={styles.subGreeting}>Welcome to XYZ Clothing Store</Text>
          </View>
        </LinearGradient>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder=" Search Clothing & Fashion..."
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Top Categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.categoryItem}>
              <LinearGradient
                colors={['#FF6A88', '#FF8C7F']}
                style={styles.categoryCircle}
              />
              <Text style={styles.categoryText}>T-Shirt</Text>
            </View>
            <View style={styles.categoryItem}>
              <View style={[styles.categoryCircle, { backgroundColor: '#00CE85' }]} />
              <Text style={styles.categoryText}>Jeans</Text>
            </View>
            <View style={styles.categoryItem}>
              <View style={[styles.categoryCircle, { backgroundColor: '#FFA500' }]} />
              <Text style={styles.categoryText}>Shorts</Text>
            </View>
            <View style={styles.categoryItem}>
              <View style={[styles.categoryCircle, { backgroundColor: '#7C4DFF' }]} />
              <Text style={styles.categoryText}>Hoodies</Text>
            </View>
          </ScrollView>
        </View>

        <View style={styles.bannerContainer}>
          <ImageBackground
            source={require('../../../assets/icon.png')}
            style={styles.bannerImageBackground}
            imageStyle={styles.bannerImage}
          >
            <Text style={styles.bannerTitle}>Save extra on every order</Text>
          </ImageBackground>
        </View>

        <View style={[styles.sectionContainer, { alignItems: 'stretch' }]}>
          <View style={styles.dealsHeader}>
            <Text style={styles.sectionTitle}>Deals of the Day</Text>
            <TouchableOpacity>
              <Text style={styles.moreText}>More</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={dealsData}
            renderItem={renderDealItem}
            keyExtractor={(item) => item.id}
            numColumns={2} // Hiển thị dạng lưới 2 cột
            columnWrapperStyle={styles.dealsGrid}
          />
        </View>

        <View style={{ height: 80 }} />
        <Footer/>
        <Navbar/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const PURPLE = '#6A5AE0';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerBackground: {
    height: 180,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  headerTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
  headerTextContainer: {
    marginTop: 16,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  subGreeting: {
    fontSize: 16,
    color: '#fff',
    marginTop: 4,
  },
  searchContainer: {
    marginTop: -20,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  searchInput: {
    padding: 12,
    fontSize: 14,
  },
  sectionContainer: {
    marginTop: 24,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bannerContainer: {
    marginTop: 40,
    marginHorizontal: 30,
    borderRadius: 20,
    overflow: 'hidden',
  },
  bannerImageBackground: {
    width: '100%',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerImage: {
    resizeMode: 'cover',
  },
  bannerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  categoryItem: {
    width: 110,
    height: 190,
    backgroundColor: '#fff',
    borderRadius: 40,
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  categoryCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#333',
  },
  dealsHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  moreText: {
    fontSize: 16,
    fontWeight: '600',
    color: PURPLE,
  },
  dealsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  dealItem: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 12,
    padding: 10,
    position: 'relative',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  dealImage: {
    width: '100%',
    height: 160,
    borderRadius: 8,
    backgroundColor: '#CCC',
    marginBottom: 8,
  },
  dealName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  dealPrice: {
    fontSize: 14,
    color: PURPLE,
  },
  dealBadge: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#FFD700',
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  dealBadgeText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  }
});
