import { StatusBar } from 'expo-status-bar';
import {Alert, StyleSheet, Text, View, Button} from 'react-native';

export default function App() {

 const onPressButton =()=> {
    Alert.alert('You tapped the button!, this is test click');
  }

  return (
    <View style={styles.container}>
      <Text>
        Open up App.js to start working on your app!
      </Text>

        <View style={styles.buttonContainer}>
          <Button onPress={onPressButton} title="Press Me" />
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "purple"
  },
});
