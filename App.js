import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks ✨</Text>
        <View style={styles.items}>
          <Task text="Buy pastel paints 🎨" />
          <Task text="Organize crystals 💎" />
          <Task text="Feed unicorns 🦄" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdf1f1',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5e5e5e',
  },
  items: {
    marginTop: 30,
  },
});