import React from "react"
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Alert,
} from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"
import { Audio } from "expo-av"

// Text to Speech
import * as Speech from "expo-speech"
import Tts from "react-native-tts"

import FavoriteList from "./FavoriteList"

import AsyncStorage from "@react-native-async-storage/async-storage"

const Popup = ({ route }) => {
  const [sound, setSound] = React.useState()

  function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time))
  }

  async function playSound(VOICE) {
    console.log("Loading Sound")
    const { sound } = await Audio.Sound.createAsync(VOICE)
    setSound(sound)

    console.log("Playing Sound")
    await sound.playAsync()
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound")
          sound.unloadAsync()
        }
      : undefined
  }, [sound])

  const onClickItem = () => {
    // Speech.speak(route.params.english)
    // Speech.speak(route.params.tagalog, { language: "fil" })
    console.log(route.params.kapampangan)
    delay().then(() => playSound(route.params.voice_kapampangan))
  }

  const getExistingFavorite = async () => {
    let favorites = await AsyncStorage.getItem("@favorite")
    console.log("Favorites", favorites)
    return favorites ? JSON.parse(favorites) : []
  }

  return (
    <ImageBackground source={route.params.icon} style={styles.backgroundimage}>
      <View style={styles.overlayContainer}>
        <Image source={route.params.icon} style={styles.icon} />
        <Text style={styles.kapampangan}>
          {"\n"}
          {"Kapampangan:\t"}
          {route.params.kapampangan.toUpperCase()}
        </Text>
        <Text style={styles.name}>
          {"English:\t"}
          {route.params.english.toUpperCase()}
        </Text>
        <Text style={styles.name}>
          {"Tagalog:\t"}
          {route.params.tagalog.toUpperCase()}
        </Text>
        {/* <Text style={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          cum rerum sequi dolorem nulla amet, nihil veritatis ipsam facilis
          accusantium quam? Nobis consequuntur quidem commodi praesentium vel.
          Repudiandae, dicta veniam?
        </Text> */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ margin: 50 }}>
            <Ionicons
              name='volume-high-outline'
              size={80}
              onPress={() => {
                Alert.alert("Now Listening", route.params.kapampangan)
                onClickItem()
              }}
            />
          </View>
          {/* <View style={{ margin: 50 }}>
            <Ionicons
              name='bookmark-outline'
              size={80}
              onPress={() => {
                alert("Added to Favorite")
                onFaveItem()
              }}
            />
          </View> */}
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  icon: {
    height: 270,
    width: 300,
    borderRadius: 20,
  },
  name: {
    fontWeight: "600",
    fontSize: 20,
  },
  kapampangan: {
    fontWeight: "700",
    fontSize: 20,
  },
  desc: {
    fontWeight: "300",
    fontSize: 20,
  },
  backgroundimage: {
    flex: 1,
    width: "100%",
    height: "100%",
    opacity: 0.9,
  },
  overlayContainer: {
    flex: 1,
    backgroundColor: "rgba(216,217,207,.9)",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
})

export default Popup
