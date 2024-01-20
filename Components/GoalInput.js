import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from "react";
const GoalInput = (props) => {

  const [enteredGoal, setEnteredGoal] = useState("");

  const textInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const buttonHandler = () => {
    props.buttonHandler(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your Goal Here"
        onChangeText={textInputHandler}
        value={enteredGoal}
      />
      <Button title="Add" onPress={buttonHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default GoalInput;
