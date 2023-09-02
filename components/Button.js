import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Button({ label, onPress }) {
 // const onPressButton = () => {
  //   Alert.alert('You tapped the button!, this is test click');
  // }

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 70,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    margin: "20px",
  },
  button: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#fff",
    borderStyle: "solid",
    height: '100%',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: "#663399"
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});