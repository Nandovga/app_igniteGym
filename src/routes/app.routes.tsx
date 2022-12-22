import {Platform} from "react-native";
import {createBottomTabNavigator, BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import {useTheme} from "native-base";

import HomeSvg from "@assets/home.svg"
import HistotySvg from "@assets/history.svg"
import ProfileSvg from "@assets/profile.svg"

import {Home} from "@screens/Home";
import {Profile} from "@screens/Profile";
import {History} from "@screens/History";
import {Exercise} from "@screens/Exercise";

type AppRoutes = {
    home: undefined,
    history: undefined,
    exercise: undefined,
    profile: undefined
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;
const {Navigator, Screen} = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
    const {sizes, colors} = useTheme()
    const iconSize = sizes["6"]

    return (
        <Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarInactiveTintColor: colors.gray["200"],
            tabBarActiveTintColor: colors.green["500"],
            tabBarStyle: {
                backgroundColor: colors.gray["600"],
                borderTopWidth: 0,
                height: Platform.OS === "android" ? "auto" : 96,
                paddingBottom: sizes["8"],
                paddingTop: sizes["6"]
            }
        }}>
            <Screen name="home"
                    component={Home}
                    options={{
                        tabBarIcon: ({color}) => <HomeSvg fill={color}
                                                          width={iconSize}
                                                          height={iconSize}/>
                    }}/>
            <Screen name="history"
                    component={History}
                    options={{
                        tabBarIcon: ({color}) => <HistotySvg fill={color}
                                                             width={iconSize}
                                                             height={iconSize}/>
                    }}/>
            <Screen name="profile"
                    component={Profile}
                    options={{
                        tabBarIcon: ({color}) => <ProfileSvg fill={color}
                                                             width={iconSize}
                                                             height={iconSize}/>
                    }}/>
            <Screen name="exercise"
                    component={Exercise}
                    options={{
                        tabBarButton: () => null
                    }}/>
        </Navigator>
    );
}
