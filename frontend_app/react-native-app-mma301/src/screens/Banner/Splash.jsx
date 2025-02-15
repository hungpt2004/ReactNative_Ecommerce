import React from "react";
import { View, Image, StyleSheet } from "react-native";
import logo_background from "../../../assets/logo_background.png";
import logo_info from "../../../assets/logo_info.png";
import splash from "../../../assets/splash.png";
export default function Splash() {
  return (
    <View style={styles.container}>
      <Image source={splash} style={styles.imageBackground} />
      {/* <Image source={logo_info} style={styles.imageInfo} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2F80ED",
    justifyContent: "center",
    alignItems: "center",
  },
  imageBackground: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  //   imageInfo: {
  //     position: "absolute",
  //   },
});
