import { Image, View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'

import FormTodo from '../../components/FormTodo';
import ListTodos from '../../components/ListTodos';

type TodoType = {
  isDone: boolean;
  title: string;
}

const Home = () => {

  const [todos, setTodos] = useState<TodoType[]>([]);
  const [inputText, setInputText] = useState("");

  const handleTodoAdd = () => {
    if(inputText.length <= 0) {
      return Alert.alert('Entre com um todo para adicionar.');
    }
    const todoExists = todos.find(todo => todo.title === inputText);

    if(todoExists) {
      return Alert.alert('Todo já existe.');
    }

    const newTodo: TodoType = Object.assign({}, {
      title: inputText,
      isDone: false
    });

    setTodos(prevState => [...prevState, newTodo]);

    setInputText("");
  }

  const handleTodoRemove = (todo: string) => {
    Alert.alert(
      'Atenção!',
      `Deseja remover o todo: ${todo}?`,
      [
        {
          text: "Remover",
          onPress: () => setTodos( todos.filter(item => item.title !== todo))
        },
        {
          text: "Cancelar",
          style: 'cancel'
        }
      ]
    )

  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../../assets/Logo.png')} style={styles.logo}/>
      </View>
      <FormTodo
        handleTodoAdd={handleTodoAdd}
        handleSetInputText={setInputText}
        inputText={inputText}
      />
      <ListTodos
        todos={todos}
        handleTodoRemove={handleTodoRemove}
      />
    </View>
  )
}

export{ Home }