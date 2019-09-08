import React, { Component } from "react";
import { ImageBackground } from "react-native";
import { withNavigation } from "react-navigation";

class AuthLoading extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate("Home");
    }, 1000);
  }
  render() {
    return (
      <ImageBackground
        source={require("../assets/img/splash-screen.jpg")}
        style={{ width: "100%", height: "100%" }}
      />
    );
  }
}
export default withNavigation(AuthLoading);
