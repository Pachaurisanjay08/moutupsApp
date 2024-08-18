import { View, Text } from 'react-native'
import React from 'react'
import SearchPageHeader from './SearchPageHeader'
import SearchJobList from './SearchJobList'
import Footer from '../HomePage/Footer'

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