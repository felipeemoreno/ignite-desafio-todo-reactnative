import { Image, View, Text, FlatList } from 'react-native'
import React from 'react'
import { Card } from '../Card'
import { styles } from './style';

type Props = {
  todos: TodoType[];
  handleTodoRemove: (title: string) => void
}

type TodoType = {
  isDone: boolean;
  title: string;
}

const ListTodos = ({todos, handleTodoRemove }: Props) => {
  return (
    <FlatList
        data={todos}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            isDone={item.isDone}
            onRemove={handleTodoRemove}
          />
        )}
        keyExtractor={item => item.title}
        ListEmptyComponent={() => (
          <View style={styles.emptyTodos}>
            <Image
              source={require('../../../assets/task-icon.png')}
              style={styles.taskIcon}
            />
            <Text style={styles.emptyTodosTextBold}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.emptyTodosText}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />
  )
}

export default ListTodos