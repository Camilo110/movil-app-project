import { StyleSheet, Text, View } from 'react-native'
import InsumosMain from '../../views/Insumos/InsumosMain'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
export default function insumos() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1}}>
      <InsumosMain/>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({})