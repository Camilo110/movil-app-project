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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
})
