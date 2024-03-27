
import React from 'react';
import { Dimensions, Image, Text, View } from 'react-native';

import { colors } from '../../theme/theme';
import { StepperCarousel } from '../../components/StepperCarousel';
import { OnboardingSlides } from '../../components/OnboardingSlides';

export default function Home() {

    const { width, height } = Dimensions.get('window');

    return (
        <StepperCarousel
            data={OnboardingSlides}
            renderItem={({ index, item }) => {

                const Item = item;
                return (
                    <View
                        key={index}
                        style={{
                            flex: 1,
                            justifyContent: 'flex-end',
                            paddingTop: height * 0.1,
                            paddingBottom: height * 0.1,
                            borderWidth: 1,
                            borderColor: colors.cardBackground,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: colors.cardBackground,
                            overflow: 'hidden',
                        }}
                    >
                        <Item.Text />
                        <Item.Illustration />
                        {
                            Item.Extra ? <Item.Extra /> : null
                        }

                    </View>
                );
            }}
        />
    );
}
