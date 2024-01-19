import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [addedGoals, setAddedGoals] = useState([]);

  const textInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const buttonHandler = () => {
    setAddedGoals((currentGoals) => [enteredGoal, ...currentGoals]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Goal Here"
          onChangeText={textInputHandler}
        />
        <Button title="Add" onPress={buttonHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView>
        {addedGoals.map((goal) => (
          <View style={styles.goalItem} key={goal}>
            <Text style={styles.goalText}>
              {goal}
            </Text>
          </View>
        ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    backgroundColor: "#5e0acc",
    borderRadius: 6,
  },
  goalText: {
    color: "white",
  },
});
