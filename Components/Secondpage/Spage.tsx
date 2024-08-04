import { View, Text } from 'react-native'
import React from 'react'
import Header from './Header'
import tw from 'twrnc'
import Stabs from "./Stabs"
import SearchBar from '../Firstpage/SearchBar'
import Sjob from './Sjob'
import Footer from '../Firstpage/Footer'


const Spage = () => {
  return (
    <View style= {tw`w-screen `}>
      <View style= {tw`w-full  flex-col`}><Header/></View> 
      <Stabs />
     
     
      <Sjob/>
      <Footer/>
    </View>
  )
}

export default Spage