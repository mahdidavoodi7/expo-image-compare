# expo-image-compare

A customizable, animated before-after image comparison slider built for React Native & Expo — using Reanimated 3 and Gesture Handler.

![Compare Gif](https://github-production-user-asset-6210df.s3.amazonaws.com/29153345/431743984-d2385eaf-9a5e-4fdc-8c00-fc5510e69ba1.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250409%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250409T082233Z&X-Amz-Expires=300&X-Amz-Signature=5db3a13814d18e5cadc14b35b91b59fb4941d771faf81aa0ac6a5b76567e24fc&X-Amz-SignedHeaders=host)

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
