import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default ResumenFinanzas = ({ resumen }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumen</Text>
      <View style={styles.balanceContent}>
        {/* Ingresos */}
        <View style={[styles.card, styles.ingresos]}>
        
          <Image source={require('../../../assets/img/ingresos.png')} style={styles.icon} />
          <View style={styles.valor}>
            <Text style={styles.label}>Ingresos</Text>
            <Text style={[styles.value, styles.ingresosValue]}>$ {resumen.Ingreso}</Text>
          </View>
        </View>

        {/* Egresos */}
        <View style={[styles.card, styles.egresos]}>
          <Image source={require('../../../assets/img/egresos.png')} style={styles.icon} />
          <View style={styles.valor}>
            <Text style={styles.label}>Egresos</Text>
            <Text style={[styles.value, styles.egresosValue]}>$ {resumen.Egreso}</Text>
          </View>
        </View>

        {/* Balance */}
        <View style={[styles.card, styles.balance]}>
          <Image source={require('../../../assets/img/balance.png')} style={styles.icon} />
          <View style={styles.valor}>
            <Text style={styles.label}>Balance</Text>
            <Text style={[styles.value, styles.balanceValue]}>$ {resumen.Total}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f0f8f5',
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  balanceContent: {
    gap: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
  },
  ingresos: {
    borderColor: 'green',
  },
  egresos: {
    borderColor: 'red',
  },
  balance: {
    borderColor: 'green',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  valor: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
  },
  value: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  ingresosValue: {
    color: 'green',
  },
  egresosValue: {
    color: 'red',
  },
  balanceValue: {
    color: 'green',
  },
});
