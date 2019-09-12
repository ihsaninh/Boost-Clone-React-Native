import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

const Banner = (props) => {
	const { source, height } = props;
	return (
		<View>
			<Image
		    source={source}
		    style={[styles.bannerStyle, {height: height}]}
		    resizeMode={"stretch"}
		  />
	  </View>
	)
}

const styles = StyleSheet.create({
	bannerStyle: {
		width: "100%", 
		borderRadius: 5
	}
})

export default Banner