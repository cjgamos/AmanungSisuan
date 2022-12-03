import * as React from "react"
import { View, Text, ImageBackground, StyleSheet } from "react-native"

import BGImage from "../../assets/BG.png"

export default function AboutScreen({ navigation }) {
  return (
    <ImageBackground source={BGImage} style={styles.backgroundimage}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(234,234,234,.8)",
        }}
      >
        <Text>Group CS64</Text>
        <Text>© Thesis Capstone.</Text>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  backgroundimage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
})
