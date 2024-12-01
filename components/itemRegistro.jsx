import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Pressable } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function ItemRegistro({ data, keyTitle1, keyTitle2, restKeys, labels, onDelete, onEdit }) {
  return (
    <Pressable 
      onPress={() =>onEdit && onEdit(data)} 
      style={styles.tarjetaRegistro}>

      <View style={styles.content}>
        <View>
          <View style={styles.titles}>
            <Text style={styles.title}>{data[keyTitle1]}</Text>
            <Text style={styles.title}>{keyTitle1 && data[keyTitle2]}</Text>
          </View>

          <View style={styles.contenido}>
            {restKeys.map((key, index) => (
              <Text key={data.ID + key} style={styles.text}>
                {data[key] && (
                  <>
                    <Text style={{ fontWeight: 'bold' }}>{labels[index]}:</Text> {data[key]}
                  </>
                )}
              </Text>
            ))}
          </View>
        </View>

        {
          onDelete &&
          <Pressable 
            style={[styles.deleteButton, { backgroundColor: '#ff4d4d' }]} 
            onPress={() => onDelete(data.ID)}>
            <MaterialCommunityIcons name="delete-forever" size={24} color="white" />
          </Pressable>
        }
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tarjetaRegistro: {
    marginHorizontal: 5,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginVertical: 3,
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingRight: 30,
  },
  titles: {
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contenido: {
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  deleteButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    paddingVertical: 2,
    paddingHorizontal: 1,
    borderRadius: 3,
  },
});
