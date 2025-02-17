import * as React from "react"
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native"
import BGImage from "../assets/BG.png"

import { Audio } from "expo-av"

import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from "react-native-vector-icons/Ionicons"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

// Screens
// import HomeScreen from "./screen/HomeScreen"
import FavoriteScreen from "./screen/FavoriteScreen"
// import QuizScreen from "./screen/QuizScreen"
import SettingsScreen from "./screen/SettingsScreen"
import AboutScreen from "./screen/AboutScreen"
import ActionScreen from "./screen/ActionScreen"
import BodyPartsScreen from "./screen/BodyPartsScreen"
import CommonGreetingsScreen from "./screen/CommonGreetingsScreen"
import FamilyScreen from "./screen/FamilyScreen"
import EasyQuizScreen from "./screen/EasyQuizScreen"
import MediumQuizScreen from "./screen/MediumQuizScreen"
import HardQuizScreen from "./screen/HardQuizScreen"

// Popup
import PopupScreen from "../components/Popup"

// Images
import BodyPic from "../assets/bodyParts/EYES.png"
import ActionPic from "../assets/Actions/TOAPOLOGIZE.png"
import GreetingsPic from "../assets/commonGreetings/Excuseme.png"
import FamilyPic from "../assets/family/Cousin.png"

//

import ActionLogoPic from "../assets/Categories_picture/actions.png"
import BodyLogoPic from "../assets/Categories_picture/bodyparts.png"
import GreetingsLogoPic from "../assets/Categories_picture/Greetings.png"
import FamilyLogoPic from "../assets/Categories_picture/Family.png"

import ActionLogo from "../assets/Categories_Name/actionswhitebackground.jpg"
import BodyLogo from "../assets/Categories_Name/bodypartswhitebackground.jpg"
import GreetingsLogo from "../assets/Categories_Name/commongreetingswhitebackground.jpg"
import FamilyLogo from "../assets/Categories_Name/familywhitebackground.jpg"

// Screen Names
const homeName = "Home"
const favoriteName = "Favorite"
const quizName = "Quiz"
const settingsName = "Settings"
const aboutName = "About"
const actionName = "Action"
const popUpName = "Popup"
const bodyPartsName = "Body Parts"
const commonGreetingsName = "Common Greetings"
const familyName = "Family"
const easyQuizName = "Easy Quiz"
const mediumQuizName = "Medium Quiz"
const hardQuizName = "Hard Quiz"

const Tab = createBottomTabNavigator()
const HomeStack = createNativeStackNavigator()
const QuizStack = createNativeStackNavigator()

// Home Screen

