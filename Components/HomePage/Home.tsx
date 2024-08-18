import { View, Text } from 'react-native'
import React from 'react'
import Navbar from './Navbar'
import tw from 'twrnc'
import SearchBar from './SearchBar'
import Job from './Job'
import Footer from './Footer'
import Tabs from './Tabs'


const Home = () => {
    
  return (
    <View style= {tw`w-screen bg-[#ffffff]`}>
        <View style= {tw`w-full h-1/5 flex-col bg-[#ffffff]`}><Navbar/> 
         </View>
       <Tabs/>
       <View style={tw`w-screen h-[2px] bg-gray-300 mt-4`}></View>

        <View>
        <SearchBar setSearchText={""}/>
        <Text style= {tw`text-[16px] text-[#9a9ea6] font-semibold ml-5 mb-1 mt-2` }>Recommended Jobs</Text>
            <Job/>
            
           </View>
       
  </View>
  )
}

export default Home