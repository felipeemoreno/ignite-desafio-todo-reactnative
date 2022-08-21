import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32
  },
  textInput: {
    flex: 1,
    height: 54,
    padding: 16,
    backgroundColor: "#262626",
    color: '#F2F2F2',
    fontSize: 16,
    border: 1,
    borderRadius: 6,
  },
  textInputFocused: {
    borderColor: '#5E60CE',
  },
  buttonAdd: {
    width: 52,
    height: 52,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 4, 
    backgroundColor: "#1E6F9F",
  },
})