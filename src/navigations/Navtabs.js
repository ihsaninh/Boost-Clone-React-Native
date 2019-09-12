import React from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from 'react-navigation'
import { Icon } from "react-native-elements";
import Colors from "../library/utils/Colors";
import Home from "../screens/Home/Home";
import BoostSpot from "../screens/BoostSpot";
import Login from "../screens/Login";

const BottomTabs = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: "Home",
        tabBarIcon: ({ focused }) => (
          <Icon
            name="home"
            type="antdesign"
            size={25}
            color={focused ? Colors.primary : Colors.secondary}
          />
        )
      }
    },
    Store: {
      screen: createStackNavigator({
        BoostSpot: {
            screen: BoostSpot,
            navigationOptions: { gesturesEnabled: true}
        }
      }),
      navigationOptions: {
        title: "Boost Spot",
        tabBarIcon: ({ focused }) => (
          <Icon
            name="store"
            type="material"
            size={25}
            color={focused ? Colors.primary : Colors.secondary}
          />
        )
      }
    },
    Boost: {
      screen: createStackNavigator({
        Login: {
            screen: Login,
            navigationOptions: { gesturesEnabled: true}
        }
      }),
      navigationOptions: {
        title: "",
        tabBarIcon: () => (
          <View
            style={styles.centerTabButton}
          >
            <Icon
              name="heart"
              type="feather"
              size={28}
              color={Colors.white}
              iconStyle={styles.centerTabButtonIcon}
            />
          </View>
        )
      }
    },
    Deals: {
      screen: createStackNavigator({
        Login: {
            screen: Login,
            navigationOptions: { gesturesEnabled: true}
        }
      }),
      navigationOptions: {
        title: "My Deals",
        tabBarIcon: ({ focused }) => (
          <Icon
            name="ticket-percent"
            type="material-community"
            size={25}
            color={focused ? Colors.secondary : Colors.secondary}
          />
        )
      }
    },
    Profile: {
      screen: createStackNavigator({
        Login: {
            screen: Login,
            navigationOptions: { gesturesEnabled: true}
        }
      }),
      navigationOptions: {
        title: "Profile",
        tabBarIcon: ({ focused }) => (
          <Icon
            name="user-circle-o"
            type="font-awesome"
            size={23}
            color={focused ? Colors.secondary : Colors.secondary}
          />
        )
      }
    }
  },
  {
    initialRouteName: "Home",
    tabBarOptions: {
      activeTintColor: Colors.secondary,
      inactiveTintColor: Colors.secondary,
      labelStyle: {
        fontFamily: 'Raleway-Regular',
        marginTop: -5
      }
    },
    barStyle: { backgroundColor: "#fff"}
  }
);

const styles = StyleSheet.create({
  centerTabButton: {
    marginTop: -10,
    backgroundColor: Colors.primary,
    borderRadius: 50,
    height: 60,
    width: 60
  },
  centerTabButtonIcon: {
    marginTop: 15, 
    transform: [{ rotate: "50deg" }]
  }
})

export default BottomTabs;