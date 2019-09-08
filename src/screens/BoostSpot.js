import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

class BoostSpot extends React.Component {
	static navigationOptions = {
		headerLeft: (
			<View style={{marginLeft: 10}}>
				<Image source={require('../assets/img/boost-logo.jpg')} style={{height: 30, width: 80}}/>
			</View>
		),
		headerRight: (
			<View style={{marginRight: 10}}>
				<Image source={require('../assets/img/spot.jpg')} style={{height: 30, width: 30}}/>
			</View>
		)
	};
  render() {
    return (
      <View style={{ flex: 1}}>
      	<View style={{marginHorizontal: 10}}>
	        <TouchableOpacity
	            style={{
	              borderWidth: 1,
	              borderColor: "#aaa",
	              padding: 10,
	              marginTop: 30,
	              flexDirection: 'row',
	              justifyContent: 'space-between'
	            }}
	          >
	            <Text style={{ color: "#aaa", paddingTop: 3}}>Search Boost Spots</Text>
	            <Icon
				  name='search'
				  type='material'
				  color='#aaa'
				/>
	        </TouchableOpacity>
	     </View>
      </View>
    );
  }
}

export default BoostSpot
