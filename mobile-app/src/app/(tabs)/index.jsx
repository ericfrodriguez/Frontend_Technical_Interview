
import * as React from 'react';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { SafeAreaView } from "react-native-safe-area-context";

import { colors } from '../../theme/theme';

export default function Home() {
    const { width, height } = Dimensions.get('window');

    const carouselRef = React.useRef();

    const data = [...new Array(5).keys()];

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Carousel
                ref={carouselRef}
                loop={false}
                width={width}
                height={height - 80}
                autoPlay={false}
                bounce={false}
                data={data}
                scrollAnimationDuration={200}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index }) => (
                    <View
                        style={{
                            flex: 1,
                            borderWidth: 2,
                            borderColor: 'red',
                            justifyContent: 'center',
                            backgroundColor: colors.cardBackground,
                        }}
                    >
                        <Text style={{ textAlign: 'center', fontSize: 30, color: 'white', fontFamily: 'IntegralCF-Medium' }}>
                            {index}
                        </Text>
                    </View>
                )}
            />
            <Pressable style={[style.button, {left: (width - style.button.width) / 2}]} onPress={() => carouselRef.current.next()}>
                <Text style={style.textButton}>SIGUIENTE</Text>
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
    }
});