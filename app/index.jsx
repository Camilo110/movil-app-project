import { StyleSheet, View, Text } from "react-native"
import { ModalCreateRes } from "../views/resList/components/ModalCreateRes"
import ListRegistros from "../views/resIndividual/components/ListRegistros"
export default function Index(){
  return (
    <View style={styles.container}>
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
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
})
