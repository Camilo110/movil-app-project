import {StyleSheet, View } from 'react-native'
import { Stack } from 'expo-router'

export default function _layout() {
  return (
    <View style={styles.container}>
      <Stack
      screenOptions={{
        headerShown: false
      }}>
      </Stack>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
  },
})