import { View, Text, ScrollView } from 'react-native'
import tw from 'twrnc'
import React from 'react'
import Aboutme from "./Aboutme"
import Skills from './Skills'
import Resume from "./UpdateResumeComponent"
import Qualification from './AddQualificationComponent'
import AddLanguageComponent from './AddLanguageComponent'
import Profileheader from './Profileheader';
import Profilepic from './Profilepic'
import Footer from "../Firstpage/Footer"

const Info = () => {
  return (
    <View style= {tw`w-screen `}>
    <View style= {tw`w-full  flex-col`}><Profileheader/>
    <Profilepic/>
    </View> 
    
    <ScrollView  style={tw`w-screen h-62%`}>
    <View>
    <Aboutme/>
    <Skills/>
     <Qualification/>
     <AddLanguageComponent/>
     </View>
     </ScrollView>
    
     </View>
     
  )
}

export default Info