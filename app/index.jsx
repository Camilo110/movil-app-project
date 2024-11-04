import { StyleSheet, View, Text } from "react-native"
import { Link } from "expo-router"
export default function Index(){
  return (
    <View style={styles.container}>
      <Link href={"/prueba"}>
        ir a prueba
      </Link>

      <Text style={styles.title}> Dashboard </Text>
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
})
