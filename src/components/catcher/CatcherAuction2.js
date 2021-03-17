import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, 
	Image, TextInput, CheckBox, ImageBackground } from 'react-native';

import BottomImage2 from '../BottomImage2';


export default class CatcherAuction2 extends Component {

	static navigationOptions = ({ navigation, navigationOptions }) => ({
	  title: 'Auction',
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
					<TouchableOpacity style={styles.item} 
						onPress={() => this.props.navigation.navigate('CatcherPhotoPrice')}>
						<View style={styles.itemTop}>
							<View style={styles.itemLeft}>
								<Image style={styles.photo}
										source={require('../../images/carter.png')} />
								<Text style={styles.itemLeftText}>Auction Name</Text>
							</View>

							<Text style={styles.itemRightText}>$165</Text>
						</View>

						<ImageBackground style={{zIndex: 1}} resizeMode='stretch'
								source={require('../../images/auction-item-bottom-bg.png')}	>
							<View style={styles.itemBottom}>
								
									<Text style={styles.itemBottomText}>Keyword 1. Keyword 2. Keyword 3. Keyword 4.</Text>
							</View>
						</ImageBackground>
					</TouchableOpacity>

					<TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate('CatcherPhotoPrice')}>
						<View style={styles.itemTop}>
							<View style={styles.itemLeft}>
								<Image style={styles.photo}
										source={require('../../images/carter.png')} />
								<Text style={styles.itemLeftText}>Auction Name</Text>
							</View>

							<Text style={styles.itemRightText}>$165</Text>
						</View>

						<ImageBackground style={{zIndex: 1}} resizeMode='stretch'
								source={require('../../images/auction-item-bottom-bg.png')}	>
							<View style={styles.itemBottom}>
								
									<Text style={styles.itemBottomText}>Keyword 1. Keyword 2. Keyword 3. Keyword 4.</Text>
							</View>
						</ImageBackground>
					</TouchableOpacity>

					<TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate('CatcherPhotoPrice')}>
						<View style={styles.itemTop}>
							<View style={styles.itemLeft}>
								<Image style={styles.photo}
										source={require('../../images/carter.png')} />
								<Text style={styles.itemLeftText}>Auction Name</Text>
							</View>

							<Text style={styles.itemRightText}>$165</Text>
						</View>

						<ImageBackground style={{zIndex: 1}} resizeMode='stretch'
								source={require('../../images/auction-item-bottom-bg.png')}	>
							<View style={styles.itemBottom}>
								
									<Text style={styles.itemBottomText}>Keyword 1. Keyword 2. Keyword 3. Keyword 4.</Text>
							</View>
						</ImageBackground>
					</TouchableOpacity>

					<TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate('CatcherPhotoPrice')}>
						<View style={styles.itemTop}>
							<View style={styles.itemLeft}>
								<Image style={styles.photo}
										source={require('../../images/carter.png')} />
								<Text style={styles.itemLeftText}>Auction Name</Text>
							</View>

							<Text style={styles.itemRightText}>$165</Text>
						</View>

						<ImageBackground style={{zIndex: 1}} resizeMode='stretch'
								source={require('../../images/auction-item-bottom-bg.png')}	>
							<View style={styles.itemBottom}>
								
									<Text style={styles.itemBottomText}>Keyword 1. Keyword 2. Keyword 3. Keyword 4.</Text>
							</View>
						</ImageBackground>
					</TouchableOpacity>
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
		flex: 7,
	},
	
	item : {
		justifyContent: 'flex-start',
		alignItems: 'stretch',
		marginLeft: 35,
		marginRight: 35,
		marginTop: 20,
		borderRadius: 5,
		borderWidth: 1,	
		borderColor: '#ccf1fa',
	},

	itemTop: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 20,
		paddingBottom: 10,
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
		width: 40,
		height: 40,
		marginTop: -10,
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
