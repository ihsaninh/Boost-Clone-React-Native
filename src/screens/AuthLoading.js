import React, { Component } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";
import splashImage from "../assets/img/splash-screen.jpg";

class AuthLoading extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate("Home");
    }, 1000);
  }
  render() {
    return (
      <ImageBackground
        source={splashImage}
        style={styles.imageStyle}
      />
    );
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    width: "100%", 
    height: "100%" 
  }
})

export default withNavigation(AuthLoading);
