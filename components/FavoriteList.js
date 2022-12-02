import React from "react"
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native"

// BG
import BGImage from "../assets/BG.png"

import FavoriteItem from "./FavoriteItem"
import { FlatGrid } from "react-native-super-grid"

import AsyncStorage from "@react-native-async-storage/async-storage"

const FavoriteList = (props) => {
  const [items, setItems] = React.useState([
    { name: "TURQUOISE", code: "#1abc9c" },
    { name: "EMERALD", code: "#2ecc71" },
    { name: "PETER RIVER", code: "#3498db" },
    { name: "AMETHYST", code: "#9b59b6" },
    { name: "WET ASPHALT", code: "#34495e" },
    { name: "GREEN SEA", code: "#16a085" },
    { name: "NEPHRITIS", code: "#27ae60" },
    { name: "BELIZE HOLE", code: "#2980b9" },
    { name: "WISTERIA", code: "#8e44ad" },
    { name: "MIDNIGHT BLUE", code: "#2c3e50" },
    { name: "SUN FLOWER", code: "#f1c40f" },
    { name: "CARROT", code: "#e67e22" },
    { name: "ALIZARIN", code: "#e74c3c" },
    { name: "CLOUDS", code: "#ecf0f1" },
    { name: "CONCRETE", code: "#95a5a6" },
    { name: "ORANGE", code: "#f39c12" },
    { name: "PUMPKIN", code: "#d35400" },
    { name: "POMEGRANATE", code: "#c0392b" },
    { name: "SILVER", code: "#bdc3c7" },
    { name: "ASBESTOS", code: "#7f8c8d" },
  ])

  const [favItems, setFavItems] = React.useState([])

  const itemSeparator = () => {
    return <View style={styles.separator} />
  }

  const getData = async () => {
    try {
      const favorite = await AsyncStorage.getItem("@favorite")

      console.log(favorite)
      return renderFavItem(JSON.parse(favorite))
    } catch (error) {
      // error reading value
      console.log(error)
    }
  }

  getData()

  const renderFavItem = (favData) => {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 13,
          // backgroundColor: "white",
          opacity: 0.8,
          // height: 50,
          // width: "100%",
        }}
        onPress={() => {}}
      >
        <View style={styles.iconContainer}>
          {/* <Image source={testimage} style={styles.icon} /> */}
        </View>
        <View>
          <Text style={styles.name}>{"Test"}</Text>
          <Text style={styles.name}>{"Test"}</Text>
          <Text style={styles.name}>{"Test"}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  // renderFavItem()

  return (
    // <ImageBackground source={BGImage} style={styles.backgroundimage}>
    <SafeAreaView style={styles.container}>
      {/* <FlatList
        ListHeaderComponentStyle={styles.listHeader}
        // ListHeaderComponent={headerComponent}
        ListEmptyComponent={<Text>List Empty</Text>}
        ItemSeparatorComponent={itemSeparator}
        data={renderFavItem}
        renderItem={renderFavItem}
        keyExtractor={props.item.id}
      /> */}

      <FlatGrid
        itemDimension={130}
        data={items}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        spacing={10}
        renderItem={({ item }) => (
          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemCode}>{item.code}</Text>
          </View>
        )}
      />
    </SafeAreaView>
    // </ImageBackground>
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
    // flexDirection: "row",
    alignItems: "center",
    paddingVertical: 13,
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

  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 12,
    color: "#fff",
  },
})

export default FavoriteList
