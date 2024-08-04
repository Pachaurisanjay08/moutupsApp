import React from 'react';
import { ScrollView, Image, TouchableOpacity, View, Text } from 'react-native';
import Jobcard from './Jobcard';
import tw from 'twrnc';

import S1 from '../../assets/Shell.png';
import fioLogo from '../../assets/Fioimg.png';


const Job = () => {
  
  const jobDetails = [
    {
      logo: <img src={S1} alt="Company Logo" />,
      title: 'UI UX Designer',
      company: 'Shell',
      salary: '2.5 - 3.5 LPA',
      location: 'Chennai',
      jobType: 'Full time',
      experience: '0-1 years',
      postedTime: 'Just now',
      onRefer: () => console.log('Refer 1'),
      onApply: () => console.log('Apply 1'),
    },
    {
      logo: <Image source={fioLogo} alt="Company Logo" />,
      title: 'Java Developer',
      company: 'Google',
      salary: '11-18 LPA',
      location: 'Delhi',
      jobType: 'Part time',
      experience: '6-7 years',
      postedTime: '1 day ago',
      onRefer: () => console.log('Refer 2'),
      onApply: () => console.log('Apply 2'),
    },
    {
      logo: <Image source={fioLogo} alt="Company Logo" />,
      title: 'Data Analyst',
      company: 'Wipro',
      salary: '11-18 LPA',
      location: 'Delhi',
      jobType: 'Part time',
      experience: '6-7 years',
      postedTime: '4 day ago',
      onRefer: () => console.log('Refer 2'),
      onApply: () => console.log('Apply 2'),
    },
    {
      logo: <Image source={fioLogo} alt="Company Logo" />,
      title: 'Developer',
      company: 'Amazon',
      salary: '11-18 LPA',
      location: 'Delhi',
      jobType: 'Full time',
      experience: '6-7 years',
      postedTime: '6 day ago',
      onRefer: () => console.log('Refer 2'),
      onApply: () => console.log('Apply 2'),
    },
    // Add other job details here...
  ];

  return (
    <View style={tw`h-61%`}>
      <ScrollView contentContainerStyle={tw`flex-grow`}>
        <View style={tw`p-1`}>
          {jobDetails.map((job, index) => (
            <Jobcard
              key={index}
              logo={job.logo}
              title={job.title}
              company={job.company}
              salary={job.salary}
              location={job.location}
              jobType={job.jobType}
              experience={job.experience}
              postedTime={job.postedTime}
              onRefer={job.onRefer}
              onApply={job.onApply}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default Job;
