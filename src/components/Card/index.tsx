import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import { styles } from './styles'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

type Props = {
  title: string;
  checked: boolean;
  onCheck: (title: string) => void
  onRemove: (title: string) => void
}

const Card = ({onRemove,onCheck, title, checked }: Props) => {
  return (
    <View style={styles.card}>
      <BouncyCheckbox 
        onPress={() => onCheck(title)} 
        isChecked={checked}
        textStyle={checked ? styles.checked : styles.unchecked}
        text={title}
        style={styles.checkBox}
        disableBuiltInState
      />
      <TouchableOpacity
        onPress={() => onRemove(title)}
      >
        <MaterialCommunityIcons name="trash-can-outline" size={24} color="#808080" />
      </TouchableOpacity>
    </View>
  )
}

export { Card }