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
} from "react-native"
import BGImage from "../../assets/BG.png"
import Ionicons from "react-native-vector-icons/Ionicons"

// Action Data
import { actionData } from "../../json/action.js"

export default function ActionScreen({ navigation }) {
  const [favorite, setFavorite] = React.useState([])

  let iconName = "bookmark-outline"

  const fav = () => {
    alert("Bruh")
    iconName = "bookmark"
  }

  const oneAction = ({ item }) => (
    <View style={styles.item}>
      <Ionicons name={iconName} size={30} onPress={fav} />
      <View style={styles.iconContainer}>
        <Image source={item.icon} style={styles.icon} />
      </View>
      <Text style={styles.name}>
        {item.english.toUpperCase()}
        {" - ENGLISH"}
        {"\n"}
        {item.tagalog.toUpperCase()}
        {" - TAGALOG"}
        {"\n"}
        {item.kapampangan.toUpperCase()}
        {" - KAPAMPANGAN"}
      </Text>
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
          ListHeaderComponent={headerComponent}
          ListEmptyComponent={<Text>List Empty</Text>}
          ItemSeparatorComponent={itemSeparator}
          data={actionData}
          renderItem={oneAction}
          keyExtractor={actionData.id}
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
  },

  iconContainer: {
    backgroundColor: "#D9D9D9",
    borderRadius: 0,
    height: 89,
    width: 89,
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    height: 55,
    width: 55,
  },

  favorite: {
    height: 30,
    width: 30,
  },

  name: {
    fontWeight: "600",
    fontSize: 16,
    marginLeft: 13,
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
