import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { MultipleSelectList } from 'react-native-dropdown-select-list'
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
      <Text>
        {label}
      </Text>
      <TextInput 
        value={value}
        onChangeText={onChange}
        style={{ borderColor: 'black', borderWidth: 1 }}
        {...props}
      />
    </View>
  )
}
export function InputSelect( {data, value, label, onChange, ...props } ) {
  return (
    <View style={styles.container}>
      <Text>
        {label}
      </Text>
      <Picker
        selectedValue={value}
        onValueChange={onChange}
        {...props}
      >
        <Picker.Item key={"empty"} label={'Seleccionar'} value={''} enabled={false} style={{color: 'gray'}} mode={'dropdown'} />

          { data.length > 0 &&
            data.map((item) => (
              <Picker.Item key={item.value} label={item.label} value={item.value} style={{fontSize:12}}  />
            ))
          }
      </Picker>
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
      <Pressable onPress={() => setShowDate(true)}>
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
          {...props}
        />
      )}
    </View>
  );
}

export function InputSearch({label, value, onChange, ...props}) {
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

export function InputSelectList({data, value, label, onChange, ...props}) {
  return (
    <View style={styles.container}>
      <Text>
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
    alignItems: 'start',
    margin: 5,
    width: '100%',
  },
  label: {
    marginBottom: 2,
    fontWeight: '500'
  },
  input: {
    borderColor: '#677483',
    borderWidth: 1,
    borderRadius: 5,
    padding: 3,
    width: '100%'
  }
})