import React, { useEffect, useState } from "react";
import { RefreshControl, View, Text, TextInput, ScrollView, StyleSheet, Pressable } from "react-native";
import { ResItem } from "./components/ResItem";
import { createRes, getRes } from "../../services/res";
import { getResModal } from "../../services/forms";
import { ModalCreateRes } from "./components/ModalCreateRes";

export function ResList() {
  const [inputValue, setInputValue] = useState('');
  const [response, setResponse] = useState([]);
  const [listRes, setListRes] = useState([]);
  const [createModal, setCreateModal] = useState(false);
  const [fields, setFields] = useState([]);
  const [limit, setLimit] = useState({ inf: 0, sup: 15 });

  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    fetchRes();
  }, []);

  const onChangeLimit = (op) => {
    const numRows = 15;
    const addInf = (limit.inf + numRows >= response.length) ? limit.inf : limit.inf + numRows;
    const addSup = Math.max(Math.min((limit.sup + numRows), response.length), numRows);

    const minusInf = Math.max((limit.inf - numRows), 0);
    const minusSup = minusInf + numRows;

    if (op === '+') {
      setLimit({ inf: addInf, sup: addSup });
    } else {
      setLimit({ inf: minusInf, sup: minusSup });
    }
  };

  const fetchRes = async () => {
    const res = await getRes();
    setResponse(res);
    setListRes(res);
  };

  const fetchDataForm = async () => {
    const { fincas, madres, padres } = await getResModal();
    setFields({
      ...fields,
      FincaID: { label: 'Finca', type: 'select', value: fincas },
      Madre: { label: 'Madre', type: 'select', value: madres },
      Padre: { label: 'Padre', type: 'select', value: padres }
    });
  };

  const HandleAdd = async () => {
    //await fetchDataForm();
    setCreateModal(true);
  };

  function filter(query) {
    return response.filter((res) =>
      res.Numero.toString().includes(query) || res.Nombre.toLowerCase().includes(query.toLowerCase())
    );
  }

  const handleInputChange = (value) => {
    setInputValue(value);
    value ? setListRes(filter(value)) : setListRes(response);
  };

  const ModalSubmitCreate = async (values) => {
    const resp = await createRes(values);
    setCreateModal(false);
    fetchRes();
    setLimit({ inf: 0, sup: 15 });
  };



  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchRes().then(() => {
      setRefreshing(false)
      setInputValue('');
    });
  }, []);


  return (
    <>
      <View style={styles.topSection}>
        <ModalCreateRes/>
        <TextInput
          style={styles.searchInput}
          placeholder="Ingrese el Id o el Nombre"
          value={inputValue}
          onChangeText={handleInputChange}
        />
      </View>

      <ScrollView
      contentContainerStyle={styles.scrollView}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
        { listRes.length === 0
          ? 
          <Pressable onRefresh={onRefresh}>
            <Text>Recargar</Text>
          </Pressable>
          :
          listRes.slice(limit.inf , limit.sup).map((res) => (
          <ResItem key={res.ID} res={res} />
        ))}

        <View style={styles.pagination}>
          <Pressable onPress={() => onChangeLimit('-')}>
            <Text style={styles.pageText}>{'Anterior << '}</Text>
          </Pressable>
          <Text style={styles.pageText}>
            {`Página: ${Math.ceil(limit.sup / 15)} de ${Math.ceil(response.length / 15)}`}
          </Text>
          <Pressable onPress={() => onChangeLimit('+')}>
            <Text style={styles.pageText}>{' >> Siguiente'}</Text>
          </Pressable>
        </View>
        
      </ScrollView>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  topSection: {
    marginBottom: 20,
  },
  searchLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  pageText: {
    fontSize: 16,
  },
  scrollView: {
    flexGrow: 1,
    padding: 10,
    paddingBottom: 100,
  },
});

