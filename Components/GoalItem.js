import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = (props) => {
  const deleteGoal = () => {
    props.onDeleteHandler(props.id);
  };

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        style={({ pressed }) => {
          pressed && styles.pressedGoal;
        }}
        onPress={deleteGoal}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    backgroundColor: "#5e0acc",
    borderRadius: 6,
  },
  goalText: {
    padding: 8,
    color: "white",
    },
  pressedGoal: {
    opacity: 0.5,
    borderRadius: 6,
    backgroundColor: "#210644",
  },
});

export default GoalItem;
