import "nativewind";
import { SafeAreaView, TextInput, View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import Categories from '../components/categories';
import FeaturedRow from '../components/featuredRow'; 
import { getFeaturedRestaurants } from '../api'; 

const HomeScreen = () => {
  const [featuredRestaurants, setFeaturedRestaurants] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  

  useEffect(() => {
    getFeaturedRestaurants()
      .then(data => {
        console.log("Fetched Restaurants:", data);
        setFeaturedRestaurants(data); 
      });
  }, []);

  const filteredRestaurants = featuredRestaurants.filter(item =>
    // Search in category names
    item?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    // Search in actual restaurant names inside each category
    item?.restaurants?.some(restaurant => 
      restaurant?.name?.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );
  

  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content" />
      
      {/* Search Bar */}
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput
                placeholder="Restaurant"
                className="ml-2 flex-1"
                value={searchQuery}
                onChangeText={text => {
                // console.log("Search Query:", text);
                setSearchQuery(text);
               }}
                 />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <Icon.MapPin height="20" width="20" stroke="gray" />
            <Text className="text-gray-600">New York, NY</Text>
          </View>
        </View>
        <View style={{ backgroundColor: themeColors.bgColor(1) }} className="p-3 rounded-full">
          <Icon.Sliders height="20" width="20" strokeWidth={2.5} stroke="white" />
        </View>
      </View>

      {/* Main Content */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
        {/* Categories */}
        <Categories />

        {/* Featured Restaurants */}
        <View className="mt-5">
        {filteredRestaurants.length > 0 ? (
  filteredRestaurants.map((item, index) => (
    
    <FeaturedRow
      key={index}
      title={item.name}
      id={item._id}
      restaurants={item.restaurants} 
      description={item.description}
    />
  ))
) : (
  <Text className="text-center text-gray-600 mt-5">No restaurants found.</Text>
)}

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
