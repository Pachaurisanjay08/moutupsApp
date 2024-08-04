import { View, Text, Image } from 'react-native';
import React from 'react';
import Follow from "../../assets/Follow.png";
import tw from 'twrnc';

const Msg = () => {
  const colors = ['bg-blue-500', 'bg-red-500', 'bg-yellow-500', 'bg-green-500'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <View style={tw`flex-row items-center p-4 border-b border-gray-200`}>
      <Image source={Follow} style={tw`w-12 h-12 rounded-full`} />
      <View style={tw`ml-4 flex-1`}>
        <Text style={tw`text-base font-semibold`}>Robert <Text style={tw`font-normal`}>invited you to follow</Text></Text>
        <Text style={tw`text-sm text-gray-500`}>invited you to follow</Text>
        <Text style={tw`text-sm text-gray-500 mt-1`}>now</Text>
      </View>
      <View style={tw`w-3 h-3 rounded-full ${randomColor}`} />
    </View>
  );
}

export default Msg;
