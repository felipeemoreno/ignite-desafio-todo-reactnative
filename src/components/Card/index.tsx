import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import { styles } from './styles'

import { MaterialCommunityIcons } from '@expo/vector-icons';

type Props = {
  title: string;
  isDone: boolean;
  onRemove: (title: string) => void
}

const Card = ({onRemove, title, isDone }: Props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>{title}</Text>
      <TouchableOpacity
        onPress={() => onRemove(title)}
      >
        <MaterialCommunityIcons name="trash-can-outline" size={24} color="#808080" />
      </TouchableOpacity>
    </View>
  )
}

export { Card }