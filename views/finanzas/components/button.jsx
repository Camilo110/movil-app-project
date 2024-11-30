import React, { useState } from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';

const SplitSwitchButton = () => {
  const [selected, setSelected] = useState('Ingreso'); // Estado inicial

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        {/* Opción Ingreso */}
        <Pressable
          style={[
            styles.halfButton,
            selected === 'Ingreso' && styles.selectedButton,
          ]}
          onPress={() => setSelected('Ingreso')}
        >
          <Text
            style={[
              styles.buttonText,
              selected === 'Ingreso' && styles.selectedText,
            ]}
          >
            Ingreso
          </Text>
        </Pressable>

        {/* Opción Egreso */}
        <Pressable
          style={[
            styles.halfButton,
            selected === 'Egreso' && styles.selectedButton,
          ]}
          onPress={() => setSelected('Egreso')}
        >
          <Text
            style={[
              styles.buttonText,
              selected === 'Egreso' && styles.selectedText,
            ]}
          >
            Egreso
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row', // Pone los botones lado a lado
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden', // Asegura bordes redondeados en los hijos
    width: 200, // Ancho total del botón
    height: 50, // Altura del botón
  },
  halfButton: {
    flex: 1, // Toma la mitad del ancho del botón
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6e6e6', // Fondo predeterminado
  },
  selectedButton: {
    backgroundColor: '#4caf50', // Fondo para el botón seleccionado
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
  },
  selectedText: {
    color: '#fff', // Color del texto para el botón seleccionado
    fontWeight: 'bold',
  },
});

export default SplitSwitchButton;
