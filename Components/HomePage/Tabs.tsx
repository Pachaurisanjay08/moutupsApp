import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const Tabs = () => {
  return (
    <View style={tw `flex-row justify-evenly mx-3 w-full  bg-[#ffffff] ` }>
     <Text style={tw`text-[#322f50] text-xl`} >Jobs</Text>
     <Text style={tw`text-[#5e5b81] ml-12 text-xl`}>Saved Jobs</Text>
    
    </View>
  )
}

export default Tabs