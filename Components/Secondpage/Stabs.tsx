import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const Stabs = () => {
  return (
    <>
    <View style={tw `flex-row justify-evenly mx-3 w-full mt-3 h-10 ` }>
     <Text style={tw`text-[#322f50] text-[16px] font-normal`} >My applies</Text>
     <Text style={tw`text-[#5e5b81] text-[16px] font-normal`}>My refers</Text>
     <Text style={tw`text-[#5e5b81]  text-[16px] font-normal`}>Invites</Text>
    
    </View>
    <View style={tw`w-screen h-[2px] bg-gray-300 mt-1`}></View>
    </>
  )
}

export default Stabs