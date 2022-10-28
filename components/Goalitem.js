import { StyleSheet , View , Text , Pressable} from 'react-native';

function GoalItem(props){


   return( 
      <Pressable android_ripple={{color: 'red'}} onPress={props.onDeleteItem.bind(this, props.id)}>
   <View style={styles.goal}>
   <Text style={styles.goaltext}>
      {props.text}
   </Text></View>
   </Pressable>
   );
};

export default GoalItem;

const styles=StyleSheet.create({

   goal: {
      margin: 8,
      borderRadius: 6,
      backgroundColor: '#195392',
      textAlign: 'center',
  
    },
    goaltext: {
      padding: 10,
      color: 'white',
      textAlign:'center'
  
    }

});