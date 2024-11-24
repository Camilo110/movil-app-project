import PropTypes from "prop-types";
import { getResById } from "../services/res";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const colorByTipo = {
  Leche: '#EBD24B',
  Carne: '#DE3C34',
  'Doble Proposito': '#307CEB'
};

export const NumeroRes = ({ id, numero, tipo }) => {
  const [tipoRes, setTipoRes] = useState(tipo);
  const [numeroRes, setNumeroRes] = useState(numero);

  useEffect(() => {
    if (!tipo || !numero) {
      getTipo();
    }
  }, []);

  const getTipo = async () => {
    const { Tipo, Numero } = await getResById(id);
    setNumeroRes(Numero);
    setTipoRes(Tipo);
  };

  return (
    <View style={[styles.resNumero, { backgroundColor: colorByTipo[tipoRes] }]}>
      <Text style={styles.text}>{numeroRes}</Text>
    </View>
  );
};

NumeroRes.propTypes = {
  id: PropTypes.string.isRequired,
  tipo: PropTypes.string,
  numero: PropTypes.number,
};

const styles = StyleSheet.create({
  resNumero: {
    paddingVertical: 3,
    paddingHorizontal: 5,
    margin: 2,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
