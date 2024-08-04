import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import Moutps from "../../assets/Moutps.png";
import Email from "../../assets/Email.png"
import Notification from "../../assets/Notification.png"
import Menu from "../../assets/Menu.png"
import { Image } from 'react-native';

export default function Navbar() {
  const handleEmailPress = () => {
    console.log('Email button pressed');
  };

  const handleNotificationPress = () => {
    console.log('Notification button pressed');
  };

  const handleMenuPress = () => {
    console.log('Menu button pressed');
  };

  return (
    <View style={tw ` `}>
      <View style={tw`w-full mt-2 h-20 flex-row   justify-around`}>
        <Image source={Moutps} style={tw`w-30  h-12 -ml-5 `} />
        <View style={tw`flex-row ml-4 -mr-3 mt-3`}>
          <TouchableOpacity onPress={handleEmailPress} style={tw`items-center mx-2 `}>
            <Image source={Email} style={tw`w-11 h-7 rounded-full`} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNotificationPress} style={tw`items-center mx-2`}>
            <Image source={Notification} style={tw`w-10 h-7 rounded-full`} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleMenuPress} style={tw`items-center mx-2`}>
            <Image source={Menu} style={tw`w-10 h-7 rounded-full`} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={tw`flex-1 bg-blue-200 justify-center items-center`}>
        {/* Additional content for your Navbar */}
      </View>
    </View>
  );
}