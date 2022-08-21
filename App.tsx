import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Home } from './src/screens/Home/Index';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Home />
    </>
  );
}