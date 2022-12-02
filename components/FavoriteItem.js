import React from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"

// import { actionData } from "../json/action"

import testimage from "../assets/Actions/APOLOGIZE.jpg"
// import { TouchableOpacity } from "react-native-gesture-handler"

const FavoriteItem = (props) => {
  console.log("Hello")

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
        <Image source={testimage} style={styles.icon} />
      </View>
      <View>
        <Text style={styles.name}>{"Test"}</Text>
        <Text style={styles.name}>{"Test"}</Text>
        <Text style={styles.name}>{"Test"}</Text>
      </View>
    </TouchableOpacity>
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
})

export default FavoriteItem
