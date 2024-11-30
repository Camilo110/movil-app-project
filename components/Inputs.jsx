import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { MultipleSelectList, SelectList } from 'react-native-dropdown-select-list'
import { useState } from 'react';

export function InputNumber({label, value, onChange,  ...props}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {label}
      </Text>
      <TextInput
        keyboardType="numeric" 
        value={value.toString()}
        onChangeText={(number) => onChange(Number(number))}
        style={styles.input}
        {...props}
      />
    </View>
  )
}
export function InputText({label, value, onChange, ...props}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {label}
      </Text>
      <TextInput 
        value={value}
        onChangeText={onChange}
        style={styles.input}
        {...props}
      />
    </View>
  )
}
export function InputSelect( {data, value, label, onChange, ...props } ) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {label}
      </Text>
      <SelectList
        style={styles.floatingList}
        data={data}
        selected={value}
        setSelected={onChange}
        save="key"
        {...props}
      />
    </View>
  )
}

export function InputDate({ label, value, onChange, keyValue, ...props }) {
  const [showDate, setShowDate] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    if (event.type === 'dismissed') {
      setShowDate(false);
      return;
    }
    if (event.type === 'set') {
      const currentDate = selectedDate.toISOString().split('T')[0];
      setShowDate(false);
      onChange(currentDate, keyValue);
    }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setShowDate(true) } {...props}>
        <Text style={styles.label}>{label}</Text>
        <TextInput 
          editable={false} 
          value={value || new Date().toISOString().split('T')[0]}
          style={[{color: 'black', }, styles.input]}
        /> 
      </Pressable>
      {showDate && ( 
        <DateTimePicker
          value={value ? new Date(value) : new Date()}
          onChange={onChangeDate}
        />
      )}
    </View>
  );
}

export function InputSelectList({data, value, label, onChange, ...props}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {label}
      </Text>
      <MultipleSelectList
        data={data}
        selected={value}
        setSelected={onChange}
        save="key" 
        {...props}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  label: {
    marginBottom: 2,
    fontWeight: '500'
  },
  input: {
    borderColor: '#677483',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    margin: 5,
  },
})