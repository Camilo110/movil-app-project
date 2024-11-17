import { StyleSheet, Text, View } from 'react-native'
import FormRegister from '../../views/produccion/components/formRegister'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

export default function Form() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}> 
        <FormRegister />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})