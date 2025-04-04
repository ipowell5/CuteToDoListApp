import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Task = ({ text }) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square} />
        <Text style={styles.itemText}>{text}</Text>
      </View>
      <View style={styles.circular} />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#ffe5b4',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
    color: '#5e5e5e',
    fontSize: 16,
    fontWeight: '500',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#ff00ff',
    borderWidth: 2,
    borderRadius: 6,
  },
});

export default Task;