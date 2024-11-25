import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default ItemFinanzas = ({ item: { ID, Fecha, Valor, Producto, Tipo } }) => {
  const handleClick = () => {
    console.log(ID);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleClick}>
      <Image
        source={
          Tipo === 'Ingreso'
            ? require('../../../assets/img/positivo.png')
            : require('../../../assets/img/negativo.png')
        }
        style={styles.icon}
      />
      <Text style={styles.fecha}>{Fecha}</Text>
      <View style={styles.productoValor}>
        <Text style={styles.producto}>{Producto}</Text>
        <Text style={[styles.valor, {color: Tipo==='Ingreso' ? '#4caf50' : 'red',}]}>$ {Valor}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  fecha: {
    fontSize: 14,
    color: '#666',
    marginRight: 10,
  },
  productoValor: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  producto: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  valor: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});
