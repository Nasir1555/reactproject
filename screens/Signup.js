import { View, Text,Image,Button,TextInput,StyleSheet} from 'react-native'
import React, { useState } from 'react'
import { auth } from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Signup=({navigation})=> {
   const [email,setEmail]=useState('')
   const [Password,setPassword]=useState('')
   const signupscreen=()=>{
    createUserWithEmailAndPassword(auth, email, Password)
    .then((userCredential) => {
        alert("user created succesfully");
        navigation.replace("LoginScreen");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
   }
  return (
   <View>
    <View style={{backgroundColor:'white'}}>
   <Image source={{uri:("https://th.bing.com/th/id/OIP.25iSkbJTm4F-Rq0g1JR8NgHaHa?pid=ImgDet&w=512&h=512&rs=1.jpg")}}
   style={{height:150,width:200,marginLeft:100}}
   ></Image></View>
   <View style={{backgroundColor:'white',height:500,width:420,justifyContent:'center',borderRadius:2,margin:15}}>
   <Text style={{fontSize:30,justifyContent:'center',alignItems:'center',marginLeft:10}}>Welcome to Computer institute</Text>
  
    <View style={{backgroundColor:'white', margin:20,fontSize:50,borderColor:'black'}}>
      <Text style={{fontSize:20}}>First Name</Text>
    <TextInput placeholder='Enter your  First Name ' style={styles.input} ></TextInput></View>

    <View style={{backgroundColor:'white', margin:20,fontSize:50,borderColor:'black'}}>
      <Text style={{fontSize:20}}>Last Name</Text>
    <TextInput placeholder='Enter your Last Name ' style={styles.input} ></TextInput></View>

    <View style={{backgroundColor:'white', margin:20,fontSize:50,borderColor:'black'}}>
      <Text style={{fontSize:20}}>Email</Text>
    <TextInput placeholder='Enter your Email Account  ' value={email} onChangeText={txt=>setEmail(txt)} style={styles.input} ></TextInput></View>
    <View style={{backgroundColor:'white', margin:20,fontSize:50,borderColor:'black'}}>
      <Text style={{fontSize:20}}>Password</Text>
    <TextInput placeholder='Enter your Password ' value={Password} onChangeText={txt=>setPassword(txt)}  style={styles.input} ></TextInput></View>

    <View style={{backgroundColor:'blue',margin:30,borderRadius:500,marginRight:60}}>

  <Button title="Signup" color="white" onPress={()=>signupscreen()}></Button> 
  </View>

   </View>

 </View>
  )
}

export default Signup;
const styles = StyleSheet.create({
  input:{
    height:40,width:350,
    borderColor:'black',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,borderRadius:10

  }
});