import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import Shell from "../../assets/Shell.png"
import Bookmark from "../../assets/Bookmark.png"
import Add from "../../assets/Add.png"
import Bag from "../../assets/Bag.png"
import  Location from "../../assets/Location.png";

interface JobCardProps {
  logo: JSX.Element;
  title: string;
  company: string;
  salary: string;
  location: string;
  jobType: string;
  experience: string;
  postedTime: string;
  onRefer: () => void;
  onApply: () => void;
}

const JobCard: React.FC<JobCardProps> = ({
  logo,
  title,
  company,
  salary,
  location,
  jobType,
  experience,
  postedTime,
  onRefer,
  onApply,
}) => {
  const handleBookmarkPress = () => {
    console.log('Bookmark button pressed');
  };
 

  return (

    <View style={tw`bg-[#E7FAFE] p-4 rounded-lg shadow-md my-2 mx-4`}>
      <View style={tw`flex-row items-center mb-2 `}>
                 
                  <Image
                  source={Shell}
                  style={tw `w-15 h-15 mr-3 -mt-5 `}
                  />
                      <View   style={tw `flex-col ml-2`} >
                          <Text style={tw`text-lg text-[#383e4d] font-bold`}>{title}</Text>
                          <Text style={tw`text-[#6b8975] my-1 font-medium mb-1`}>{company}</Text>
                          <Text style={tw`text-[#525a68] my-1 font-semibold mb-1`}>{salary}</Text>
                      </View>
                      <View  style={tw ` ml-24 -mt-13`}>
                            <TouchableOpacity onPress={handleBookmarkPress} style={tw` `}>
                            <Image source={Bookmark} style={tw`w-6 h-4   `} />
                            </TouchableOpacity>
                      </View>        
      </View>
     
              <View style={tw`flex-row  mb-8   -ml-2`}>
                <Text style={tw`text-[#67727e] mx-2 w-24 h-7 px-1 py-1  justify-center bg-[#d5eaef]`}><Image source={Location} style={tw`w-[15px] h-[15px]`}></Image> {location}</Text>
                <Text style={tw`text-[#67727e] mx-2 w-21 h-7  px-1 py-1  justify-center bg-[#d5eaef]`}><Image source={Bag} style={tw`w-[15px] h-[15px]`}></Image>{jobType}</Text>
                <Text style={tw`text-[#67727e] mx-2 w-19 h-7  px-2 py-1  justify-center bg-[#d5eaef]`}>{experience}</Text>
              </View>
      <View style={tw`flex-row justify-between`}>
      <Text style={tw`text-gray-400 mb-2 ml-4`}>{postedTime}</Text>
      <View style={tw`flex-row  mx-2 `}>
        <TouchableOpacity onPress={onRefer} style={tw`bg-[#107390] w-20 h-7 px-4 py-1 mx-2 rounded`}>
          <Text style={tw`text-white`}>Refer</Text>
          <Image
                  source={Add}
                  style={tw `w-[13px] h-[13px] mr-4 -mt-4 ml-10 `}
                  />
        </TouchableOpacity>
        <TouchableOpacity onPress={onApply} style={tw`bg-[#107390]  w-20 h-7 px-4 py-1 mx-2 rounded`}>
          <Text style={tw`text-white ml-2`}>Apply</Text>
        </TouchableOpacity></View>
      </View>
      
    </View>
  );
};

export default JobCard;
