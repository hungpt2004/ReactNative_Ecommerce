import React from "react";
import {
  Image,
  Button,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import {
  responsiveHeight,
  responsiveSpacingWidth,
} from "../../utils/theme/ResponsiveTheme";

export const ProductDetails = () => {
  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={styles.scrollContent}
      //refresh control
    >
      <View style={styles.container}>
        <Text style={styles.title}>Sugar Free Gold Low Calories</Text>
        <Text style={styles.subtitle}>Etiam mollis metus non purus</Text>
        {/* Swipper Image */}
        <View style={styles.btnAddToCart}>
          <View>
            <Text>
              <Text style={{ textDecorationLine: "line-through" }}>Rs.99</Text>
              Rs.56
            </Text>
            <Text style={styles.subtitle}>Etiam mollis</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("verify_success")}
          >
            <Image />
            <Text>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: responsiveSpacingWidth(20),
  },
  title: {},
  subtitle: {},
  btnAddToCart: {
    flexDirection: "row",
    alignItems: "center",
    height: responsiveHeight(200),
  },
});
