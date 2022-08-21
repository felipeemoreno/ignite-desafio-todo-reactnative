import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'

type Props = {
  created: number;
  finished: number;
}

const InfoBar = ({created, finished}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.created}>Criadas</Text>
        <Text style={styles.box}>{created}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.finished}>Concluidas</Text>
        <Text style={styles.box}>{finished}</Text>
      </View>
    </View>
  )
}

export default InfoBar