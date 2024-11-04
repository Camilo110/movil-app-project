import { View, Text } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

export default function Index() {
  return (
    <View>
      <Text>Usuario</Text>
      <Link href={"/manual"}>
      </Link>
    </View>
  )
}