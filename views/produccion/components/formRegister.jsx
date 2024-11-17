import { Pressable, StyleSheet, Text, View } from 'react-native'
import { InputSelect, InputText, InputDate, InputNumber, InputSelectList } from '../../../components/Inputs'
import { getProduccionModal } from '../../../services/forms'
import { useEffect, useState } from 'react';
import { CreateProduccionIndividual} from '../../../services/produccion'


export default function FormRegister() {
  const [idsSelected, setIdsSelected] = useState([])
  const [dataForm, setDataForm] = useState({ Fecha: '', Cantidad: 0, Tipo: 'Leche' })
  const [listReses, setListReses] = useState([])

  const [isloading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchDataModal()
  }, [])

  const fetchDataModal = async () => {
    const response = await getProduccionModal()
    setListReses(response)
    setIsLoading(false)
  }

  const onSetDataForm = (value, key) => {
    setDataForm({ ...dataForm, [key]: value })
  }

  const onSubmit = async () => {
    const response = await CreateProduccionIndividual({...dataForm, ResID: idsSelected})
    console.log(response)
  }
    


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar Produccion</Text>

      <InputSelectList
        data={listReses}
        label="Seleccionar Res"
        value={idsSelected}
        onChange={setIdsSelected}
      />
    
      
      <InputDate 
        label="Fecha" 
        value={dataForm.Fecha} 
        onChange={(value)=> onSetDataForm(value, 'Fecha')}
      />

      <InputNumber 
        label="Cantidad" 
        value={dataForm.Cantidad} 
        onChange={(value) => onSetDataForm(value, 'Cantidad')}
      />

      <InputSelect 
        data={[{label:'Leche', value:'Leche'},{label:'Carne', value:'Carne'}]}
        label="Tipo"
        value={dataForm.Tipo}
        onChange={(value)=>onSetDataForm(value, 'Tipo')}
      />
      
      <Pressable onPress={onSubmit} style={styles.button}>
        <Text style={styles.textStyle}>Registrar</Text>
      </Pressable>

      
      
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
    width: '95%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 20
  },
  button: {
    borderRadius: 20,
    padding: 13,
    elevation: 2,
    marginBottom: 20,
    backgroundColor: "#2196F3",

  },
  textStyle: {
    color: "white",
    fontWeight: "500",
    textAlign: "center",
    fontSize: 16
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }

})