function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={BGImage} style={styles.backgroundimage}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={{ fontSize: 26, fontWeight: "bold" }}>Action</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Action")}>
            <Image
              source={ActionLogoPic}
              style={{
                height: 100,
                width: 250,
                borderRadius: 20,
                borderColor: "#009688",
                marginTop: 5,
                overflow: "hidden",
                borderWidth: 3,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Text style={{ fontSize: 26, fontWeight: "bold" }}>Body Parts</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Body Parts")}>
            <Image
              source={BodyLogoPic}
              style={{
                height: 100,
                width: 250,
                borderRadius: 20,
                borderColor: "#009688",
                marginTop: 5,
                overflow: "hidden",
                borderWidth: 3,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Text style={{ fontSize: 26, fontWeight: "bold" }}>
            Common Greetings
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Common Greetings")}
          >
            <Image
              source={GreetingsLogoPic}
              style={{
                height: 100,
                width: 250,
                borderRadius: 20,
                borderColor: "#009688",
                marginTop: 5,
                overflow: "hidden",
                borderWidth: 3,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Text style={{ fontSize: 26, fontWeight: "bold" }}>Family</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Family")}>
            <Image
              source={FamilyLogoPic}
              style={{
                height: 100,
                width: 250,
                borderRadius: 20,
                borderColor: "#009688",
                marginTop: 5,
                overflow: "hidden",
                borderWidth: 3,
              }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  )
}

// Home Redirect Screens

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name='Home Stack'
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen name={actionName} component={ActionScreen} />
      <HomeStack.Screen name={bodyPartsName} component={BodyPartsScreen} />
      <HomeStack.Screen
        name={commonGreetingsName}
        component={CommonGreetingsScreen}
      />
      <HomeStack.Screen name={familyName} component={FamilyScreen} />
      <HomeStack.Screen
        name={popUpName}
        component={PopupScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  )
}

// Quiz Screen

function QuizScreen({ navigation }) {
  return (
    <ImageBackground source={BGImage} style={styles.backgroundimage}>
      <View style={styles.container}>
        <Text
          onPress={() => alert('This is "Quiz" screen.')}
          style={{ fontSize: 26, fontWeight: "bold" }}
        >
          Easy Quiz
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Easy Quiz")}>
          <Image
            source={BodyPic}
            style={{
              height: 100,
              width: 250,
              borderRadius: 20,
              borderColor: "#009688",
              marginTop: 5,
              overflow: "hidden",
              borderWidth: 3,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text
          onPress={() => alert('This is "Quiz" screen.')}
          style={{ fontSize: 26, fontWeight: "bold" }}
        >
          Medium Quiz
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Medium Quiz")}>
          <Image
            source={GreetingsPic}
            style={{
              height: 100,
              width: 250,
              borderRadius: 20,
              borderColor: "#009688",
              marginTop: 5,
              overflow: "hidden",
              borderWidth: 3,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text
          onPress={() => alert('This is "Quiz" screen.')}
          style={{ fontSize: 26, fontWeight: "bold" }}
        >
          Hard Quiz
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Hard Quiz")}>
          <Image
            source={ActionPic}
            style={{
              height: 100,
              width: 250,
              borderRadius: 20,
              borderColor: "#009688",
              marginTop: 5,
              overflow: "hidden",
              borderWidth: 3,
            }}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

// Quiz Stack Screen

function QuizStackScreen() {
  return (
    <QuizStack.Navigator>
      <QuizStack.Screen
        name='Quiz Screen Stack'
        component={QuizScreen}
        options={{ headerShown: false }}
      />
      <QuizStack.Screen name={easyQuizName} component={EasyQuizScreen} />
      <QuizStack.Screen name={mediumQuizName} component={MediumQuizScreen} />
      <QuizStack.Screen name={hardQuizName} component={HardQuizScreen} />
    </QuizStack.Navigator>
  )
}

export default function MainContainer() {
  const [sound, setSound] = React.useState()

  async function playSound() {
    console.log("Loading Sound")
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/backgroundmusic.mp3")
    )
    setSound(sound)

    console.log("Playing Sound")
    await sound.playAsync()
  }

  React.useEffect(() => {
    playSound()
  }, [10])

  return (
    <NavigationContainer>
      <Tab.Navigator
        // initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName
            let rn = route.name

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline"
            } else if (rn === favoriteName) {
              iconName = focused ? "bookmark" : "bookmark-outline"
            } else if (rn === quizName) {
              iconName = focused ? "list" : "list-outline"
            } else if (rn === settingsName) {
              iconName = focused ? "settings" : "settings-outline"
            } else if (rn === aboutName) {
              iconName = focused ? "people-circle" : "people-circle-outline"
            }

            return <Ionicons name={iconName} size={size} color={color} />
          },
        })}
      >
        <Tab.Screen name={homeName} component={HomeStackScreen} />
        {/* <Tab.Screen name={favoriteName} component={FavoriteScreen} /> */}
        <Tab.Screen name={quizName} component={QuizStackScreen} />
        {/* <Tab.Screen name={settingsName} component={SettingsScreen} /> */}
        <Tab.Screen name={aboutName} component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(234,234,234,.8)",
    paddingTop: StatusBar.currentHeight,
  },
  backgroundimage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
})
