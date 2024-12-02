import { StyleSheet, View, Text, Pressable } from "react-native"
import Dashboard from "../../views/Dashboard/Dashboard"

export default function Index(){
  return (
    <View style={styles.container}>
      <Dashboard />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
  },
})
