import { View, Image, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import Back from "../../assets/Back.png"
import { useNavigation } from '@react-navigation/native';
const Header = () => {
  const navigation = useNavigation();
  const handleBackPress = () => {
    console.log('Back button pressed');
  };
  return (
    <View >
      <View style={tw`w-full p-5 h-14 flex-row   `}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={tw` -ml-4 `}>
            <Image source={Back} style={tw`w-[20px] h-[13px] rounded-full`} />
          </TouchableOpacity>
      
          <Text  style={tw`mx-19`} >***********</Text>
        </View>
    </View>
  )
}

export default Header