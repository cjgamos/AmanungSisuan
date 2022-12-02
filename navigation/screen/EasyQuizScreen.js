import { StatusBar } from "expo-status-bar"
import * as React from "react"
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Modal,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { easyQuizData } from "../../json/easyQuizData"

import BG from "../../assets/BG.png"
import Ionicons from "react-native-vector-icons/Ionicons"

export default function EasyQuizScreen({ navigation }) {
  const allQuestions = easyQuizData
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0)
  const [currentOptionSelected, setCurrentOptionSelected] = React.useState(null)
  const [correctOption, setCorrectOption] = React.useState(null)
  const [isOptionsDisabled, setIsOptionsDisabled] = React.useState(false)
  const [score, setScore] = React.useState(0)
  const [showNextButton, setShowNextButton] = React.useState(false)
  const [showScoreModal, setShowScoreModal] = React.useState(false)

  const renderQuestions = () => {
    return (
      <View>
        {/* Question Counter */}
        <View style={styles.renderQuestion}>
          <Text style={styles.textCounter}>{currentQuestionIndex + 1}</Text>
          <Text style={styles.textLength}>/ {allQuestions.length}</Text>
        </View>

        {/* Questions */}
        <Text style={styles.questionText}>
          {allQuestions[currentQuestionIndex]?.question}
        </Text>
      </View>
    )
  }

  const validateAnswer = (selectedOption) => {
    let correct_option = allQuestions[currentQuestionIndex]["correct_option"]
    setCurrentOptionSelected(selectedOption)
    setCorrectOption(correct_option)
    setIsOptionsDisabled(true)
    if (selectedOption == correct_option) {
      // Scoring
      setScore(score + 1)
    }
    // Show Next Button
    setShowNextButton(true)
  }

  const handleNext = () => {
    if (currentQuestionIndex == allQuestions.length - 1) {
      // Last Question
      // Show Score Modal
      setShowScoreModal(true)
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setCurrentOptionSelected(null)
      setCorrectOption(null)
      setIsOptionsDisabled(false)
      setShowNextButton(false)
    }
  }

  const renderNextButton = () => {
    if (showNextButton) {
      return (
        <TouchableOpacity
          onPress={handleNext}
          style={{
            marginTop: 20,
            width: "100%",
            backgroundColor: "#3498db",
            padding: 20,
            borderRadius: 5,
          }}
        >
          <Text style={{ fontSize: 20, color: "#FFFFFF", textAlign: "center" }}>
            Next
          </Text>
        </TouchableOpacity>
      )
    }
  }

  const renderOptions = () => {
    return (
      <View>
        {allQuestions[currentQuestionIndex]?.options.map((option) => (
          <TouchableOpacity
            key={option}
            disabled={isOptionsDisabled}
            style={{
              borderWidth: 3,
              borderColor:
                option == correctOption
                  ? "#00C851"
                  : option == currentOptionSelected
                  ? "#FF4444"
                  : "#1E90FF",
              backgroundColor:
                option == correctOption
                  ? "#00C85120"
                  : option == currentOptionSelected
                  ? "#FF444420"
                  : "#1E90FF20",
              height: 60,
              borderRadius: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              marginVertical: 10,
            }}
            onPress={() => validateAnswer(option)}
          >
            <Text style={styles.textOption}>{option}</Text>
            {/* Shows Check or Cross Icon Based on correct answer */}
            {option == correctOption ? (
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 30 / 2,
                  backgroundColor: "#00C851",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons
                  name='checkmark-circle-outline'
                  style={{ color: "#171717" }}
                  size={20}
                />
              </View>
            ) : option == currentOptionSelected ? (
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 30 / 2,
                  backgroundColor: "#FF4444",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons
                  name='close-circle-outline'
                  style={{ color: "#171717" }}
                  size={20}
                />
              </View>
            ) : null}
          </TouchableOpacity>
        ))}
      </View>
    )
  }

  const restartQuiz = () => {
    setShowScoreModal(false)

    setCurrentQuestionIndex(0)
    setScore(0)

    setCurrentOptionSelected(null)
    setCorrectOption(null)
    setIsOptionsDisabled(false)
    setShowNextButton(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={BG} style={styles.backgroundImage}>
        <StatusBar
          barStyle='light-content'
          backgroundColor='rgba(216,217,207,.5)'
        />
        <View style={styles.viewcontainer}>
          {/* ProgressBar */}

          {/* Question */}
          {renderQuestions()}

          {/* Options */}
          {renderOptions()}

          {/* Next Button */}
          {renderNextButton()}

          {/* Score Modal */}
          <Modal
            animationType='slide'
            transparent={true}
            visible={showScoreModal}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "rgba(234,234,234,0.8)",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: "#FFFFFF",
                  width: "90%",
                  borderRadius: 20,
                  padding: 20,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                  {score > allQuestions.length / 2
                    ? "Fantastic!"
                    : "More Practice!"}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    marginVertical: 20,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 30,
                      color:
                        score > allQuestions.length / 2 ? "#00C851" : "#FF4444",
                    }}
                  >
                    {score}
                  </Text>
                  <Text style={{ fontSize: 20, color: "#171717" }}>
                    /{allQuestions.length}
                  </Text>
                </View>
                {/* Retry Quiz Button */}
                <TouchableOpacity
                  onPress={restartQuiz}
                  style={{
                    backgroundColor: "#3498db",
                    padding: 20,
                    width: "100%",
                    borderRadius: 20,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "#FFFFFF",
                      fontSize: 20,
                    }}
                  >
                    Retry Quiz
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          {/* Background Image */}
          {/* <Image source={BG} style={styles.backgroundImage} /> */}
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  viewcontainer: {
    flex: 1,
    // paddingVertical: 40,
    paddingHorizontal: 16,
    backgroundColor: "rgba(234,234,234,.8)",
    position: "relative",
  },

  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  renderQuestion: {
    flexDirection: "row",
    alignItems: "flex-end",
  },

  textCounter: {
    color: "#171717",
    fontSize: 20,
    opacity: 0.6,
    marginRight: 2,
  },

  textLength: {
    color: "#171717",
    fontSize: 18,
    opacity: 0.6,
    // marginRight: 2,
  },

  questionText: {
    color: "#171717",
    fontSize: 30,
  },

  textOption: {
    fontSize: 20,
    color: "#171717",
  },

  touchableButton: {
    borderWidth: 3,
    borderColor: "#1E90FF",
    backgroundColor: "#1E90FF20",
    height: 60,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginVertical: 10,
  },
})
