# expo-image-compare

A customizable, animated before-after image comparison slider built for React Native & Expo — using Reanimated 3 and Gesture Handler.

![Image](https://github.com/user-attachments/assets/5cbcdcf6-2fba-4279-858d-dfb895f78f2e)

## ✨ Features

- ✅ Supports both local and remote images
- 🎯 Smooth gestures with Reanimated v3
- 🔁 Optional autoplay back-and-forth
- 🧩 Customizable slider handle
- 🏷 Optional before/after labels
- 💯 Fully works with Expo


## 📦 Installation

```bash
npm install expo-image-compare react-native-reanimated react-native-gesture-handler @expo/vector-icons
```
Make sure Reanimated v3 and Gesture Handler are configured correctly for your app.


## 🚀 Usage

```javascript
import { BeforeAfterSlider } from 'expo-before-after-slider';

<BeforeAfterSlider
  beforeImage={require('./before.jpg')}
  afterImage={{ uri: 'https://example.com/after.jpg' }}
  height={300}
  autoPlay={true}
  autoPlayDuration={8000}
/>
```



## 🛠 Props

| Prop               | Type                  | Default     | Description |
|--------------------|-----------------------|-------------|-------------|
| `beforeImage`      | `ImageSourcePropType` | **required** | Image for the left side |
| `afterImage`       | `ImageSourcePropType` | **required** | Image for the right side |
| `height`           | `number`              | `300`       | Height of the slider in pixels |
| `autoPlay`         | `boolean`             | `false`     | Enables automatic sliding animation |
| `autoPlayDuration` | `number`              | `5000`      | Total duration (ms) of one full loop (center → right → left → center) |
| `hideLabel`        | `boolean`             | `false`     | Hides the default "Before" and "After" labels |
| `customHandle`     | `React.ReactNode`     | `undefined` | Custom React component to render instead of the default slider handle |
| `sliderLineColor`  | `string`              | `#FFFFFF`   | Color of the dividing line between images |
| `handleStyle`      | `object`              | `undefined` | Style override for the default handle container |
| `handleSize`       | `number`              | `30`        | Size (width & height) of the default handle in pixels |
| `labelStyle`       | `object`              | `undefined` | Style override for the label containers |
| `labelTextBefore`  | `string`              | `'Before'`  | Text label for the left image |
| `labelTextAfter`   | `string`              | `'After'`   | Text label for the right image |






## 💡 Coming Soon
- Vertical orientation
- Custom easing support


## 📄 License

Made with ❤️ by @mahdidavoodi7
