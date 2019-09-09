import React from 'react';
import {
	View,
	StyleSheet
} from 'react-native';

const Section = (props) => {
	return (
	  <View style={styles.sectionContainer}>
	  	{props.children}
	  </View>
	);
}

const styles = StyleSheet.create({
	sectionContainer: {
    marginHorizontal: 20,
    marginTop: 20
  },
});

export default Section;