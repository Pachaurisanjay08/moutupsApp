import { View, Text } from 'react-native'
import React from 'react'
import Header from './Header'
import tw from 'twrnc'
import Stabs from "./Stabs"
import SearchBar from '../HomePage/SearchBar'
import Sjob from './Sjob'
import Footer from '../HomePage/Footer'


const Spage = () => {
  return (
    <View style= {tw`w-screen bg-[#ffffff] `}>
      <View style= {tw`w-full  flex-col`}><Header/></View> 
      <Stabs />
     
     
      <Sjob/>
      
    </View>
  )
}

export default Spage