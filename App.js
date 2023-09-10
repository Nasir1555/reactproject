import { View, Text,Image,Button} from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './screens/homescreen';
import LoginScreen from './screens/LoginScreen';
import Signup from './screens/Signup';
import Courses from './screens/Courses';
import JavaScreen from './coursescreens/JavaScreen';
import CScreen from './coursescreens/CScreen';
import PythonScreen from './coursescreens/PythonScreen';
import JavaScriptScreen from './coursescreens/JavaScriptScreen';
import CsharpScreen from './coursescreens/CsharpScreen';
import payment from './coursescreens/payment';
import { auth } from './firebase/firebase.config';
import AndroidScreen from './AdvanceCourses/AndroidScreen';
import ReactScreen from './AdvanceCourses/ReactScreen';
import MachineLearningScreen from './AdvanceCourses/MachineLearningScreen';
import GraphicScreen from './AdvanceCourses/GraphicScreen';
import WebScreen from './AdvanceCourses/WebScreen';
import Profile from './screens/Profile';
import YouTubeVideoScreen from './screens/YouTubeVideoScreen';
import SelectCourses from './screens/SelectCourses';
import CertificateScreen from './screens/CertificateScreen';
import CertificateImage from './screens/CertificateImage';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen}/> 
        <Stack.Screen name="Courses" component={Courses}/> 
        <Stack.Screen name="Signup" component={Signup}/> 
        <Stack.Screen name="JavaScreen" component={JavaScreen}/> 
        <Stack.Screen name="CScreen" component={CScreen}/>
        <Stack.Screen name="PythonScreen" component={PythonScreen}/>
        <Stack.Screen name="CsharpScreen" component={CsharpScreen}/>
        <Stack.Screen name="JavaScriptScreen" component={JavaScriptScreen}/>
        <Stack.Screen name="AndroidScreen" component={AndroidScreen}/>
        <Stack.Screen name="ReactScreen" component={ReactScreen}/>
        <Stack.Screen name="MachineLearningScreen" component={MachineLearningScreen}/>
        <Stack.Screen name="GraphicScreen" component={GraphicScreen}/>
        <Stack.Screen name="WebScreen" component={WebScreen}/>
        <Stack.Screen name="payment" component={payment}/> 
        <Stack.Screen name="Profile" component={Profile}/> 
        <Stack.Screen name="SelectCourses" component={SelectCourses} />
        <Stack.Screen name="YouTubeVideoScreen" component={YouTubeVideoScreen} />
        <Stack.Screen name="CertificateScreen" component={CertificateScreen} />
        <Stack.Screen name="CertificateImage" component={CertificateImage} />
      </Stack.Navigator>
    
    </NavigationContainer>
  )
}