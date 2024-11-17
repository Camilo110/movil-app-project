import { View } from 'react-native'
import { Tabs } from 'expo-router'

export default function _layout() {
  return (
    <View 
      style={{flex : 1}}
      >
      <Tabs
        screenOptions={{
          headerShown: false
        }}/>
    </View>
  )
}