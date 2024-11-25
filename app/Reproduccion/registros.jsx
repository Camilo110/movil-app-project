import { StyleSheet, Text, View } from 'react-native'
import RegistrosReproduccion from '../../views/reproduccion/registrosReproduccion'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

export default function Registros() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1}}>
        <RegistrosReproduccion/>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({})