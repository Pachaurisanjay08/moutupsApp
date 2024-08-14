import { View, Image, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import Back from "../../assets/Back.png"
import { useNavigation } from '@react-navigation/native';
import Setting from "../../assets/Setting.png"
const Profileheader = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    console.log('Back button pressed');
  };
  return (
    <View >
      <View style={tw`w-full p-5 h-16 flex-row   justify-around `}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={tw` -ml-4 `}>
            <Image source={Back} style={tw`w-[20px] h-[13px] rounded-full`} />
          </TouchableOpacity>
          <Text  style={tw`mx-19 text-base  text-black font-semibold`} >Profile</Text>
          <Image source={Setting} style={tw`w-6 h-6`}/>
        </View>
    </View>
  )
}

export default Profileheader