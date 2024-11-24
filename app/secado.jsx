import { StyleSheet, Text, View } from 'react-native'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import SecadoMain from '../views/secado/SecadoMain';

export default function RegistrosServicios() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1}}>
        <SecadoMain/>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({})