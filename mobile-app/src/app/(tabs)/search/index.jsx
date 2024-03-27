import { View, Text } from 'react-native'
import { colors } from '../../../theme/theme'
export default function SearchScreen() {
    return (
        <View style={{ flex: 1, backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'white'}}>Search</Text>
        </View>
    )
}