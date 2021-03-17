import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, 
	Image, TextInput, CheckBox } from 'react-native';

import { Actions } from 'react-native-router-flux';
import BottomImage2 from '../BottomImage2';


export default class CatcherPhotoPrice extends Component {

	static navigationOptions = ({ navigation, navigationOptions }) => ({
	  title: 'Photo Price',
	  headerTitleStyle: { 
	    textAlign: 'center', flex: 1, color: 'white', fontSize: 16, fontWeight: 'normal', marginLeft: -35 
	  },
	  headerStyle: {
	    height: 40,
	  },
	  headerBackground: (
	    <Image resizeMode='stretch' style={{}}
	      source={require('../../images/nav-bg-2.png')}
	    />
	  ),
	  headerTintColor: 'white'
	});

	render() {
		return(
			<View style={styles.container}>
				<View style={styles.container1}>
					<Image style={styles.personImage}
										source={require('../../images/person2.png')} />

					<View style={styles.priceDetail}>
						<Text style={styles.price}>$165</Text>
						<Text style={styles.title}>ATHLETES</Text>
						<Text style={styles.range}>$65 - $500 Range</Text>
						<Text style={styles.keyword}>Keyword 1. Keyword 2. Keyword 3. Keyword 4.</Text>
					</View>
				</View>

				<View style={styles.container2}>
					<Text style={styles.bottomTitle}>Biding of Auction</Text>
				
					<View style={styles.item}>
						<View style={styles.itemTop}>
							<View style={styles.itemLeft}>
								<Image style={styles.photo}
										source={require('../../images/carter.png')} />
								<Text style={styles.itemLeftText}>Auction Name</Text>
							</View>

							<Text style={styles.itemRightText}>$165</Text>
						</View>
					</View>

					<View style={styles.item}>
						<View style={styles.itemTop}>
							<View style={styles.itemLeft}>
								<Image style={styles.photo}
										source={require('../../images/carter.png')} />
								<Text style={styles.itemLeftText}>Auction Name</Text>
							</View>

							<Text style={styles.itemRightText}>$165</Text>
						</View>
					</View>

					<View style={styles.item}>
						<View style={styles.itemTop}>
							<View style={styles.itemLeft}>
								<Image style={styles.photo}
										source={require('../../images/carter.png')} />
								<Text style={styles.itemLeftText}>Auction Name</Text>
							</View>

							<Text style={styles.itemRightText}>$165</Text>
						</View>
					</View>
				</View>

				<BottomImage2 />
			</View>	
		)
	}
}
	

const styles = StyleSheet.create({
  container : {
		backgroundColor : '#ffffff',
		flex: 1,
		paddingTop: 15,
	},

	container1: {
		flex: 5,
		alignItems: 'center',
	},

	container2: {
		flex: 4,
	},

	personImage: {
		borderWidth: 5,
		borderColor: 'white',
		borderRadius: 50,	
		width: 100,
		height: 100,
		marginBottom: -50,
		zIndex: 1,
	},

	priceDetail: {
		backgroundColor: '#59d1b6',
		borderRadius: 5,
		width: 270,
		paddingTop: 50,
		paddingBottom: 30,
		alignItems: 'stretch',
	},

	price: {
		textAlign: 'center',
		fontSize: 28,
		marginTop: 10,
		marginBottom: 10,
		color: 'white',
	},

	title: {
		textAlign: 'center',
		fontSize: 16,
		paddingTop: 5,
		paddingBottom: 5,
		fontWeight: 'bold',
		backgroundColor: '#6ec5cc',
		color: 'white',
		
	},

	range: {
		textAlign: 'center',
		fontSize: 16,
		marginTop: 10,
		marginBottom: 10,
		color: 'white',
		
	},

	keyword: {
		textAlign: 'center',
		fontSize: 12,
		paddingLeft: 20,
		paddingRight: 20,
		color: 'white',
		
	},

	bottomTitle: {
		textAlign: 'center',
		fontSize: 16,
		color: '#393939',
		marginTop: 15,
	},
	
	item : {
		justifyContent: 'flex-start',
		alignItems: 'stretch',
		marginLeft: 35,
		marginRight: 35,
		marginTop: 15,
		borderRadius: 5,
		borderWidth: 1,	
		borderColor: '#ccf1fa',
	},

	itemTop: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 15,
		paddingBottom: 5,
	},

	itemLeft: {
		flexDirection: 'row',
		justifyContent: 'center',
	},

	itemLeftText: {
		color: '#4ba9c5'
	},

	itemRightText: {
		color: '#7bd8c6'
	},

	photo: {
		borderRadius: 30,
		marginRight: 15,
		width: 30,
		height: 30,
		marginTop: -5,
	},

	itemBottom: {
		paddingTop: 5,
		paddingBottom: 5,
		alignItems: 'center',
		backgroundColor: '#4792b2',
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5,
	},
	
	itemBottomText: {
		color: 'white',
		fontSize: 12,
	}

	
});
