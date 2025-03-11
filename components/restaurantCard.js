import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import React from 'react';
import * as Icon from "react-native-feather";
import { themeColors } from 'theme';
import { useNavigation } from '@react-navigation/native';
import { urlFor } from 'sanity';

export default function RestaurantCard({ item, fullWidth }) {
    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Restaurant', { ...item })}
        >
            <View 
                style={{
                    shadowColor: themeColors.bgColor(0.2),
                    shadowRadius: 7
                }}
                className="mr-6 bg-white rounded-3xl shadow-lg"
            >
                {/* Fix Image Issue */}
                <Image 
            className={`rounded-t-3xl object-cover ${fullWidth ? "w-full h-48" : "w-64 h-36"}`} 
            source={{ uri: item.imageUrl ? item.imageUrl : "https://via.placeholder.com/150" }} 
        />
                <View className="px-3 pb-4 space-y-2">
                    <Text className="text-lg font-bold pt-2">{item.name}</Text>
                    
                    {/* Fix Reviews Display */}
                    <View className="flex-row items-center space-x-1">
                     {/* Stars Number */}
                    <Text className="text-xs text-green-700">
                    {item.stars ? item.stars : "N/A"}
                     </Text>

                     {/* Star Image */}
                    <Image source={require('../assets/images/fullstar1.png')} className="h-4 w-4" />

                    {/* Reviews and Type */}
                    <Text className="text-xs text-gray-700">
                     ({item.reviews ? item.reviews : "No"} reviews) · 
                    <Text className="font-semibold">
                    {item.type?.name ? item.type.name : "Unknown"}
                     </Text>
                   </Text>
                    </View>


                    {/* Fix Address Display */}
                    <View className="flex-row items-center space-x-1">
                        <Icon.MapPin color="gray" width="15" height="15" />
                        <Text className="text-gray-700 text-xs">
                             · {item.address ? item.address : "No Address Available"}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}
