import { BeforeAfterSlider } from 'expo-image-compare';
import { Image, StyleSheet, Platform, View } from 'react-native';

const image1 = require('../assets/images/first.jpg')
const image2 = require('../assets/images/second.jpg')

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <BeforeAfterSlider beforeImage={image1} afterImage={image2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
