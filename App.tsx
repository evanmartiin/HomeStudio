import React from 'react';
import HomeStudio from './components/HomeStudio';
import { View, StyleSheet } from 'react-native';
import TopApp from './components/TopApp';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <View style={styles.maxHeight}>
      <TopApp />
      <HomeStudio />
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  maxHeight: {
      height: "100%",
  }
});