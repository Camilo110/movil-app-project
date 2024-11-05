
import { ResList as ResListComponent } from '../../views/resList/ResList'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

export default function ResList() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1}}>
        <ResListComponent />      
      </SafeAreaView>
    </SafeAreaProvider>
  )
}