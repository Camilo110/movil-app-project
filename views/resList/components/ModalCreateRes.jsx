import {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, TextInput, Pressable, View, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { createRes } from '../../../services/res';
import { InputNumber, InputSelect, InputDate, InputText } from '../../../components/Inputs';
import { getResModal } from '../../../services/forms';

const constValues = {
  Numero: 0,
  Nombre: "",
  Tipo: "Leche",
  FechaNacimiento: new Date().toISOString().split('T')[0],
  Estado: "Activa",
  Madre: "",
  Padre: "",
  PesoActual: 0,
  PesoNacimiento: 0,
  Sexo: "Hembra",
  Raza: "",
  NumeroPartos: 0,
  RegistroICA: "",
  Observaciones: "",
  FincaID: ""
}
export function ModalCreateRes() {
  const [modalVisible, setModalVisible] = useState(false);
  const [values, setValues] = useState(constValues);
  const [formData, setFormData] = useState({fincas: [], madres: [], padres: []});

  const onOpenModal = async() => {
    const data = await getResModal();
    if (data) setFormData(data);
    setModalVisible(true);
  }

  const onChangeValues = (text, key) => {
    setValues({...values, [key]: text});
  }

  const submit = async () => {
    await createRes(values);
    //setValues(constValues);
    //setModalVisible(!modalVisible);
  }

  const onCancel = () => {
    setValues(constValues);
    setModalVisible(!modalVisible)
  }
  return (
    <>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>

          
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.title}>
                Crear Res
              </Text>
              <ScrollView style={{width:'100%'}}>
                <InputNumber 
                  label="Número"
                  value={values.Numero}
                  onChange={(number) => onChangeValues(number, "Numero")}
                />
                <InputText
                  label = 'Nombre'
                  value={values.Nombre}
                  onChangeText={(text)=>onChangeValues(text, "Nombre")}
                />
                <InputSelect
                  data={[{value: 'Leche', label: 'Leche'}, {value: 'Carne', label: 'Carne'}, {value: 'Doble Proposito', label: 'Doble Propósito'}]}
                  value={values.Tipo}
                  label="Tipo"
                  onChange={(text) => onChangeValues(text, "Tipo")}
                />

                <InputDate
                  label="Fecha de Nacimiento"
                  value={values.FechaNacimiento}
                  keyValue="FechaNacimiento"
                  onChange={onChangeValues}
                />

               <InputSelect
                  data={[{value: 'Activa', label: 'Activa'}, {value: 'Vendida', label: 'Vendida'}, {value: 'Muerte', label: 'Muerte'}]}
                  value={values.Estado}
                  label="Estado"
                  onChange={(text) => onChangeValues(text, "Estado")}
                />
                <InputSelect
                  data={formData.madres}
                  value={values.Madre}
                  label="Madre"
                  onChange={(text) => onChangeValues(text, "Madre")}
                />

                <InputSelect
                  data={formData.padres}
                  value={values.Padre}
                  label="Padre"
                  onChange={(text) => onChangeValues(text, "Padre")}
                />


                <InputNumber 
                  label="Peso Actual"
                  value={values.PesoActual}
                  onChange={(number) => onChangeValues(number, "PesoActual")}
                />

                <InputNumber 
                  label="Peso de Nacimiento"
                  value={values.PesoNacimiento}
                  onChange={(number) => onChangeValues(number, "PesoNacimiento")}
                />

                <InputSelect
                  data={[{value: 'M', label: 'Macho'}, {value: 'F', label: 'Hembra'}]}
                  value={values.Sexo}
                  label="Sexo"
                  onChange={(text) => onChangeValues(text, "Sexo")}
                />

                <InputText
                  label = 'Raza'
                  value={values.Raza}
                  onChangeText={(text)=>onChangeValues(text, "Raza")}
                />

                <InputNumber
                  label="Número de Partos" 
                  value={values.NumeroPartos}
                  onChange={(number) => onChangeValues(number, "NumeroPartos")}
                />

                <InputText
                  label = 'Registro ICA'
                  value={values.RegistroICA}
                  onChangeText={(text)=>onChangeValues(text, "RegistroICA")}
                />

                <InputText
                  label = 'Observaciones'
                  value={values.Observaciones}
                  onChangeText={(text)=>onChangeValues(text, "Observaciones")}
                />

                <InputSelect
                  data={formData.fincas}
                  value={values.FincaID}
                  label="Finca"
                  onChange={(text) => onChangeValues(text, "FincaID")}
                />
              </ScrollView>
              <View style={{flexDirection: 'row'}}>
                <Pressable
                  style={[styles.button, styles.buttonCancel]}
                  onPress={onCancel}>
                  <Text style={styles.textStyle}>Cancelar</Text>
                </Pressable>
                <Pressable
                  style={[styles.button]}
                  onPress={submit}>
                  <Text style={styles.textStyle}>Guardar</Text>
                </Pressable>
              </View>

            </View>
          </View>
        </Modal>
        
        <Pressable
          style={styles.floatingButton}
          onPress={onOpenModal}>
          <Text style={styles.buttonText}>Agregar Res</Text>
        </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '90%',
    height: '90%',
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    margin: 5,
    elevation: 2,
    backgroundColor: '#2196F3',
  },
  floatingButton: {
    position: 'absolute', // Hace que el botón se superponga
    bottom: 10, // Separación desde la parte inferior
    left: 20, // Separación desde la izquierda (puedes usar `right` para alinearlo a la derecha)
    right: 20, // Ancho total (si quieres centrarlo horizontalmente, usa ambos `left` y `right`)
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    borderRadius: 30,
    alignItems: 'center',
    zIndex: 10, // Asegura que el botón esté encima
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonCancel: {
    backgroundColor: '#D3D3D3',
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
});