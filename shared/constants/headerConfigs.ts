import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

export const defaultHeaderConfig: NativeStackNavigationOptions = {
    headerStyle: {
        backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
};

export const defaultTabConfig: BottomTabNavigationOptions = {
    tabBarShowLabel: false,
};
