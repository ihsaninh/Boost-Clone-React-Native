import React from "react";
import { Text, View, StatusBar } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from 'react-navigation'
import { Icon } from "react-native-elements";
import Home from "../screens/Home/Home";
import BoostSpot from "../screens/BoostSpot";

const BottomTabs = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: "Home",
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name="home"
            type="antdesign"
            size={25}
            color={focused ? "#EF3026" : "#A7A5A7"}
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
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name="store"
            type="material"
            size={25}
            color={focused ? "#EF3026" : "#A7A5A7"}
          />
        )
      }
    },
    Boost: {
      screen: BoostSpot,
      navigationOptions: {
        title: "",
        tabBarIcon: ({ tintColor, focused }) => (
          <View
            style={{
              marginTop: -10,
              backgroundColor: "red",
              borderRadius: 50,
              height: 60,
              width: 60
            }}
          >
            <Icon
              name="heart"
              type="feather"
              size={28}
              color={"#fff"}
              iconStyle={{ marginTop: 15, transform: [{ rotate: "50deg" }] }}
            />
          </View>
        )
      }
    },
    Deals: {
      screen: BoostSpot,
      navigationOptions: {
        title: "My Deals",
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name="ticket-percent"
            type="material-community"
            size={25}
            color={focused ? "#EF3026" : "#A7A5A7"}
          />
        )
      }
    },
    Profile: {
      screen: BoostSpot,
      navigationOptions: {
        title: "Profile",
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name="user-circle-o"
            type="font-awesome"
            size={23}
            color={focused ? "#EF3026" : "#A7A5A7"}
          />
        )
      }
    }
  },
  {
    initialRouteName: "Home",
    tabBarOptions: {
      activeTintColor: "#EF3026",
      inactiveTintColor: "#A7A5A7"
    },
    barStyle: { backgroundColor: "#fff" }
  }
);

export default BottomTabs;
