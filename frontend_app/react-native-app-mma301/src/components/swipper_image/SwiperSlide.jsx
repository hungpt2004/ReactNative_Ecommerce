import Swiper from 'react-native-swiper';
import { Image, View, StyleSheet } from 'react-native';

// Tạo danh sách ảnh ngẫu nhiên từ Unsplash
const randomImages = Array.from({ length: 5 }, () =>
  `https://source.unsplash.com/random/800x600?sig=${Math.random()}`
);

const SwiperImage = () => {
  return (
    <View style={styles.container}>
      <Swiper autoplay loop showsPagination={true}>
        {randomImages.map((img, index) => (
          <View key={index} style={styles.slide}>
            <Image source={{ uri: img }} style={styles.image} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { height: 250 },
  slide: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { width: '100%', height: '100%', resizeMode: 'cover' }
});

export default SwiperImage;
