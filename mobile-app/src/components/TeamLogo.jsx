
import { View, Text, Image } from 'react-native'
import { colors } from '../theme/theme'
import { LinearGradient } from 'expo-linear-gradient'

export const logos = [
    {
        name: 'america',
        image: require('../assets/america-fc.png'),
    },
    {
        name: 'cincinnati',
        image: require('../assets/cincinnati-fc.png'),
    },
    {
        name: 'colocolo',
        image: require('../assets/colocolo-fc.png'),
    },
    {
        name: 'godoy-cruz',
        image: require('../assets/godoy-cruz-fc.png'),
    },
    {
        name: 'monterrey',
        image: require('../assets/monterrey-fc.png'),
    },
    {
        name: 'nacional',
        image: require('../assets/nacional-fc.png'),
    },
    {
        name: 'olympiacos',
        image: require('../assets/olympiacos-fc.png'),
    },
    {
        name: 'penarol',
        image: require('../assets/penarol-fc.png'),
    },
    {
        name: 'portland',
        image: require('../assets/portland-fc.png'),
    },
    {
        name: 'rslake',
        image: require('../assets/rslake-fc.png'),
    },
    {
        name: 'toluca',
        image: require('../assets/toluca-fc.png'),
    },
    {
        name: 'universitario',
        image: require('../assets/universitario-fc.png'),
    },
];

export const TeamLogo = ({ name }) => {

    const getLogo = (name) => {
        const found = logos.find(element => element.name === name);
        return found ? found.image : null;
    }

    const teamLogo = getLogo(name);

    return (
        <LinearGradient start={{ x: -0.2, y: 0 }} end={{ x: 2.5, y: 0 }} colors={[colors.secondary, 'black']} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 80, height: 80, borderRadius: 100 }}>
            <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 78, height: 78, borderRadius: 100, backgroundColor: 'black' }}>
                <Image
                    width={56}
                    height={56}
                    source={teamLogo}
                />
            </View>
        </LinearGradient>
    )
}