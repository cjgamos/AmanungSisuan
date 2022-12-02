import * as React from "react"
import { View, Text, StyleSheet, ImageBackground } from "react-native"

// BG
import BGImage from "../../assets/BG.png"

// Component
import FavoriteItem from "../../components/FavoriteItem"
import FavoriteList from "../../components/FavoriteList"

import AsyncStorage from "@react-native-async-storage/async-storage"

export default function FavoriteScreen({ navigation }) {
 

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
        <FavoriteList />
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
