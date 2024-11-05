import { View, Text, Pressable, StyleSheet} from 'react-native'
import ResIndividual from '../../views/resIndividual/resIndividual'
import { useLocalSearchParams } from 'expo-router'

export default function Res() {
  const { res } = useLocalSearchParams()
  return (
    <View style={StyleSheet.container}>
      <Text>{res}</Text>
      <ResIndividual/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})