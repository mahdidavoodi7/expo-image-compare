import { ImageSourcePropType, ViewStyle, StyleProp, TextStyle } from 'react-native';
interface BeforeAfterSliderProps {
    /** Image to show on the left side (can be local or remote) */
    beforeImage: ImageSourcePropType;
    /** Image to show on the right side (can be local or remote) */
    afterImage: ImageSourcePropType;
    /** Height of the slider component (default: 300) */
    height?: number;
    /** Enable automatic sliding animation back and forth */
    autoPlay?: boolean;
    /** Duration of a full autoplay cycle (default: 5000ms) */
    autoPlayDuration?: number;
    /** Hide the "Before" and "After" text labels (default: false) */
    hideLabel?: boolean;
    /** Provide a custom React component to use as the slider handle */
    customHandle?: React.ReactNode;
    /** Customize color of the vertical divider line */
    sliderLineColor?: string;
    /** Override styles for label container (both Before/After) */
    labelStyle?: StyleProp<ViewStyle>;
    /** Override styles for label text (both Before/After) */
    labelTextStyle?: StyleProp<TextStyle>;
    /** Custom text for the left-side label */
    labelTextBefore?: string;
    /** Custom text for the right-side label */
    labelTextAfter?: string;
}
export declare const BeforeAfterSlider: React.FC<BeforeAfterSliderProps>;
export {};
