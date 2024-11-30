import { StyleSheet, Text, View } from 'react-native'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import FormFinanzas from '../../../views/finanzas/components/FormFinanzas';
export default function Finanzas() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1}}>
        <FormFinanzas/>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({})