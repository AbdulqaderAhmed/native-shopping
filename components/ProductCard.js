import { useColorScheme } from 'nativewind'
import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import {AntDesign} from '@expo/vector-icons'

export default function ProductCard({item}) {
    const [count, setCount] = useState(1)
    const {colorScheme, toggleColorScheme} = useColorScheme()
  return (
    <View className="w-full bg-white dark:bg-gray-700 rounded-3xl p-5 mt-5">
        <View className="bg-white rounded-lg">
        <Image source={{uri: item.image}}
        className="w-full h-72"
       style={{resizeMode: "contain"}} />
        </View>

        <View className="mt-5">
        <Text className="text-sm text-black/60 dark:text-white/70 font-bold">{item.title}</Text>

        <View className="flex-row justify-between mx-2 my-3">
            <View className="flex-row items-center gap-3">
                <AntDesign
                    name="minuscircleo"
                    size={24}
                    color={colorScheme === 'light' ? 'black' : 'white'}
                    onPress={() => setCount(count-1)}
                />
                <Text className="text-xl dark:text-white">{count}</Text>
                <AntDesign
                    name="pluscircleo"
                    size={24}
                    color={colorScheme === 'light' ? 'black' : 'white'}
                    onPress={() => setCount(count+1)}
                />
            </View>
            <Text className="text-2xl font-extrabold dark:text-white">{item.price * count} ETB</Text>

        </View>
        <Text numberOfLines={2} className="text-sm text-black/60 dark:text-white/70">{item.description}</Text>
        <TouchableOpacity className="flex-row bg-black dark:bg-white justify-center w-10/12 self-center mt-5 p-3 rounded-full">
            <Text className="text-white dark:text-black font-blod">Add To Chart</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}
