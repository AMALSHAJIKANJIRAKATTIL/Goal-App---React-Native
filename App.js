import { useState } from 'react';
import { StyleSheet, ScrollView, Text, TextInput, View, Button , FlatList } from 'react-native';
import GoalItem from './components/Goalitem';
import GoalInput from './components/Goalinput';
import { StatusBar } from 'expo-status-bar';
export default function App() {
  const [modalIsVisible , setModalIsVisible]=useState(false)
  const [courseGoals, setCourseGoals] = useState([]);
  
  function endGoalHandler(){
    setModalIsVisible(false);
  }

  function startAddGoalHandler(){
    setModalIsVisible(true);
  }

  function goaladdhandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, 
      {text:enteredGoalText ,id: Math.random().toString()}]);
      endGoalHandler();
  }

  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id  !== id);
    });
  }

  return (
    <>
    <StatusBar style='auto'/>
    <View style={styles.container}>
      <Button  title='Add New Goal' color="#FFCE45"  onPress={startAddGoalHandler}/>
      {<GoalInput onAddGoal={goaladdhandler} visible={modalIsVisible} onCancel={endGoalHandler} />}
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={itemData => {
          return <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler}/>
        }} keyExtractor={(item,index) => {
          return item.id;
        }}/>
      </View>
    </View>
    </>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 16,
    backgroundColor: "#369EFD"
  },
  
  goalsContainer: {
    flex: 5,
    paddingTop: 16
  }
  
});
