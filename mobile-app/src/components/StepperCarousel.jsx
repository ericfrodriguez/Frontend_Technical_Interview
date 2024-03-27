
import React, { useState, useRef } from 'react';
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { SafeAreaView } from "react-native-safe-area-context";


import { colors } from '../theme/theme';

export const StepperCarousel = ({data, renderItem}) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const { width, height } = Dimensions.get('window');

    const carouselRef = useRef();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
            <View style={style.navigatorContainer}>
                {
                    data.map((_, index) => (
                        <Pressable
                            key={index}
                            style={{
                                flex: 1,
                                height: 8,
                                borderRadius: 4,
                                backgroundColor: currentSlide === index ? colors.primary : '#AAAAAA',
                            }}
                            onPress={() => {
                                setCurrentSlide(index);
                                carouselRef.current.scrollTo({ index, animated: true });
                            }}
                        />
                    ))
                }
            </View>
            <Carousel
                ref={carouselRef}
                loop={false}
                width={width}
                height={height}
                autoPlay={false}
                bounce={false}
                data={data}
                scrollAnimationDuration={200}
                onSnapToItem={(index) => setCurrentSlide(index)}
                renderItem={renderItem}
            />
            <Pressable style={[style.button, { left: (width - style.button.width) / 2 }]} onPress={() => carouselRef.current.next()}>
                <Text style={[style.textButton]}>{currentSlide === data.length - 1 ? 'FINALIZAR' : 'SIGUIENTE'}</Text>
            </Pressable>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 40,
        width: 335,
        height: 56,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: colors.primary,
        left: 50
    },
    textButton: {
        color: colors.primary,
        fontSize: 16,
        fontFamily: 'Nunito-Black',
    },
    navigatorContainer: {
        position: 'absolute',
        top: 50,
        zIndex: 1,
        paddingHorizontal: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        width: '100%',
        height: 10,
    },

});
