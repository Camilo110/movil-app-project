import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Importa un set de íconos

export const CardDashboard = ({ title, info, icon= 'camera' }) => {
  return (
    <View style={styles.card}>
      <View style={styles.containerTitle}>
        <Icon name={icon} size={20} color="#6994c5" />
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.info}>{info}</Text>
    </View>
  );
};

CardDashboard.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  iconName: PropTypes.string, // Nombre del ícono opcional
};

CardDashboard.defaultProps = {
  iconName: 'information-outline', // Ícono predeterminado
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    margin: 10,
    borderColor: '#6994c5',
    borderWidth: 2,
  },
  icon: {
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  info: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  containerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
