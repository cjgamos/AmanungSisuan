import * as React from "react"
import { View, Text, StyleSheet, ImageBackground } from "react-native"
import BGImage from "../../assets/BG.png"

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={BGImage} style={styles.backgroundimage}>
      <View style={styles.container}>
        <Text
          onPress={() => alert('This is "Home" screen.')}
          style={{ fontSize: 26, fontWeight: "bold" }}
        >
          Home Screen
        </Text>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundimage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
})
