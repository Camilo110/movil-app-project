import { StyleSheet, Text, View } from 'react-native'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import RegistrosFinanzas from '../../views/finanzas/components/RegistrosFinanzas'

export default function RegistrosFinanzasRoute() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1}}>
        <RegistrosFinanzas/>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({})