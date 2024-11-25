import { StyleSheet, View, TextInput } from 'react-native'
import { useState } from 'react'

export default function InputSearch({ value = '', placeholder, data, onChange, keysToFilter }) {

  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (value) => {
    console.log('enuso')
    setInputValue(value);
    value ? onChange(filter(value, keysToFilter, data)) : onChange(data);
  }
  return (
    <View>
      <TextInput
          style={styles.searchInput}
          placeholder= {placeholder}
          value={inputValue}
          onChangeText={handleInputChange}
        />
    </View>
  )
}

function filter(query, keys, data) {
  if (!query) return data
  if (!Array.isArray(keys) || keys.length === 0) return data; // Retorna todo si no hay claves válidas

  return data.filter((res) =>
    keys.some(
      (key) =>
        res[key] &&
        res[key].toString().toLowerCase().includes(query.toLowerCase())
    )
  );
}


const styles = StyleSheet.create({
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    margin: 20,
    marginBottom: 0,
    borderRadius: 8,
  }
})