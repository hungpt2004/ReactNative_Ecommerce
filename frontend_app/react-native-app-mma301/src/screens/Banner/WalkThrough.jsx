import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import maskgroup from "../../../assets/maskgroup.png";
export const Walkthrough = ({navigation}) => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      title: "View and buy\nMedicine online",
      description:
        "Etiam mollis metus non purus faucibus sollicitudin. Pellentesque sagittis mi. Integer.",
      image: maskgroup,
    },
    {
      title: "Track your\nOrders easily",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
      image: maskgroup,
    },
    {
      title: "Get notified\ninstantly",
      description:
        "Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
      image: maskgroup,
    },
    {
      title: "Enjoy fast\ndelivery",
      description:
        "Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.",
      image: maskgroup,
    },
  ];

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      navigation.navigate('login')
    }
  };

  const handleSkip = () => {
    navigation.navigate('login')
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={pages[currentPage].image} style={styles.image} />
      </View>
      <Text style={styles.title}>{pages[currentPage].title}</Text>
      <Text style={styles.description}>{pages[currentPage].description}</Text>
      <View style={styles.footer}>
        <TouchableOpacity onPress={handleSkip}>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>
        <View style={styles.dots}>
          {pages.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                currentPage === index ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          ))}
        </View>
        <TouchableOpacity onPress={handleNext}>
          <Text style={styles.next}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    color: "#9CA3AF",
    marginBottom: 20,
  },
  imageContainer: {
    position: "relative",
    marginBottom: 20,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 150,
  },
  phoneImage: {
    position: "absolute",
    top: "25%",
    left: "25%",
    width: 150,
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1F2937",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 20,
    marginLeft: 60,
    marginRight: 60,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    position: "absolute",
    bottom: 60,
    left: 20,
    right: 20,
  },
  skip: {
    color: "#6B7280",
  },
  dots: {
    flexDirection: "row",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#3B82F6",
  },
  inactiveDot: {
    backgroundColor: "#D1D5DB",
  },
  next: {
    color: "#3B82F6",
  },
});

export default Walkthrough;
