import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

import { Feather } from '@expo/vector-icons';
import { styles } from './styles';

type Props = {
  inputText: string,
  handleSetInputText: (inputText: string) => void,
  handleTodoAdd: () => void
}

const FormTodo = ({inputText, handleSetInputText, handleTodoAdd}: Props ) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.textInput}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        onChangeText={handleSetInputText}
        value={inputText}
      />
      <TouchableOpacity 
        style={styles.buttonAdd}
        onPress={handleTodoAdd}
      >
        <Feather name="plus-circle" size={24} color="white" />
      </TouchableOpacity>
    </View>
  )
}

export default FormTodo