import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileScreen() {
  const menuItems = [
    { id: "1", title: "Edit Profile", icon: "document-text-outline" },
    { id: "2", title: "My orders", icon: "list-outline" },
    { id: "3", title: "Billing", icon: "time-outline" },
    { id: "4", title: "Faq", icon: "help-circle-outline" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Profile</Text>

      <View style={styles.profileSection}>
        <Image
          source={require("./profile_image.png")}
          style={styles.profileImage}
        />

        <View>
          <Text style={styles.greeting}>Hi, User</Text>
          <Text style={styles.subText}>Welcome to Our App</Text>
        </View>
      </View>

      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => console.log(item.title)}
          >
            <View style={styles.menuLeft}>
              <Ionicons name={item.icon} size={20} color="#0D0D33" />
              <Text style={styles.menuText}>{item.title}</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#7D7D7D" />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0D0D33",
    marginBottom: 20,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  greeting: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0D0D33",
  },
  subText: {
    fontSize: 13,
    color: "#7D7D7D",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuText: {
    marginLeft: 10,
    fontSize: 14,
    color: "#0D0D33",
  },
});
