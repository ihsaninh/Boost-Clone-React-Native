import AuthLoading from '../screens/AuthLoading';
import Login from "../screens/Login"
import Register from "../screens/Register"
import Navtabs from "./Navtabs"

import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation'

const AppStack = createStackNavigator(
    {
        Navtabs: {
            screen: Navtabs,
            navigationOptions: { gesturesEnabled: true, header: null }
        }
    },
    {
        defaultNavigationOptions: {
            initialRouteName: Navtabs,
            resetOnBlur: true,
        }
    }
);

const AuthStack = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: { gesturesEnabled: true }
        },
        Register: {
            screen: Register,
            navigationOptions: { gesturesEnabled: true}
        }
    },
    {
        defaultNavigationOptions: {
            initialRouteName: Login,
            resetOnBlur: true,
        }
    }
);

const AppContainer = createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoading,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
        resetOnBlur: true,
    }
));

export default createAppContainer(AppContainer);