import { Tabs } from "expo-router";

import { tabs } from "@/components/constants/data";
import { icons } from "@/components/constants/icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TabLayout = () => {
    const insets = useSafeAreaInsets();

    const TabIcon = ({ name, focused }: { name: string, focused: boolean }) => {
        const Icon = icons[name as keyof typeof icons];
        return <Icon size={24} color={focused ? "black" : "gray"} className="w-6 h-6" />;
    };

    return (
        <Tabs screenOptions={{ 
            headerShown: false, 
            tabBarShowLabel: false,
            tabBarStyle: {
                position: "absolute",
                backgroundColor: "white",
                borderTopWidth: 1,
                borderTopColor: "gray",
                paddingTop: 10,
                paddingBottom: 10,
                paddingHorizontal: 20,
            }
        }}>
            {tabs.map((tab, index) => (
                <Tabs.Screen 
                    key={`tab-${index}`} 
                    name={tab.name} 
                    options={{ 
                        title: tab.title, 
                        href: tab.name as any, 
                        tabBarIcon: ({ color, size, focused }) => <TabIcon name={tab.icon} focused={focused} /> 
                    }} />
            ))}
        </Tabs>
    );
};

export default TabLayout;