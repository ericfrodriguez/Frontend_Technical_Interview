import { Stack } from "expo-router";
import { useFonts } from 'expo-font';


const RootLayout = () => {
    const [fontsLoaded] = useFonts({
        'Nunito-Regular': require('../assets/fonts/NunitoSans_7pt-Regular.ttf'),
        'Nunito-Black': require('../assets/fonts/NunitoSans_7pt-Black.ttf'),
        'Nunito-Bold': require('../assets/fonts/NunitoSans_7pt-Bold.ttf'),
        'Nunito-SemiBold': require('../assets/fonts/NunitoSans_7pt-SemiBold.ttf'),
        'Nunito-ExtraBold': require('../assets/fonts/NunitoSans_7pt-ExtraBold.ttf'),
        'IntegralCF-Medium': require('../assets/fonts/IntegralCF-Medium.ttf'),
    });

    return (
        <Stack>
            <Stack.Screen
                name="(tabs)"
                options={{
                    headerShown: false,
                }}
            />
        </Stack>
    );
};

export default RootLayout;
