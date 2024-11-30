import { View } from 'react-native'
import { Stack } from 'expo-router'

export default function _layout() {
  return (
    <View style={{flex:1}}>
      <Stack
      screenOptions={{
        headerShown: false
      }}>
      </Stack>
    </View>
  )
}
