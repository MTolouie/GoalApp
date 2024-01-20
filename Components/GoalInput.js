import { StyleSheet, View, TextInput, Button, Modal,Image } from "react-native";
import { useState } from "react";
const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const textInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const buttonHandler = () => {
    props.buttonHandler(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/Images/goal.png")} />
        <TextInput
          style={styles.textInput}
          placeholder="Your Goal Here"
          onChangeText={textInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="#b180f0" onPress={props.closeModal} />
          </View>
          <View style={styles.button}>
            <Button title="Add" color="#f31282" onPress={buttonHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});

export default GoalInput;
