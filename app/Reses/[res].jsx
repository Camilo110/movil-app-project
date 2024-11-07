import ResIndividual from '../../views/resIndividual/resIndividual'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router'

export default function Res() {
  const { res } = useLocalSearchParams()
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1}}>
        <ResIndividual id = {res} />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}