import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function VerifiedScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("./taddaaa_image.png")} style={styles.image} />

      <Text style={styles.title}>Phone Number Verified</Text>
      <Text style={styles.subtitle}>
        Congratulations, your phone number has been verified. You can start
        using the app
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>CONTINUE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0D0D33",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#7D7D7D",
    textAlign: "center",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#3F5BFF",
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 50,
    shadowColor: "#3F5BFF",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
});
