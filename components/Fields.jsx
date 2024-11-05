import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';

export function InputNumber({label, value, onChange}) {
  return (
    <View>
      <Text>
        {label}
      </Text>
      <TextInput
        keyboardType="numeric" 
        value={value.toString()}
        onChangeText={(number) => onChange(Number(number))}
      />
    </View>
  )
}
export function InputText() {
  return (
    <View>
      <Text>Fields</Text>
    </View>
  )
}
export function InputSelect( {data, value, label, onChange } ) {
  return (
    <View>
      <Text>
        {label}
      </Text>
      <Picker
        selectedValue={value}
        onValueChange={onChange}
      >
          { data.length > 0 &&
            data.map((item) => (
              <Picker.Item key={item.value} label={item.label} value={item.value} />
            ))
          }
      </Picker>
    </View>
  )
}

export function InputDate({ label, value, onChange, keyValue }) {
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
    <View >
      <Pressable onPress={() => setShowDate(true)}>
        <Text style={{ paddingVertical: 8 }}>{label}: {value}</Text>
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

const styles = StyleSheet.create({})