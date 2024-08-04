import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import NotificationHeader from './NotificationHeader'
import Footer from "../Firstpage/Footer"
import Msg from './Msg'

const NotificationsList = () => {
  return (
    <View >
      <NotificationHeader/>
      <ScrollView style={tw`h-84%`}>
      <View style={tw`ml-5`} >
      <Text style={tw`text-lg font-semibold text-black ml-4`}>Today</Text>
     <Msg/>
     <Msg/>
     <Msg/>
     <Msg/>
     <Text style={tw`text-lg font-semibold text-black ml-4 mt-4`}>Yesterday</Text>
     <Msg/>
     <Msg/>
     <Msg/>
     </View>
     </ScrollView>
     <Footer/>
    </View>
  )
}

export default NotificationsList