import {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, TextInput, Pressable, View, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { createRes } from '../../../services/res';
import { InputNumber, InputSelect, InputDate } from '../../../components/Inputs';
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
              <Text>
                Crear Res
              </Text>
              <ScrollView style={{width:'100%'}}>
                <InputNumber 
                  label="Número"
                  value={values.Numero}
                  onChange={(number) => onChangeValues(number, "Numero")}
                />
                <View>
                  <Text>
                    Nombre
                  </Text>
                  <TextInput
                    value={values.Nombre}
                    onChangeText={(text)=>onChangeValues(text, "Nombre")}
                  />
                </View>
                <View>
                  <Text>
                    Tipo: {values.Tipo}
                  </Text>
                  <Picker
                    selectedValue={values.Tipo}
                    onValueChange={(Value) =>
                      onChangeValues(Value, 'Tipo')
                    }>
                    <Picker.Item label="Leche" value="Leche" />
                    <Picker.Item label="Carne" value="Carne" />
                    <Picker.Item label="Doble Próposito" value="Doble Proposito" />
                  </Picker>
                </View>

                <InputDate
                  label="Fecha de Nacimiento"
                  value={values.FechaNacimiento}
                  keyValue="FechaNacimiento"
                  onChange={onChangeValues}
                />

                <View>
                  <Text>
                    Estado: jj {values.Estado}
                  </Text>
                  <Picker
                    selectedValue={values.Estado}
                    onValueChange={(itemValue) =>
                      onChangeValues(itemValue, 'Estado')
                    }>
                    <Picker.Item label="Activa" value="Activa" />
                    <Picker.Item label="Vendida" value="Vendida" />
                    <Picker.Item label="Muerte" value="Muerte" />
                  </Picker>
                </View>

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

                <View>
                  <Text>
                    Raza
                  </Text>
                  <TextInput
                    value={values.Raza}
                    onChangeText={(text)=>onChangeValues(text, "Raza")}
                  />
                </View>

                <InputNumber
                  label="Número de Partos" 
                  value={values.NumeroPartos}
                  onChange={(number) => onChangeValues(number, "NumeroPartos")}
                />

                <View>
                  <Text>
                    Registro ICA
                  </Text>
                  <TextInput
                    value={values.RegistroICA}
                    onChangeText={(text)=>onChangeValues(text, "RegistroICA")}
                  />
                </View>

                <View>
                  <Text>
                    Observaciones
                  </Text>
                  <TextInput
                    value={values.Observaciones}
                    onChangeText={(text)=>onChangeValues(text, "Observaciones")}
                  />
                </View>

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
          style={styles.button}
          onPress={onOpenModal}>
          <Text style={styles.textStyle}>Agregar Res</Text>
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
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
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
    margin: 10,
    marginBottom: 0,
    elevation: 2,
    backgroundColor: '#2196F3',
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
});