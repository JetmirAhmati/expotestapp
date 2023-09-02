import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {Alert, Image, StyleSheet, View} from 'react-native';
import Button from './components/Button';
import * as ImagePicker from 'expo-image-picker';

const PlaceholderImage = require('./assets/background.jpeg');

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  let imageSource = null;
    imageSource = selectedImage ?  selectedImage : PlaceholderImage;

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage({uri: result.assets[0].uri});
    } else {
      alert('You did not select any image.');
    }

  };
  useEffect(()=> {
    console.log("selected image", selectedImage, 'color: red');
    console.log("image src", imageSource);
  }, [selectedImage])

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} /> 
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" onPress={pickImageAsync}/>
        <Button label="Use this photo" onPress={()=> Alert.alert("use this photo")} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
 
