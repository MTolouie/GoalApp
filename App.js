import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalItem from "./Components/GoalItem";
import GoalInput from "./Components/GoalInput";

export default function App() {
  const [addedGoals, setAddedGoals] = useState([]);

  const buttonHandler = (enteredGoal) => {
    setAddedGoals((currentGoals) => [
      { text: enteredGoal, id: Math.random().toString() },
      ...currentGoals,
    ]);
  };

  const deleteGoal = (id) => {
    setAddedGoals((currentGoals) => {
      return currentGoals.filter((goal)=>  goal.id !== id);
    });
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput buttonHandler={buttonHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={addedGoals}
          renderItem={(goal) => {
            return (
              <GoalItem
                id={goal.item.id}
                text={goal.item.text}
                onDeleteHandler={deleteGoal}
              />
            );
          }}
          keyExtractor={(goal, index) => {
            return goal.id;
          }}
        ></FlatList>
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

  goalsContainer: {
    flex: 5,
  },
});
