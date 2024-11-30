import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { CardDashboard } from './components/Cards'
import LineGraphic from './components/Line'
import PieGraphic from './components/Pie'

export default function Dashboard() {
  return (
    <ScrollView>
      <View>
        <CardDashboard title="Animales" info="100" />
        <LineGraphic />
        <LineGraphic />
        <PieGraphic />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})