import { Image, View, Text, FlatList } from 'react-native'
import React from 'react'
import { Card } from '../Card'
import { styles } from './style';

type Props = {
  todos: TodoType[];
  onCheck: (title: string) => void;
  onRemove: (title: string) => void
}

type TodoType = {
  checked: boolean;
  title: string;
}

const ListTodos = ({todos, onRemove, onCheck }: Props) => {
  return (
    <FlatList
        data={todos}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            checked={item.checked}
            onCheck={onCheck}
            onRemove={onRemove}
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