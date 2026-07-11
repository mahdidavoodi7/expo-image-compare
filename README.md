<h1 align="center">
    expo-image-compare
</h1>



<p align="center">
  A free drop from <b>Motionary</b>. The whole flock lives at https://motionary.dev.
</p>

<p align="center">
  A customizable, animated before-after image comparison slider built for React Native & Expo — using Reanimated 3 and Gesture Handler.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="expo-image-compare is released under the MIT license." />
  <a href="https://www.npmjs.org/package/expo-image-compare">
    <img src="https://img.shields.io/npm/v/expo-image-compare" alt="Current npm package version." />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=mehdi_made">
    <img src="https://img.shields.io/twitter/follow/mehdi_made.svg?label=Follow%20@mehdi_made" alt="Follow @mehdi_made" />
  </a>
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/5cbcdcf6-2fba-4279-858d-dfb895f78f2e" alt="Current npm package version." />
</p>

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


## Want the rest?

The paid catalog is at
[motionary.dev](https://motionary.dev?utm_source=github&utm_medium=readme&utm_campaign=free_drop):
the ChatGPT attachments menu, Apple Music lyrics, Flip Calendar, and every drop that
comes next. Single drops around $10, or the Lifetime All-Access pass: one payment,
every drop, every future drop.

## Want a drop that doesn't exist yet?

Open an issue and describe the interaction. The most-requested ones get built.

## License

MIT. Use it in anything, ship it, sell your app, no strings. If it saves you a day, a
star helps other devs find this. 🐦‍⬛

Built by [@mehdi_made](https://x.com/mehdi_made)
