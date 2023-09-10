import { View, Text,Image,Button,TextInput,StyleSheet} from 'react-native'
import React,{ useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase.config';

const LoginScreen=({navigation})=> {
  const [email,setEmail]=useState('')
  const [Password,setPassword]=useState('')
  const Login=()=>{
    signInWithEmailAndPassword(auth, email, Password)
   .then((userCredential) => {
    // Signed in 
    navigation.replace("Courses");
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });

  }
  return (
   <View>
   {/* <Image source={{uri:("https://th.bing.com/th/id/OIP.25iSkbJTm4F-Rq0g1JR8NgHaHa?pid=ImgDet&w=512&h=512&rs=1.jpg")}}
   style={{height:400,width:400}}
   ></Image> */}
   <View style={{backgroundColor:'white',height:700,width:420,justifyContent:'center',borderRadius:20}}>
   <Text style={{fontSize:30,justifyContent:'center',alignItems:'center'}}> Login To Your Account</Text>
  
    <View style={{backgroundColor:'white', margin:20,fontSize:50,borderColor:'black'}}>
      <Text style={{fontSize:20}}>Email</Text>
    <TextInput placeholder='Enter your Email ' style={styles.input} value={email} onChangeText={txt=>setEmail(txt)} ></TextInput></View>
    <View style={{backgroundColor:'white', margin:20,fontSize:50,borderColor:'black'}}>
      <Text style={{fontSize:20}}>Password</Text>
    <TextInput placeholder='Enter your Password 'style={styles.input} value={Password} onChangeText={txt=>setPassword(txt)} ></TextInput></View>

    <View style={{backgroundColor:'blue', margin:50,borderRadius:50,marginLeft:30,marginRight:60}}>

  <Button title="Signin" color="white" onPress={()=>(Login())}></Button> 
  </View>
  
   </View>

 </View>
  )
}

export default LoginScreen;
const styles = StyleSheet.create({
  input:{
    height:40,width:350,
    borderColor:'black',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,borderRadius:10

  }
});