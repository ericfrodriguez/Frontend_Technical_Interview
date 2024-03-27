
import { LinearGradient } from 'expo-linear-gradient'
import { Image } from 'react-native'

const images = [
    {
        name: 'mercadopago',
        image: require('../assets/mercadopago-badge.png'),
    },
    {
        name: 'sanluis',
        image: require('../assets/sanluis-badge.png'),
    },
    {
        name: 'transferball',
        image: require('../assets/transferball-badge.png'),
    },
    {
        name: 'audax',
        image: require('../assets/audax-badge.png'),
    },
    {
        name: 'america',
        image: require('../assets/america-badge.png'),
    },
]

export default function Badge({ imageName, imageStyle, style }) {

    const getImage = (name) => {
        const found = images.find(element => element.name === name);
        return found ? found.image : null;
    }

    const badgeImage = getImage(imageName);

    return (
        <LinearGradient start={{ x: 0.2, y: 0.5 }} colors={['#B6B6B6', 'rgba(182, 182, 182, 0.6)']} style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: 100, ...style }}>
            <Image
                style={{
                    width: 30,
                    height: 20,
                    ...imageStyle,
                }}
                source={badgeImage}
            />
        </LinearGradient>
    )
}