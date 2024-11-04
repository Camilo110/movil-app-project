import { View, Text } from 'react-native'
import { Link } from 'expo-router'
import { ResList as ResListComponent } from '../../views/resList/ResList'

export default function ResList() {
  return (
    <View>
      <ResListComponent />      
    </View>
  )
}