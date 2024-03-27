
import { useCallback, useEffect, useRef, useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Svg, { Mask, Path } from "react-native-svg";
import { router, useFocusEffect } from 'expo-router'

import { colors } from '../../../../theme/theme'
import Animated, { Easing, useAnimatedProps, useSharedValue, withDelay, withTiming } from 'react-native-reanimated';
// import { animated, useSpring } from '@react-spring/native';

const AnimatedPath = Animated.createAnimatedComponent(Path);

const SuccessSVG = ({ checkProgress, borderProgress }) => {

    const [checkLength, setCheckLength] = useState(0);
    const [borderLength, setBorderLength] = useState(0);

    const checkRef = useRef(null);
    const borderRef = useRef(null);
    const checkAnimation = useAnimatedProps(() => ({ strokeDashoffset: checkLength - checkLength * checkProgress.value }))
    const borderAnimation = useAnimatedProps(() => ({ strokeDashoffset: borderLength - borderLength * borderProgress.value }))

    return (
        <Svg
            width={151}
            height={106}
            viewBox="0 0 151 106"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Mask id="path-1-inside-1_1_3141" fill="white">
                <Path d="M118.396 63.7622C118.396 66.8858 113.962 69.4748 113.291 72.3992C112.599 75.418 115.461 79.6736 114.151 82.3989C112.809 85.1661 107.694 85.5749 105.797 87.9542C103.889 90.3441 104.623 95.4277 102.233 97.3354C99.8536 99.2326 95.0634 97.3983 92.2962 98.7295C89.571 100.04 88.0301 104.945 85.0114 105.637C82.087 106.297 78.586 102.566 75.452 102.566C72.3179 102.566 68.817 106.297 65.8926 105.637C62.8738 104.945 61.333 100.05 58.6077 98.7295C55.8405 97.3878 51.0504 99.2326 48.671 97.3354C46.2811 95.4277 47.0149 90.3441 45.1072 87.9542C43.21 85.5749 38.0844 85.1661 36.7532 82.3989C35.443 79.6736 38.294 75.418 37.6127 72.3992C36.9523 69.4748 32.5081 66.8858 32.5081 63.7622C32.5081 60.6387 36.9419 58.0496 37.6127 55.1252C38.3045 52.1065 35.443 47.8509 36.7532 45.1256C38.0949 42.3584 43.21 41.9496 45.1072 39.5702C47.0149 37.1804 46.2811 32.0967 48.671 30.189C51.0504 28.2918 55.8405 30.1262 58.6077 28.795C61.333 27.4847 62.8738 22.5793 65.8926 21.8875C68.817 21.2271 72.3179 24.9586 75.452 24.9586C78.586 24.9586 82.087 21.2271 85.0114 21.8875C88.0301 22.5793 89.571 27.4743 92.2962 28.795C95.0634 30.1366 99.8536 28.2918 102.233 30.189C104.623 32.0967 103.889 37.1804 105.797 39.5702C107.694 41.9496 112.82 42.3584 114.151 45.1256C115.461 47.8509 112.61 52.1065 113.291 55.1252C113.962 58.0496 118.396 60.6282 118.396 63.7622Z" />
            </Mask>
            <AnimatedPath
                d="M118.396 63.7622C118.396 66.8858 113.962 69.4748 113.291 72.3992C112.599 75.418 115.461 79.6736 114.151 82.3989C112.809 85.1661 107.694 85.5749 105.797 87.9542C103.889 90.3441 104.623 95.4277 102.233 97.3354C99.8536 99.2326 95.0634 97.3983 92.2962 98.7295C89.571 100.04 88.0301 104.945 85.0114 105.637C82.087 106.297 78.586 102.566 75.452 102.566C72.3179 102.566 68.817 106.297 65.8926 105.637C62.8738 104.945 61.333 100.05 58.6077 98.7295C55.8405 97.3878 51.0504 99.2326 48.671 97.3354C46.2811 95.4277 47.0149 90.3441 45.1072 87.9542C43.21 85.5749 38.0844 85.1661 36.7532 82.3989C35.443 79.6736 38.294 75.418 37.6127 72.3992C36.9523 69.4748 32.5081 66.8858 32.5081 63.7622C32.5081 60.6387 36.9419 58.0496 37.6127 55.1252C38.3045 52.1065 35.443 47.8509 36.7532 45.1256C38.0949 42.3584 43.21 41.9496 45.1072 39.5702C47.0149 37.1804 46.2811 32.0967 48.671 30.189C51.0504 28.2918 55.8405 30.1262 58.6077 28.795C61.333 27.4847 62.8738 22.5793 65.8926 21.8875C68.817 21.2271 72.3179 24.9586 75.452 24.9586C78.586 24.9586 82.087 21.2271 85.0114 21.8875C88.0301 22.5793 89.571 27.4743 92.2962 28.795C95.0634 30.1366 99.8536 28.2918 102.233 30.189C104.623 32.0967 103.889 37.1804 105.797 39.5702C107.694 41.9496 112.82 42.3584 114.151 45.1256C115.461 47.8509 112.61 52.1065 113.291 55.1252C113.962 58.0496 118.396 60.6282 118.396 63.7622Z"
                onLayout={() => setBorderLength(borderRef.current.getTotalLength())}
                ref={borderRef}
                animatedProps={borderAnimation}
                fill="#64C883"
                stroke="black"
                strokeWidth={3}
                strokeDasharray={borderLength}
                strokeDashoffset={0}
                mask="url(#path-1-inside-1_1_3141)"
            />
            <AnimatedPath
                animatedProps={checkAnimation}
                onLayout={() => setCheckLength(checkRef.current.getTotalLength())}
                ref={checkRef}
                d="M61.5 63.5L71.5 74L89.5 53"
                stroke="white"
                strokeWidth={5}
                strokeDasharray={checkLength}
                strokeDashoffset={0}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <AnimatedPath
                style={{transform: [{scale: 2}]}}
                d="M110.385 8.29168C116.811 7.4183 117.519 6.70929 118.392 0.284668C119.267 6.70929 119.976 7.4183 126.4 8.29168C119.976 9.16595 119.267 9.87407 118.392 16.2996C117.519 9.87407 116.811 9.16595 110.385 8.29168Z"
                fill="#64C883"
            />
            <Path
                d="M120.686 23.4609C132.849 21.8077 134.189 20.4657 135.842 8.30479C137.497 20.4657 138.839 21.8077 151 23.4609C138.839 25.1158 137.497 26.4562 135.842 38.6187C134.189 26.4562 132.849 25.1158 120.686 23.4609Z"
                fill="#64C883"
            />
            <Path
                d="M30.3136 23.1758C21.5933 24.3611 20.6322 25.3233 19.4469 34.0424C18.2604 25.3233 17.2982 24.3611 8.57908 23.1758C17.2982 21.9892 18.2604 21.0282 19.4469 12.3079C20.6322 21.0282 21.5933 21.9892 30.3136 23.1758Z"
                fill="#64C883"
            />
            <Path
                d="M5.71955 34.0424C6.34339 38.6321 6.84983 39.1379 11.4388 39.7617C6.84983 40.3862 6.34339 40.8926 5.71955 45.4816C5.09507 40.8926 4.58927 40.3862 -0.000380766 39.7617C4.58927 39.1379 5.09507 38.6321 5.71955 34.0424Z"
                fill="#64C883"
            />
        </Svg>
    )
}

export default function SuccessScreen() {
    const checkProgress = useSharedValue(0);
    const borderProgress = useSharedValue(0);

    useFocusEffect(
        useCallback(() => {
            borderProgress.value = withDelay(500, withTiming(1, { duration: 1000, easing: Easing.linear }))
            checkProgress.value = withDelay(2000, withTiming(1, { duration: 1000, easing: Easing.linear }))
            setTimeout(() => {
                router.replace('/search');
            }, 7000)
        }, [checkProgress, borderProgress])
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center' }}>
            <SuccessSVG borderProgress={borderProgress} checkProgress={checkProgress}/>
            <Text style={{ textAlign: 'center', fontFamily: 'IntegralCF-Medium', fontSize: 24, color: colors.primary, marginTop: 24 }}>¡FELICITACIONES!</Text>
            <Text style={{ textAlign: 'center', fontFamily: 'Nunito-Bold', fontSize: 18, color: colors.text, marginTop: 16 }}>Bienvenido a WIN</Text>
            <Text style={{ textAlign: 'center', fontFamily: 'Nunito-Bold', fontSize: 16, color: colors.text, marginTop: 24 }}>Ya puedes ser parte del mundo del deporte</Text>
        </SafeAreaView>
    )
}