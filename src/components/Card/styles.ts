import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#262626",
    borderRadius: 4,
    height: 64,
    marginBottom: 8,
    paddingHorizontal: 12,
  },
  checkBox: {
    flex: 1,
  },
  checked: {
    color: '#808080',
    textDecorationLine: "line-through",
  },
  unchecked: {
    color: '#F2F2F2',
  }
})