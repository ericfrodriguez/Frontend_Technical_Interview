import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { View } from "react-native";
import { useCallback } from "react";


const RootLayout = () => {
    const [fontsLoaded, fontError] = useFonts({
        'Nunito-Regular': require('../assets/fonts/NunitoSans_7pt-Regular.ttf'),
        'Nunito-Black': require('../assets/fonts/NunitoSans_7pt-Black.ttf'),
        'Nunito-Bold': require('../assets/fonts/NunitoSans_7pt-Bold.ttf'),
        'Nunito-SemiBold': require('../assets/fonts/NunitoSans_7pt-SemiBold.ttf'),
        'Nunito-ExtraBold': require('../assets/fonts/NunitoSans_7pt-ExtraBold.ttf'),
        'IntegralCF-Medium': require('../assets/fonts/IntegralCF-Medium.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
            <Stack>
                <Stack.Screen
                    name="(tabs)"
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack>
        </View>
    );
};

export default RootLayout;
