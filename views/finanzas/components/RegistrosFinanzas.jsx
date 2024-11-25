import { ScrollView, StyleSheet, Text, View } from 'react-native'
import ResumenFinanzas from './ResumenFinanzas'
import { getResumen, getAllTransaccion } from '../../../services/transaccion'
import ItemFinanzas from './ItemFinanzas'
import { useEffect, useState } from 'react'

export default function RegistrosFinanzas() {

  const [transacciones, setTransacciones] = useState([])
  const [resumen, setResumen] = useState({Ingreso: 0, Egreso: 0, Balance: 0})

  useEffect(() => {
    fetchTransacciones()
    fetchResumen()
  }, [])

  const fetchTransacciones = async () => {
    const resp = await getAllTransaccion()
    setTransacciones(resp)
  }

  const fetchResumen = async() => {
    const resp = await getResumen()
    setResumen(resp)
  }
  return (
    <View>
      <ResumenFinanzas resumen={resumen}/>
      <ScrollView>
        {
          transacciones.map((item) => (
            <ItemFinanzas key={item.ID} item={item} />
          ))
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})