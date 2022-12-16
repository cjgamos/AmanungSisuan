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
          // alignItems: "center",
          backgroundColor: "rgba(234,234,234,.8)",
        }}
      >
        <Text style={{ fontSize: 26, fontWeight: "bold", textAlign: "center" }}>
          Group CS64
        </Text>
        <Text
          style={{
            textAlign: "justify",
            width: "90%",
            marginTop: 10,
            marginLeft: 10,
            marginBottom: 10,
            fontSize: 16,
          }}
        >
          We are fourth-year computer science students at Don Honorio Ventura
          State University in Cabambangan, Bacolor. We developed this
          user-friendly application for students in kindergarten through grade
          two who are struggling to understand basic kapampangan.
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 5,
          }}
        >
          Contact as:
        </Text>

        <Text style={styles.name}>Warly serrano </Text>
        <Text style={styles.email}>Nucup61@gmail.com</Text>

        <Text style={styles.name}>Erwin Calaguas</Text>
        <Text style={styles.email}>calaguaserwinm@gmail.co m</Text>

        <Text style={styles.name}>Jack Danielle Parazo</Text>
        <Text style={styles.email}>parazojackdanielle@gmail.com</Text>

        <Text style={styles.name}>Kristine Kelly Aton</Text>
        <Text style={styles.email}>cs.kristinekellyaton@gmail.com</Text>

        <Text style={styles.name}>Cynthia Caban</Text>
        <Text style={styles.email}>cs.cynthiamcaban@gmail.com</Text>

        <Text style={styles.name}>Neil Angelo Sombillo</Text>
        <Text style={styles.email}>2019996812@dhvsu.edu.ph</Text>

        <Text style={styles.name}>Justine Eraniel Salalila</Text>
        <Text style={styles.email}>justine.eraniel@gmail.com</Text>

        <Text style={{ textAlign: "center" }}>© Thesis Capstone.</Text>
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
  name: {
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
  },
  email: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 10,
  },
})
