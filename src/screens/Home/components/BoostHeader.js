import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { Icon } from "react-native-elements";

const BoostHeader = (props) => {
	const { text } = props;
	return (
		<View style={styles.header}>
	    <Text style={styles.headerGreetingText}>{text}</Text>
	    <Icon name="mail" type="material" size={26} color="#fff" />
	  </View>
	);
}

const styles = StyleSheet.create({
	header: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headerGreetingText: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "Raleway"
  }
});


export default BoostHeader;