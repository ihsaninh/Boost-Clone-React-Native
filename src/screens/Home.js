import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, StatusBar, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import Bg from '../assets/img/bg.png';

const Home = (props) => {
	return (
		<View style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<ImageBackground source={Bg} style={styles.imageBackground}>
					<StatusBar backgroundColor="#C6251C" barStyle="light-content" />
					<View style={styles.content}>

						{/*boostheader*/}
						<View style={styles.header}>
							<Text style={styles.headerGreetingText}>Hello, Booster</Text>
							<Icon name="mail" type='material' size={26} color='#fff' />
						</View>

						{/*cardcash*/}
						<View style={styles.cardContainer}>
							<View style={{ flexDirection: 'row', position: 'relative' }}>
								<View style={{ flexDirection: 'column', marginTop: 50, marginLeft: 20 }}>
									<Text style={{ color: '#757375', fontSize: 18 }}>BoostCash</Text>
									<Text style={{ color: '#0A8689', fontSize: 18 }}>CheckNow</Text>
								</View>
								<View style={{ position: 'absolute', right: 0 }}>
									<Image source={require('../assets/img/people.jpg')} style={{ width: 150, height: 150 }} />
								</View>
							</View>
						</View>

						{/*boostmore card*/}
						<View style={{ marginTop: 20 }}>
							<Text style={{ fontSize: 18 }}>BoostMore</Text>
						</View>
						<View style={{ height: 80, width: '100%', elevation: 1, backgroundColor: '#fff', marginTop: 20, borderRadius: 5 }}>
							<View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 15 }}>
								<View style={{ flex: 1, alignItems: 'center' }}>
									<Image style={{ height: 40, width: 40 }} source={require('../assets/img/reward.jpg')} />
									<Text style={{ color: '#797779', fontSize: 12 }}>Get Lucky</Text>
								</View>
								<View style={{ flex: 1, alignItems: 'center' }}>
									<Image style={{ height: 40, width: 40 }} source={require('../assets/img/invite.jpg')} />
									<Text style={{ color: '#797779', fontSize: 12 }}>Invite</Text>
								</View>
								<View style={{ flex: 1, alignItems: 'center' }}>
									<Image style={{ height: 40, width: 40 }} source={require('../assets/img/medicall.jpg')} />
									<Text style={{ color: '#797779', fontSize: 12 }}>MediCall</Text>
								</View>
								<View style={{ flex: 1, alignItems: 'center' }}>
									<Image style={{ height: 40, width: 40 }} source={require('../assets/img/boostquest.jpg')} />
									<Text style={{ color: '#797779', fontSize: 12 }}>BoostQuest</Text>
								</View>
							</View>
						</View>

						{/*Divider*/}
						<View style={{ height: 1, backgroundColor: '#E1DFE1', marginTop: 20 }} />

						{/*banner*/}
						<View style={{ marginTop: 20 }}>
							<Image source={require('../assets/img/banner.jpg')} style={{ width: '100%', height: 150 }} />
						</View>

						{/*banner2*/}
						<View style={{ marginTop: 20 }}>
							<Text style={{ fontSize: 18, fontWeight: '700' }}>BOOST TIPS & INFO</Text>
							<Text style={{ fontSize: 16 }}>Banyak Tips dan info menarik disini!</Text>
						</View>

						{/*banner3*/}
						<View style={{ marginTop: 20 }}>
							<Image source={require('../assets/img/fakta-kopi.jpg')} style={{ width: '100%', height: 150 }} />
						</View>

					</View>
				</ImageBackground>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	imageBackground: {
		width: '100%',
		height: '100%',
	},
	content: {
		marginHorizontal: 20,
		flex: 1,
		marginBottom: 10
	},
	header: {
		marginTop: 20,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	headerGreetingText: {
		fontSize: 23,
		fontWeight: 'bold',
		color: '#fff',
	},
	cardContainer: {
		height: 150,
		width: '100%',
		elevation: 1,
		backgroundColor: '#fff',
		marginTop: 35,
		borderRadius: 5
	}
})

export default Home;