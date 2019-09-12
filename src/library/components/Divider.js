import React from 'react';
import {
	View,
	StyleSheet
} from 'react-native';

const Section = props => {
	return (
	  <View style={styles.divider} />
	);
}

const styles = StyleSheet.create({
	divider: {
	  height: 1,
	  backgroundColor: "#E1DFE1",
	  marginTop: 20,
	  marginHorizontal: 20
  },
});

export default Section;