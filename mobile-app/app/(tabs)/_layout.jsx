import { Tabs } from "expo-router";

const TabsLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="search/index"
                options={{
                    headerTitle: "Search",
                    title: "Search",
                }}
            />
        </Tabs>
    );
};

export default TabsLayout;
