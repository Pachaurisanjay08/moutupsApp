import { View, Text, Image } from 'react-native';
import React from 'react';
import Photo from '../../assets/Photo.png';
import tw from 'twrnc';

const Profilepic = () => {
  return (
    <View>
    <View style={tw`justify-center items-center `}>
      <Image source={Photo} style={tw`w-[88px] h-[88px] rounded-full `} />
      <Text style={tw`text-lg font-semibold mb-1`}>P Nirmal Kumar</Text>
      <Text style={tw`text-sm`}>UI UX Designer</Text></View>
      <View style={tw`flex-row justify-evenly mt-3 `}>
        <Text style={tw` w-26 h-7 ml-1 px-3 py-1 bg-[#d7ecf1] rounded-4`}><Text style={tw`text-black`}>25 </Text> Applied</Text>
        <Text style={tw` w-26 h-7 mx-1 px-3 py-1 bg-[#d7ecf1] rounded-4`}><Text style={tw`text-black`}>25 </Text> Referred</Text>
        <Text style={tw` w-26 h-7 mx-1 px-3 py-1 bg-[#d7ecf1] rounded-4`}><Text style={tw`text-black`}>25 </Text> Invited</Text>

      </View>
      <View style={tw`border-b border-gray-300 my-6`} />
    </View>
  );
};

export default Profilepic;
