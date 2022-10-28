import { View ,TextInput ,Button , Modal ,Image} from 'react-native';
import {StyleSheet} from 'react-native';
import { useState} from 'react';
function GoalInput(props){
    const [enteredGoalText, setEnteredGoalText] = useState('');
    function goalinputhandler(enteredtext) {
        setEnteredGoalText(enteredtext);
      }
function addGoalHandler(){
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
}

return(
  <Modal visible={props.visible} animationType='slide'>
    <View style={styles.inputcontainer}>
      <Image style={styles.image} source={require("../assets/images/goals.png")} />
    <TextInput style={styles.textInput}
     placeholder='Type your Goal'
      onChangeText={goalinputhandler} value={enteredGoalText}/>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button color={"#FFCE45"} title='Add Goal' onPress={addGoalHandler} />
        </View> 
        <View style={styles.button}>
          <Button color={"red"} title="Cancel" onPress={props.onCancel}/>
        </View>
        
        
        </View>
    
  </View></Modal> 
  );
}
export default GoalInput;

const styles= StyleSheet.create({
    inputcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:16,
        backgroundColor: "#369EFD"
      },
      textInput: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#e4d0ff',
        width: '100%',
        color: "#120438",
        padding: 12,
        backgroundColor: 'white',
        
    
      },
      buttonContainer:{
        marginTop:16,
        flexDirection: 'row'

      },
      button :{
        width:100,
        marginHorizontal: 8
      },
      image:{
        width:350,
        height:190,
        margin:20
      }

})