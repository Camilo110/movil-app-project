import { StyleSheet, Text, View } from 'react-native'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import Login from '../views/login/Login';

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1}}>
        <Login/>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({})