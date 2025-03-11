import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import * as Icon from "react-native-feather";
import { themeColors } from 'theme';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, selectCartItemsById } from 'slices/cartSlice';

export default function DishRow({ item }) {
  const dispatch = useDispatch();
  const totalItems = useSelector(state => selectCartItemsById(state, item._id) || []);

  const handleIncrease = () => {
    dispatch(addToCart({ ...item }));
  };

  const handleDecrease = () => {
    dispatch(removeFromCart({ _id: item._id }));
  };

  return (
    <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
      {/* Fix Image Rendering */}
      <Image 
        className="rounded-3xl" 
        style={{ height: 100, width: 100 }}
        source={{ uri: item.imageUrl || "https://via.placeholder.com/100" }}
      />
      <View className="flex flex-1 space-y-3">
        <View className="pl-3">
          <Text className="text-xl">{item.name}</Text>
          <Text className="text-gray-700">{item.description || "No description available"}</Text>
        </View>
        <View className="flex-row justify-between pl-3 items-center">
          <Text className="text-gray-700 text-lg font-bold">${item.price.toFixed(2)}</Text>
          <View className="flex-row items-center">
            <TouchableOpacity
              onPress={handleDecrease}
              disabled={totalItems.length === 0}
              className="p-1 rounded-full"
              style={{ backgroundColor: totalItems.length > 0 ? themeColors.bgColor(1) : "gray" }}
            >
              <Icon.Minus strokeWidth={2} height={20} width={20} stroke={'white'} />
            </TouchableOpacity>
            <Text className="px-3">{totalItems.length}</Text>
            <TouchableOpacity
              onPress={handleIncrease}
              className="p-1 rounded-full"
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Icon.Plus strokeWidth={2} height={20} width={20} stroke={'white'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
