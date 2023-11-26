import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('Xavier')

  const clickHandler = () => {
    setName('chun-li');
  }

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <View>
      </View>
      <View style={styles.buttonContainer}>
        <Button title='Update State' onPress={clickHandler}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  }
});
