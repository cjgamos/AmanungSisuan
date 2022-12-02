import * as React from "react"
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  SafeAreaView,
  Image,
  Alert,
  TouchableOpacity,
  Modal,
} from "react-native"
import BGImage from "../../assets/BG.png"
import Ionicons from "react-native-vector-icons/Ionicons"

// Text to Speech
import * as Speech from "expo-speech"
import Tts from "react-native-tts"

// Action Data
import { bodyParts } from "../../json/bodyParts"
import { useNavigation } from "@react-navigation/native"

export default function ActionScreen({ navigation }) {
  const onClickItem = (item) => {
    Speech.speak(item.english)
    Speech.speak(item.tagalog)
    Speech.speak(item.kapampangan)
  }

  const onFavItem = (item) => {}

  const oneAction = ({ item }) => (
    <View style={styles.item}>
      {/* <Ionicons
        name='add-circle-outline'
        size={30}
        onPress={() => {
          alert("Added to Favorite")
        }}
      /> */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Popup", {
            id: item.id,
            icon: item.icon,
            english: item.english,
            tagalog: item.tagalog,
            kapampangan: item.kapampangan,
            luther: item.luther,
            bergano: item.bergano,
          })
        }}
        style={{
          backgroundColor: "white",
          opacity: 0.8,
        }}
      >
        <View style={styles.item}>
          <View style={styles.iconContainer}>
            <Image source={item.icon} style={styles.icon} />
          </View>
          <View>
            <Text
              style={{ fontWeight: "700", fontSize: 15, marginLeft: 10 }}
              numberOfLines={1}
            >
              {"KAPAMPANGAN\t:\t"}
              {item.kapampangan.toUpperCase()}
            </Text>
            <Text style={styles.name} numberOfLines={1}>
              {"ENGLISH\t:\t"}
              {item.english.toUpperCase()}
            </Text>
            <Text style={styles.name} numberOfLines={1}>
              {"TAGALOG\t:\t"}
              {item.tagalog.toUpperCase()}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )

  const headerComponent = () => {
    return <Text style={styles.listHeadline}>Actions</Text>
  }

  const itemSeparator = () => {
    return <View style={styles.separator} />
  }

  return (
    <ImageBackground source={BGImage} style={styles.backgroundimage}>
      <SafeAreaView style={styles.container}>
        <FlatList
          ListHeaderComponentStyle={styles.listHeader}
          // ListHeaderComponent={headerComponent}
          ListEmptyComponent={<Text>List Empty</Text>}
          ItemSeparatorComponent={itemSeparator}
          data={bodyParts}
          renderItem={oneAction}
          keyExtractor={bodyParts.id}
        />
      </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    opacity: 0.8,
  },

  listHeader: {
    height: 55,
    alignItems: "center",
    justifyContent: "center",
  },

  listHeadline: {
    color: "#333",
    fontSize: 21,
    fontWeight: "bold",
  },

  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 13,
    paddingLeft: 10,
  },

  iconContainer: {
    backgroundColor: "#D9D9D9",
    borderRadius: 0,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    height: 45,
    width: 45,
  },

  favorite: {
    height: 30,
    width: 30,
  },

  name: {
    fontWeight: "600",
    fontSize: 13,
    marginLeft: 10,
  },

  backgroundimage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#CCC",
  },
})
