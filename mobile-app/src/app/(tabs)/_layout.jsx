import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Octicon from '@expo/vector-icons/Octicons'

import { colors } from "../../theme/theme";

const TabsLayout = () => {
    return (
        <>
            <StatusBar style="dark" />
            <Tabs screenOptions={{
                ...tabBarStyles,
            }}>
                <Tabs.Screen
                    name="index"
                    options={{
                        headerShown: false,
                        title: 'Inicio',
                        tabBarIcon: ({ color, size, focused }) => <Octicon name="home" color={focused ? colors.primary : 'white'} size={size} />,
                    }}
                />
                <Tabs.Screen
                    name="search/index"
                    options={{
                        headerTitle: "Buscar",
                        title: "Buscar",
                        tabBarIcon: ({ color, size, focused }) => <Octicon name="search" color={focused ? colors.primary : 'white'} size={size} />
                    }}
                />
                
            </Tabs>
        </>
    );
};

export default TabsLayout;

const tabBarStyles = {
    tabBarActiveTintColor: colors.primary,
    tabBarStyle: {
        position: 'sticky',
        bottom: 0,
        elevation: 0,
        height: 68,
        backgroundColor: 'black',
        display: 'flex',
        alignItems: 'center',
        paddingBottom: 12,
        borderTopWidth: 1,
        borderTopColor: '#585858'
    },
    tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: "normal",
        color: colors.text,
        fontFamily: 'Nunito-Regular'
    },
    tabBarItemStyle: {
        flex: 0,
        marginHorizontal: 25
    },
}
