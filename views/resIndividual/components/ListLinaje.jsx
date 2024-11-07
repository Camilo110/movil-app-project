import { StyleSheet, Text, ScrollView, View } from 'react-native'
import ItemLinaje from './ItemLinaje'

export default function ListLinaje({listaLinaje = []}) {
  return (
    <View style={styles.container}>
    <ScrollView horizontal={true}>
      {
        listaLinaje.map((linaje) => (
          <ItemLinaje key={linaje.id} id={linaje.id} nombre={linaje.nombre} familiaridad={linaje.familiaridad} />
        ))
      }
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 220,
    margin: 5,
  },
})