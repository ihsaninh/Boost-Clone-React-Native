import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements';
import Home from './Home'; 

class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const BottomTabs = createBottomTabNavigator({
  Home: {
        screen: Home,
        navigationOptions: {
            title: "Home",
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon
                    name="home"
                    type='antdesign'
                    size={25}
                    color={focused ? '#EF3026' : '#A7A5A7'}
                />
            )
        }
    },
    Store: {
        screen: SettingsScreen,
        navigationOptions: {
          title: 'Boost Spot',
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon
                    name="store"
                    type='material'
                    size={25}
                    color={focused ? '#EF3026' : '#A7A5A7'}
                />
            )
        }
    },
    Settings: {
        screen: SettingsScreen,
        navigationOptions: {
          title: '',
            tabBarIcon: ({ tintColor, focused }) => (
              <View style={{marginTop: -10, backgroundColor: 'red', borderRadius: 50, height: 60, width: 60}}>
                <Icon
                    name="heart"
                    type='feather'
                    size={28}
                    color={'#fff'}
                    iconStyle={{marginTop: 15, transform: [{ rotate: '50deg'}]}}
                />
              </View>
            )
        }
    },
    Deals: {
        screen: SettingsScreen,
        navigationOptions: {
          title: 'My Deals',
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon
                    name="ticket-percent"
                    type='material-community'
                    size={25}
                    color={focused ? '#EF3026' : '#A7A5A7'}
                />
            )
        }
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            title: "Profile",
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon
                    name="user-circle-o"
                    type='font-awesome'
                    size={23}
                    color={focused ? '#EF3026' : '#A7A5A7'}
                />
            )
        }
    },
}, {
      initialRouteName: 'Home',
      tabBarOptions: {
        activeTintColor: '#EF3026', 
        inactiveTintColor: "#A7A5A7",
      },
      barStyle: { backgroundColor: '#fff' },
});

export default BottomTabs;