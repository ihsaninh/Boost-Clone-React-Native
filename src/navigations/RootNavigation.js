import AuthLoading from '../screens/AuthLoading';
import Login from "../screens/Login"
import Navtabs from "../screens/Navtabs"

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
            navigationOptions: { gesturesEnabled: true, header: null }
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
        Auth: AuthStack,
        App: AppStack,
    },
    {
        initialRouteName: 'App',
        resetOnBlur: true,
    }
));

export default createAppContainer(AppContainer);