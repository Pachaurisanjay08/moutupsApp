import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Back from "../../assets/Back.png"
import tw from "twrnc"
const NotificationHeader = () => {
 
    const handleBackPress = () => {
        console.log('Back button pressed');
      };
      return (
        <View >
          <View style={tw`w-full p-5 h-16 flex-row   justify-around `}>
      <TouchableOpacity onPress={handleBackPress} style={tw` ml-2`}>
            <Image source={Back} style={tw`w-[20px] h-[13px] rounded-full`} />
          </TouchableOpacity>
          <Text  style={tw`mx-auto text-base  text-black font-semibold`} >Notification</Text>
         
        </View>
        </View>
      )
    }

export default NotificationHeader