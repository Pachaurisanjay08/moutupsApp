import { View, Text } from 'react-native'
import React from 'react'
import SearchPageHeader from './SearchPageHeader'
import SearchBar from '../Firstpage/SearchBar'
import SearchJobList from './SearchJobList'
import Footer from '../Firstpage/Footer'

const SearchJobPage = () => {
  return (
    <View>
      <SearchPageHeader/>
      
      <SearchJobList/>
      <Footer/>
    </View>
  )
}

export default SearchJobPage