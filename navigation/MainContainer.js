import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from "react-native-vector-icons/Ionicons"

// Screens
import HomeScreen from "./screen/HomeScreen"
import FavoriteScreen from "./screen/FavoriteScreen"
import QuizScreen from "./screen/QuizScreen"
import SettingsScreen from "./screen/SettingsScreen"
import AboutScreen from "./screen/AboutScreen"
import ActionScreen from "./screen/ActionScreen"

// Screen Names
const homeName = "Home"
const favoriteName = "Favorite"
const quizName = "Quiz"
const settingsName = "Settings"
const aboutName = "About"

const Tab = createBottomTabNavigator()

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
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
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={favoriteName} component={ActionScreen} />
        <Tab.Screen name={quizName} component={QuizScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />
        <Tab.Screen name={aboutName} component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
