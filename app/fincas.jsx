import { StyleSheet, Text, View } from 'react-native'
import FincasMain from '../views/fincas/fincasMain'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
export default function Fincas() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1}}>
      <FincasMain/>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({})