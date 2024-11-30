import { StyleSheet, Text, View } from 'react-native'
import RegistrosList from '../../../views/produccion/components/registrosList'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

export default function Registros() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1}}> 
        <RegistrosList />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({})