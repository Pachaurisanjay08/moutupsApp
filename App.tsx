import { View, Text, Image} from 'react-native'
import React from 'react'
import { enableScreens } from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator}from '@react-navigation/bottom-tabs'
import Home from './Components/Firstpage/Home'
import Info from './Components/Profile/Info'
import Spage from './Components/Secondpage/Spage'
import Earning from './Components/Earnings/Earning'


import Icon from 'react-native-vector-icons/Ionicons'; 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
  // Or use any other icon library

 const Tab =createBottomTabNavigator();
const App = () => {
  enableScreens()
  return (


   
  
  

 <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconSource;

            if (route.name === 'Home') {
              iconSource = focused
                ? require('./assets/home-active.png')
                : require('./assets/Homeimg.png');
            } else if (route.name === 'My Applies') {
              iconSource = focused
                ? require('./assets/applies-active.png')
                : require('./assets/Apply.png');
           
            } else if (route.name === 'Earnings') {
              iconSource = focused
                ? require('./assets/earnings-active.png')
                : require('./assets/Earning.png');
            } else if (route.name === 'Profile') {
              iconSource = focused
                ? require('./assets/profile-active.png')
                : require('./assets/Profile.png');
            }

            return <Image source={iconSource} style={{ width: 24, height: 24 }} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'gray',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="My Applies" component={Spage} />
        {/* <Tab.Screen name="Search Jobs" component={SearchJobPage} /> */}
        <Tab.Screen name="Earnings" component={Earning} />
        <Tab.Screen name="Profile" component={Info} />
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}; 



export default App