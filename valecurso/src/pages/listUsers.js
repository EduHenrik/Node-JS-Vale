
import React,{useState, useEffect} from 'react';
import {View,Text,StyleSheet,ScrollView, FlatList} from 'react-native';
import api from '../services/api';


export default ListUsers => {
  const [users,setUsers] = useState([]);
  useEffect(()=>{
      async function loadUsers(){
          const response = await api.get('/');
          setUsers(response.data);
      }
      loadUsers();
  },[])

 
  return (
    
    <View style={styles.container}>
    <ScrollView horizontal = {true}>
      {users.map(user =>(
        <View style={styles.box} key={user._id} >
          <Text style ={styles.text}>{user.name}</Text> 
        </View>
      ))}
    </ScrollView>
    </View> 
   
  )
  
}

const styles  = StyleSheet.create({
  box : {
  marginBottom : 5,
  height : 100 ,
  borderRadius : 8,
  width : 320 ,
  backgroundColor : '#FFF',
  alignItems : 'center',
  justifyContent : 'center',
  },
  container : {
     paddingTop : 20,
     flex :1 ,
     backgroundColor : '#1C939A',
     alignItems : 'center'
  },
  text: {
    color : '#333',
    fontSize : 26,
    fontWeight : 'bold'
  }
})




