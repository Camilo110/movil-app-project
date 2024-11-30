import { StyleSheet, Text, View } from 'react-native'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import ReproduccionMain from '../../../views/reproduccion/Reproduccion'

export default function reproduccion() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1}}>
        <ReproduccionMain/>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({})