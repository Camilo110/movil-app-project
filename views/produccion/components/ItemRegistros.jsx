import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

export default function ItemRegistros({body: {Fecha, Tipo, Cantidad, ResNombre}}) {
  return (
    <Pressable >
      <View style={styles.container}>
        
      <Image
        source={require('../../../assets/favicon.png')}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{Cantidad}</Text>
        <Text style={styles.text}>{Fecha}</Text>
        <Text style={styles.text}>{ResNombre}</Text>
      </View>
        </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F6F3',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    color: '#000', // Texto negro
  },
})