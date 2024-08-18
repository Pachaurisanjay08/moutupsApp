import React, { useState } from 'react';
import { ScrollView, Image, View, Text } from 'react-native';
import tw from 'twrnc';
import SearchBar from '../HomePage/SearchBar'; // Assuming you have a SearchBar component
import Sjobcard from './Sjobcard';

import S1 from '../../assets/Shell.png';
import fioLogo from '../../assets/Fioimg.png';

const Sjob = () => {
  const [searchText, setSearchText] = useState('');

  const jobDetails = [
    {
      logo: <Image source={S1} alt="Company Logo" />,
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
      logo: <Image source={S1} alt="Company Logo" />,
      title: 'HR',
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
      logo: <Image source={S1} alt="Company Logo" />,
      title: 'ASE',
      company: 'Shell',
      salary: '2.5 - 3.5 LPA',
      location: 'Chennai',
      jobType: 'Full time',
      experience: '0-1 years',
      postedTime: 'Just now',
      onRefer: () => console.log('Refer 1'),
      onApply: () => console.log('Apply 1'),
    },
    
    
  ];

  const filteredJobs = jobDetails.filter(job =>
    job.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={tw`h-86%`}>
      <SearchBar setSearchText={setSearchText} />
      <Text style= {tw`text-[16px] text-[#9897a7] text-center  font-semibold ml-5 mb-1 mt-2` }>Job applied(53)</Text>
      <ScrollView contentContainerStyle={tw`flex-grow`}>
        <View style={tw`p-1`}>
          {filteredJobs.map((job, index) => (
            <Sjobcard
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
};

export default Sjob;
