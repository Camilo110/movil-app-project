import { StyleSheet, Text, View, Modal, Pressable, ScrollView, TextInput } from 'react-native'
import { useState } from 'react'
import { InputSelect, InputDate, InputText, InputSelectList, InputNumber } from '../../../components/Inputs'

export default function FormServicios() {
  const [modalVisible, setModalVisible] = useState(false)
  const [data, setData] = useState({
    Tipo: '',
    Fecha: '',
    Veterinario: '',
    ResID: '',
    Observaciones: ''
  })

  const onSetData = (value, key) => {
    setData({
      ...data,
      [key]: value
    })
  }
  return (
    <View style={{flex:1, width: '100%',
      height: '100%', alignItems: 'center', justifyContent:'center'}}>


        <View 
          style={styles.centeredView}

          >
          <View style={styles.modalView}>
            <ScrollView style={{width:'100%'}}>

              <InputSelect
                label='Tipo'
                value={data.Tipo}
                data={[{ label: 'Vacuna', value: 'Vacuna' }, { label: 'Desparasitación', value: 'Desparasitación' }, { label: 'Cirugía', value: 'Cirugía' }, { label: 'Consulta', value: 'Consulta' }]}
                onChange={(value) => onSetData(value, 'Tipo')}
              />
              <InputDate
                label='Fecha'
                value={data.Fecha}
                onChange={(value) => onSetData(value, 'Fecha')}
              />
              <InputText
                label='Veterinario'
                value={data.Veterinario}
                onChange={(value) => onSetData(value, 'Veterinario')}
              />
              <InputSelect
                label='Nombre de Res'
                value={data.ResID}
                data={[{ label: 'Res1', value: 'Res1' }, { label: 'Res2', value: 'Res2' }, { label: 'Res3', value: 'Res3' }, { label: 'Res4', value: 'Res4' }]}
                onChange={(value) => onSetData(value, 'ResID')}
              />
              <InputText
                label='Observaciones'
                value={data.Observaciones}
                onChange={(value) => onSetData(value, 'Observaciones')}
              />

              <View 
                style={
                  {
                    flex: 1,
                    width: '100%',
                  }
                }>

                <Text>
                  Agregar Insumos
                </Text>

                <View>
                  <View>
                  <InputSelect
                    data={[{ label: 'Vacuna', value: 'Vacuna' }, { label: 'Desparasitación', value: 'Desparasitación' }, { label: 'Cirugía', value: 'Cirugía' }, { label: 'Consulta', value: 'Consulta' }]}
                    value={''}
                    label='Seleccionar Insumos'
                    onChange={()=>'Insumo'}
                    style={{width: '80%'}}
                  />
                  <InputNumber
                    label='Cantidad'
                    value={0}
                    onChange={() => 0}
                  />
                  </View>

                  <Pressable style={styles.button}>
                    <Text>
                      Añadir
                    </Text>
                  </Pressable>
                </View>

                 
                 <View>
                    <Text>
                    Seleccionados
                  </Text>
                  <Text>
                  Nombre Insumo  Cantidad Delete
                  </Text>
                  <Text>
                  Nombre Insumo  Cantidad Delete
                  </Text>
                  <Text>
                  Nombre Insumo  Cantidad Delete
                  </Text>
                  <Text>
                  Nombre Insumo  Cantidad Delete
                  </Text>
                  <Text>
                  Nombre Insumo  Cantidad Delete
                  </Text>
                  <Text>
                  Nombre Insumo  Cantidad Delete
                  </Text>
                  <Text>
                  Nombre 666Insumo  Cantidad Delete
                  </Text>
                
                 </View>
              </View>

            </ScrollView>
              <Pressable
                style={[styles.button]}
                onPress={() => setModalVisible(false)}
              >
                <Text
                  style={[styles.text]}
                >
                  Guardar Servicio
                </Text>
              </Pressable>
          </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '95%',
    height: '95%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 28,
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