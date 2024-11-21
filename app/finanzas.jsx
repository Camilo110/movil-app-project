import { StyleSheet, Text, View } from 'react-native'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import ListRegistros from '../views/servicios/components/ListRegistros';
export default function RegistrosFinanzas() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1}}>
        <ListRegistros/>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({})