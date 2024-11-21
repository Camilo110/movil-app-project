import { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, View, Modal, Pressable, ScrollView } from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { InputSearch } from './Inputs'
import { getProduccionModal } from '../services/forms';
import { SelectList } from 'react-native-dropdown-select-list'


function filter(list, query, listOfKeys) {
  const listFilter = list.filter((item) => (
    listOfKeys.some((key) => item[key].toString().toLowerCase().includes(query.toLowerCase()))
  ));
  return listFilter
}

export default function SelectorList({ dataList = [] , onChange, idsSelected, modalVisible, setModalVisible, isLeche }) {
  
  //const [data, setData] = useState(dataList)
  const [listRes, setListRes] = useState([])
  const [filterRes, setFilterRes] = useState([])
  const [inputValue, setInputValue] = useState('')
  
  
  useEffect(() => {
    //fetchProduccion()
    fetchDataModal()
    //fetchProductos()
  }, [])
  
  const setSelected = (id) => {
    const oldList = data.map((item) => item.ID === id ? { ...item, Selected: !item.Selected } : item )
    setData(oldList)
  }

  const fetchDataModal = async () => {
    const response = await getProduccionModal()
    setData(response)
  }

  const handleInputChangeRes = ({ target: { value } }) => {
    setInputValue(value)
    value ? setFilterRes(filter(listRes, value, ['Numero', 'Nombre'])) : setFilterRes(listRes)
  }

  const onSubmit = () => {
    console.log(data.filter((item) => item.Selected).map((item) => item.ID))
    onChange(data)
    idsSelected(data.filter((item) => item.Selected).map((item) => item.ID))
    setModalVisible(!modalVisible)
  }
    const data = [
      {key:'1', value:'Mobiles', disabled:true},
      {key:'2', value:'Appliances'},
      {key:'3', value:'Cameras'},
      {key:'4', value:'Computers', disabled:true},
      {key:'5', value:'Vegetables'},
      {key:'6', value:'Diary Products'},
      {key:'7', value:'Drinks'},
  ]

  return(
    <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
    />
  )
};


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  modalView: {
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

    width: '80%',
    height: '80%',
  },
  button: {
    borderRadius: 20,
    marginTop: 5,
    padding: 10,
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  itemCheckBox: {
    justifyContent: 'start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: '100%',
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ADD8E6',
    paddingVertical: 8
  }
})
