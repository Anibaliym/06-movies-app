import { View, Text } from 'react-native'
import React from 'react'

import "../global.css"

const RootLayout = () => {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Text className="text-white text-2xl font-bold">Hola desde NativeWind 🚀</Text>
    </View>
  )
}

export default RootLayout