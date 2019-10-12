import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'

const App = () => {
  const [inputText, setInputText] = useState('3')
  const [timerText, setTimerText] = useState(0)
  const [intervalId, setIntervalId] = useState()
  console.log('interval', intervalId)

  useEffect(() => {
    // console.log('Effect', timerInterval)
    if (timerText <= 0) clearInterval(intervalId)
  }, [timerText])

  const handleChange = text => {
    setInputText(text)
  }

  const handlePress = () => {
    let count = parseInt(inputText)

    setIntervalId(
      setInterval(() => {
        console.log(count)
        setTimerText(--count)
      }, 1000)
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.content}>
          <TextInput
            style={{ marginBottom: 10, borderBottomWidth: 0.5 }}
            placeholder="Placeholder text"
            onChangeText={handleChange}
            value={inputText}
            // value="3"
          />
          <Button
            style={styles.button}
            onPress={handlePress}
            title="Start Interval"
          />
        </View>
      </View>
      <View style={styles.middle}>
        <Text style={styles.timerText}>{timerText}</Text>
      </View>
      <View style={styles.bottom} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 1,
    backgroundColor: 'peachpuff',
  },
  middle: {
    flex: 2,
    backgroundColor: 'coral',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    flex: 3,
    backgroundColor: 'tomato',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    fontSize: 20,
  },
  timerText: {
    fontSize: 80,
  },
})

export default App
