import { Image, View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'

import FormTodo from '../../components/FormTodo';
import ListTodos from '../../components/ListTodos';
import InfoBar from '../../components/InfoBar';

type TodoType = {
  checked: boolean;
  title: string;
}

const Home = () => {

  const [todos, setTodos] = useState<TodoType[]>([]);
  const [inputText, setInputText] = useState("");
  const [created, setCreated] = useState(0);
  const [finished, setFinished] = useState(0);

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
      checked: false
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

  const handleTodoCheck = (title: string) => {
    const todosChanged = todos.map(item => {
      if(item.title === title) {
        item.checked = !item.checked
      }
      return item;
    });

    setTodos(todosChanged)
  }

  const handleInfoBar = () => {
    const  [created, finished] = todos.reduce((acc, item) => {
      if(item.checked) {
        acc[1]++
      }
      acc[0]++
      return acc;
    }, [0, 0])

    setCreated(created);
    setFinished(finished);
  }
  
  useEffect(() => {
    handleInfoBar()
  }, [todos])
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../../assets/Logo.png')} style={styles.logo}/>
      </View>
      <FormTodo
        onAdd={handleTodoAdd}
        handleSetInputText={setInputText}
        inputText={inputText}
      />
      <InfoBar 
        created={created}
        finished={finished}
      />
      <ListTodos
        todos={todos}
        onRemove={handleTodoRemove}
        onCheck={handleTodoCheck}
      />
    </View>
  )
}

export{ Home }