import React, { useEffect, useRef, useState } from 'react';
import { View, Image, StyleSheet, Text, } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming, cancelAnimation, withSequence, Easing, } from 'react-native-reanimated';
import { Feather } from '@expo/vector-icons';
export const BeforeAfterSlider = ({ beforeImage, afterImage, height = 300, autoPlay = false, autoPlayDuration = 5000, hideLabel, customHandle, sliderLineColor, labelStyle, labelTextStyle, labelTextBefore, labelTextAfter, }) => {
    const [containerOffsetX, setContainerOffsetX] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);
    const translateX = useSharedValue(0);
    const containerRef = useRef(null);
    const onLayout = () => {
        if (containerRef.current) {
            containerRef.current.measureInWindow((x, _y, width) => {
                setContainerWidth(width);
                setContainerOffsetX(x);
                translateX.value = width / 2;
            });
        }
    };
    useEffect(() => {
        if (!containerWidth || !autoPlay)
            return;
        const timingConfig = (duration) => ({
            duration,
            easing: Easing.linear,
        });
        translateX.value = withRepeat(withSequence(withTiming(containerWidth, timingConfig(autoPlayDuration / 2)), withTiming(0, timingConfig(autoPlayDuration)), withTiming(containerWidth / 2, timingConfig(autoPlayDuration / 2))), -1, false);
        return () => {
            cancelAnimation(translateX);
        };
    }, [containerWidth, autoPlay]);
    const pan = Gesture.Pan()
        .onUpdate((e) => {
        if (autoPlay)
            return; // skip if autoplay is active
        const localX = e.absoluteX - containerOffsetX;
        const clampedX = Math.min(Math.max(localX, 0), containerWidth);
        translateX.value = clampedX;
    });
    const beforeStyle = useAnimatedStyle(() => ({
        width: translateX.value,
    }));
    const sliderStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value - 15 }, { translateY: -15 }],
    }));
    const lineStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value - 1 }],
    }));
    return (<View ref={containerRef} onLayout={onLayout} style={[styles.container, { height }]}>
      <Image source={afterImage} style={[styles.image, { height, width: containerWidth }]} resizeMode="cover"/>

      {containerWidth > 0 && (<Animated.View style={[styles.imageOverlay, beforeStyle]}>
          <Image source={beforeImage} style={[styles.image, { height, width: containerWidth }]} resizeMode="cover"/>
        </Animated.View>)}

      {containerWidth > 0 && (<Animated.View style={[styles.dividerLine, lineStyle, { height, backgroundColor: sliderLineColor ? sliderLineColor : "#FFFFFF" }]}/>)}

      {containerWidth > 0 && (<GestureDetector gesture={pan}>
          <Animated.View style={[styles.sliderHandle, sliderStyle]}>
            {customHandle ? customHandle : (<>
                <Feather name="chevron-left" size={16} color="#000"/>
                <Feather name="chevron-right" size={16} color="#000"/>
              </>)}
          </Animated.View>
        </GestureDetector>)}

      {hideLabel ? null :
            <>
            <View style={[styles.label, { left: 20 }, labelStyle]}>
              <Text style={[styles.labelText, labelTextStyle]}>{labelTextBefore ?? "Before"}</Text>
            </View>
            <View style={[styles.label, { right: 20 }, labelStyle]}>
              <Text style={[styles.labelText, labelTextStyle]}>{labelTextAfter ?? "After"}</Text>
            </View>
          </>}
    </View>);
};
const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#000',
        overflow: 'hidden',
        position: 'relative',
    },
    image: {
        position: 'absolute',
    },
    imageOverlay: {
        position: 'absolute',
        overflow: 'hidden',
        height: '100%',
        zIndex: 2,
    },
    dividerLine: {
        width: 2,
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        zIndex: 3,
    },
    sliderHandle: {
        position: 'absolute',
        zIndex: 4,
        backgroundColor: '#fff',
        borderColor: '#FFFFFF',
        borderWidth: 2,
        borderRadius: 20,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        top: '50%',
    },
    label: {
        position: 'absolute',
        top: 20,
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 5,
        zIndex: 5,
    },
    labelText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
