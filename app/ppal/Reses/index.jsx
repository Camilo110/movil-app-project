
import { ResList as ResListComponent } from '../../../views/resList/ResList'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';

export default function ResList() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ResListComponent/>      
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f9',
    width: '100%',
  },
})