import { View, Text, FlatList, SafeAreaView,  TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getFeaturedRestaurantById } from '../api';
import RestaurantCard from '../components/restaurantCard';
import { themeColors } from 'theme';
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native'

export default function SeeAllScreen({ route }) {
  const { id, title } = route.params;
  const [restaurants, setRestaurants] = useState([]);
  const navigation = useNavigation();
  
  useEffect(() => {
    if (!id) return;
  
    getFeaturedRestaurantById(id)
      .then((data) => data?.restaurants && setRestaurants(data.restaurants))
      .catch(console.error);
  }, [id]);
  
  return (
    <SafeAreaView>
      <TouchableOpacity
                     onPress={()=> navigation.goBack()}
                     className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow">
                      <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)}/>
      
                </TouchableOpacity>
    <View className="p-4" >
      <Text className="text-3xl font-bold text-center mb-4">{title}</Text>
      <FlatList
        data={restaurants}
        keyExtractor={(item) => item._id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => 
        <View className='item-center my-4'>
        <RestaurantCard item={item} fullWidth/>
        </View>
        }
      />
    </View>
    </SafeAreaView>
    
  );
}
