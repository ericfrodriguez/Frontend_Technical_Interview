import { StyleSheet, Image, Text, View, Dimensions } from "react-native"
import Badge from './Badge';
import CircleBg from '../assets/circle-bg.svg'
import LinesBg from '../assets/lines-bg.svg'
import { colors } from "../theme/theme";
import { TeamLogo, logos } from "./TeamLogo";

const { width, height } = Dimensions.get('window');

const TextContainer = ({ children, style }) => {
    return (
        <View style={{ flex: 0.8, gap: 8, width: '100%', justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 16, ...style }}>
            {children}
        </View>
    )
}

const IllustrationContainer = ({ children, style }) => {
    return (
        <View style={{ flex: 3, justifyContent: 'flex-start', alignItems: 'center', width: '100%', ...style }}>
            {children}
        </View>
    )
}

export const OnboardingSlides = [
    {
        Text: () => (
            <TextContainer>
                <Text style={styles.title}>
                    BIENVENIDO A WIN
                </Text>
                <Text style={styles.subtitle}>
                    EL ÚNICO MARKETPLACE DE FÚTBOL
                </Text>
                <Text style={styles.text}>
                    INVIERTE EN EL MERCADO DE PASES Y DISFRUTA DE EXPERIENCIAS ÚNICAS
                </Text>
            </TextContainer>
        ),
        Illustration: ({ ...props }) => (
            <IllustrationContainer>
                <CircleBg
                    width={460}
                    height={460}
                    style={{ position: 'absolute', top: height > 900 ? 30 : 0 }}
                />
                <View style={{ paddingTop: height > 900 ? 30 : 0 }}>
                    <Image
                        style={{
                            width: width * 0.4,
                            minWidth: 306,
                            resizeMode: 'cover',
                        }}
                        source={require('../assets/win-mobile-perspective.png')}
                    />
                    <Badge
                        style={{
                            bottom: 100,
                            right: 50,
                        }}
                        imageName='mercadopago'
                    />
                    <Badge
                        style={{
                            top: height > 900 ? 110 : 80,
                            left: 5,
                            width: 56,
                            height: 56,
                        }}
                        imageStyle={{
                            width: 40,
                            height: 42,
                        }}
                        imageName='audax'
                    />
                    <Badge
                        style={{
                            top: height > 900 ? 30 : 0,
                            left: 30,
                            width: 48,
                            height: 48,
                        }}
                        imageStyle={{
                            width: 31,
                            height: 37,
                        }}
                        imageName='sanluis'
                    />
                    <Badge
                        style={{
                            bottom: 150,
                            right: -20,
                            width: 48,
                            height: 48,
                        }}
                        imageStyle={{
                            width: 44,
                            height: 44,
                        }}
                        imageName='transferball'
                    />
                </View>
            </IllustrationContainer>
        )
    },
    {
        Text: () => (
            <TextContainer style={{ gap: 16 }}>
                <Text style={styles.title}>INGRESA AL MERCADO DE PASES</Text>
                <Text style={{ ...styles.text, fontSize: 16 }}>
                    INVIERTE Y GANA CON LA PRÓXIMA
                    <Text style={{ ...styles.strongText, color: '#AC8B8B' }}>
                        {'\n'}&nbsp;TRANSFERENCIA DEL JUGADOR
                    </Text>
                </Text>
            </TextContainer>
        ),
        Illustration: () => (
            <IllustrationContainer>
                <LinesBg
                    width={width * 2}
                    height={width * 1.5}
                    style={{ position: 'absolute', top: 0 }}
                />
                <View style={{ paddingTop: 40 }}>
                    <Image
                        source={require('../assets/diego-alves-card.png')}
                    />
                    <Badge
                        style={{
                            bottom: 130,
                            right: -40,
                            width: 64,
                            height: 64,
                        }}
                        imageStyle={{
                            width: 48,
                            height: 48,
                        }}
                        imageName='america'
                    />
                    <Badge
                        style={{
                            bottom: 60,
                            left: -40,
                            width: 56,
                            height: 56,
                        }}
                        imageStyle={{
                            width: 53,
                            height: 53,
                        }}
                        imageName='transferball'
                    />
                    <Badge
                        style={{
                            top: 50,
                            left: -50,
                            width: 64,
                            height: 64,
                        }}
                        imageStyle={{
                            width: 52,
                            height: 52,
                        }}
                        imageName='audax'
                    />
                </View>
            </IllustrationContainer>
        )
    },
    {
        Text: () => (
            <TextContainer style={{ gap: 16, paddingTop: height < 1000 ? 10 : 0 }}>
                <Text style={styles.title}>VIVE TUS PROPIAS EXPERIENCIAS</Text>
                <Text style={{ ...styles.subtitle, color: colors.text, fontFamily: 'Nunito-Bold' }}>
                    <Text style={styles.strongText}>VIVE TU PASIÓN DE FORMA ÚNICA</Text>
                    {'\n'}COMO NUNCA LO IMAGINASTE
                </Text>
            </TextContainer>
        ),
        Illustration: () => (
            <IllustrationContainer>
                <View style={{ paddingTop: height * 0.04 }}>
                    <Image
                        style={{
                            width: width * 0.4,
                            minWidth: 263,
                            resizeMode: 'cover',
                        }}
                        source={require('../assets/win-mobile-perspective2.png')}
                    />
                </View>
            </IllustrationContainer>
        ),
    },
    {
        Text: () => (
            <TextContainer style={{ gap: 16 }}>
                <Text style={styles.title}>DESCUBRE LOS MEJORES CLUBES</Text>
                <Text style={{ ...styles.text, fontSize: 16 }}>
                    DONDE JUEGAN
                    <Text style={{ color: colors.secondary }}>
                        &nbsp;NUESTRO JUGADORES
                    </Text>
                </Text>
            </TextContainer>
        ),
        Illustration: () => (
            <IllustrationContainer style={{ paddingTop: height > 900 ? 20 : 0 }}>
                <View style={{ flex: 1, maxWidth: 300, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', columnGap: height > 900 ? 24 : 16, rowGap: height > 900 ? 24 : 16 }}>
                    {
                        logos.map((logo, index) => (<TeamLogo name={logo.name} key={index} />))
                    }
                </View>

            </IllustrationContainer>
        ),
        Extra: () => (
            <View style={{ flex: 1 }}>
                <Text style={{ fontFamily: 'Nunito-SemiBold', fontSize: 12, color: '#AAAAAA' }}>Y MUCHOS MÁS INGRESANDO AL MERCADO</Text>
            </View>
        )
    },
]

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 28,
        color: colors.text,
        fontFamily: 'IntegralCF-Medium',
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        color: colors.primary,
        fontFamily: 'Nunito-ExtraBold'
    },
    text: {
        textAlign: 'center',
        fontSize: 14,
        color: colors.text,
        fontFamily: 'Nunito-Bold',
        maxWidth: 400
    },
    strongText: {
        fontFamily: 'Nunito-ExtraBold',
        color: colors.primary,
    }
});