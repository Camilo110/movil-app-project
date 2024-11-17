import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native';

export default function ItemRegistro({ body: { ID, Numero, ResID, listInsumos, Tipo, ...body }, onDelete, onEdit }) {
  return (
    <Pressable style={styles.tarjetaRegistro}>
      <View style={styles.numero}>
        <Text style={styles.numeroText}>{Tipo}</Text>
        <Text style={styles.numeroText}>N° {Numero}</Text>
      </View>
      <View style={styles.contenido}>
        {Object.keys(body).map((key) => (
          <Text key={key} style={styles.text}>
            {body[key] && <><Text style={{fontWeight: 'bold'}}>{key}:</Text> {body[key]}</>}
          </Text>
        ))}

        {listInsumos && (
          <Text style={styles.text}><Text style={{fontWeight: 'bold'}}>Lista Insumos:</Text> {listInsumos}</Text>
        )}
      </View>
      
    </Pressable>
  )
}

const styles = StyleSheet.create({
  tarjetaRegistro: {
    marginHorizontal: 5,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  numero: {
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  numeroText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
})
