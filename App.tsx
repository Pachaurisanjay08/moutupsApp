import { View, Text } from 'react-native'
import React from 'react'
import { IconButton, Card } from 'react-native-paper';
import tw from "twrnc"
import Home from './Components/Firstpage/Home'
import Info from './Components/Profile/Info'
import Sjob from './Components/Secondpage/Sjob'
import Aboutme from './Components/Profile/Aboutme'
import Msg from './Components/Notification/Msg'
import Sjobcard from './Components/Secondpage/Sjobcard';
import Spage from './Components/Secondpage/Spage';
import SearchJobPage from './Components/SearchJobPage/SearchJobPage';
import Filter from './Components/Filter/Filter';

const App = () => {
  return (
    <View>
  <SearchJobPage/>
    </View>
  )
}

export default App