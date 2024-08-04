
import React from 'react'
import { Image, TouchableOpacity, View, Text } from 'react-native';
import tw from 'twrnc';


import home from "../../assets/Homeimg.png";
import Profile from "../../assets/Profile.png";
import Earning from "../../assets/Earning.png";
import Apply from "../../assets/Apply.png";
const Footer = () => {
    const handlehomePress = () => {
        console.log('Home button pressed');
      };
    
      const handleEarningPress = () => {
        console.log('Earning button pressed');
      };
    
      const handleApplyPress = () => {
        console.log('Apply button pressed');
      };
    
      const handleProfilePress = () => {
        console.log('Profile button pressed');
      };
    
  return (
    <View style={tw` border-t-2 border-white h-18  `}>
        <View style={tw`flex-row justify-around w-full p-1`}>
          <TouchableOpacity onPress={handlehomePress} style={tw`items-center mx-2`}>
            <Image source={home} style={tw`w-8 h-8 rounded-full`} />
            <Text style={tw`text-[#8c8a9c]`}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleApplyPress} style={tw`items-center mx-2`}>
            <Image source={Apply} style={tw`w-8 h-8 rounded-full`} />
            <Text style={tw`text-[#8c8a9c]`}>My Applies</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleEarningPress} style={tw`items-center mx-2`}>
            <Image source={Earning} style={tw`w-8 h-8 rounded-full`} />
            <Text style={tw`text-[#8c8a9c]`}>Earning</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleProfilePress} style={tw`items-center mx-2`}>
            <Image source={Profile} style={tw`w-8 h-8 rounded-full`} />
            <Text style={tw`text-[#8c8a9c]`}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
  )
}

export default Footer