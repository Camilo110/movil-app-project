import { StyleSheet, Text, View } from 'react-native'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import ServiciosMain from '../views/servicios/Servicios';
export default function RegistrosServicios() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1}}>
        <ServiciosMain/>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({})