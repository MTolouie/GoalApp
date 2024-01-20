import { Fragment, useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./Components/GoalItem";
import GoalInput from "./Components/GoalInput";
import { StatusBar } from "expo-status-bar";
export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [addedGoals, setAddedGoals] = useState([]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const buttonHandler = (enteredGoal) => {
    setAddedGoals((currentGoals) => [
      { text: enteredGoal, id: Math.random().toString() },
      ...currentGoals,
    ]);
    setIsModalVisible(false);
  };

  const deleteGoal = (id) => {
    setAddedGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <Fragment>
    <StatusBar  style="light"/>
    <View style={styles.appContainer}>
      <Button onPress={showModal} title="Add Goal" color="#a065ec" />
      <GoalInput closeModal={closeModal} visible={isModalVisible} buttonHandler={buttonHandler} />
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
    </Fragment>
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
