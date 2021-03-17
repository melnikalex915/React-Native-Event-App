import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, 
	Image, TextInput, CheckBox, Keyboard, Dimensions, ImageBackground, BackHandler } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import BottomImage2 from '../BottomImage2';
import Modal from 'react-native-modal';
import NavBar, { NavGroup, NavButton, NavButtonText, NavTitle } 
	from 'react-native-nav';

export default class CatcherDetail extends Component {

	static navigationOptions = ({ navigation, navigationOptions }) => ({
	  title: 'Catcher Profile',
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

	constructor(props) {
    super(props);
    
	}

	
	// _renderButton = (leftText, rightText, onPress) => (
  //   <TouchableOpacity style={styles.styleTouchable} onPress={onPress}>
	// 		<Text style={styles.textInput}>{leftText}</Text>
	// 		<Text style={styles.textInput}>{rightText}</Text>
  //   </TouchableOpacity>
	// );
	
	// _goToCatcherAuction = () => {
	// 	this.setState({ visibleModal: null });
	// 	Actions.catcher_auction()
	// }

  // _renderModalContent = () => (
  
	// ); 
	


	render() {
		
		return(
			<View style={styles.container}>
				{/* <Modal
					isVisible={this.state.visibleModal === 3}
					animationIn={'slideInLeft'}
					animationOut={'slideOutLeft'}>
						{this._renderModalContent()}
				</Modal> */}
				
				<View style={styles.container1}>
					<View style={styles.name}>
						<Text style={{color: 'white', fontSize: 16,fontWeight: 'bold', alignItems: 'flex-start'}}>John Carter</Text>
					</View>

					<View style={styles.location}>
						<Image style={{width: 10, height: 10, marginRight: 5, marginTop: 2}}
								source={require('../../images/location-icon.png')} 
								resizeMode="contain" />
						<Text style={{color: 'white', fontSize: 10}}>Arizona United States</Text>
					</View>
				</View>

				<View style={styles.container2}>

					<View style={styles.photoView}>
						<Image style={styles.photo}
								source={require('../../images/carter.png')} 
								/>
					</View>

					<View style={styles.input}>
						<TouchableOpacity style={styles.styleTouchable} onPress={() => this.props.navigation.navigate('CatcherFollowers')}>
							<Text style={styles.textInput}>Followers</Text>
							<Text style={styles.textInput}>222</Text>
						</TouchableOpacity>
					</View>

					<View style={styles.input}>
						{/* {this._renderButton('Following', '222', () => this.setState({ visibleModal: 3 }))} */}
						<TouchableOpacity style={styles.styleTouchable} onPress={() => this.props.navigation.navigate('CatcherFollowing')}>
							<Text style={styles.textInput}>Following</Text>
							<Text style={styles.textInput}>222</Text>
						</TouchableOpacity>
					</View>

					<View style={styles.input}>
					
						<TouchableOpacity style={styles.styleTouchable} onPress={() => this.props.navigation.navigate('CelebrityFollowing')}>
							<Text style={styles.textInput}>Celebrity Followings</Text>
							<Text style={styles.textInput}>222</Text>
						</TouchableOpacity>
					</View>

					<View style={styles.input}>
						<TouchableOpacity style={styles.styleTouchable} onPress={() => this.props.navigation.navigate('CatcherPhotos')}>
							<Text style={styles.textInput}>Photos</Text>
							<Text style={styles.textInput}>222</Text>
						</TouchableOpacity>
					</View>

					<View style={styles.input}>
						<TouchableOpacity style={styles.styleTouchable} onPress={() => this.props.navigation.navigate('ActiveBidPhotos')}>
							<Text style={styles.textInput}>Active Bid Photos</Text>
							<Text style={styles.textInput}>222</Text>
						</TouchableOpacity>
					</View>

					<View style={styles.input}>
						<TouchableOpacity style={styles.styleTouchable} onPress={() => this.props.navigation.navigate('CatcherSoldPhotos')}>
							<Text style={styles.textInput}>Sold Photos</Text>
							<Text style={styles.textInput}>222</Text>
						</TouchableOpacity>
					</View>

					{/* <TouchableOpacity style={styles.signin} >
						<Text style={styles.signinText}>NEXT</Text>
					</TouchableOpacity> */}
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
		padding: 0,
		margin: 0,
	},
	
	container1 : {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#31cba5',
		paddingLeft: 35,
		paddingRight: 35,
		height: 70,
	},

	container2 : {
    flex: 4,
		alignItems: 'stretch',
		marginRight: 35,
		marginLeft: 35,
		marginTop: 40,
	},

	container3 : {
    flex: 1,
	},

	name: {
	},

	photo: {
		borderWidth: 5,
		borderRadius: 50,
		borderColor: '#2293b5',
		width: 75,
		height: 75,
	},

	photoView: {
		alignItems: 'center',
		marginTop: -80,
	},

	location: {
		flexDirection: 'row',
		width: 100,
	},

	title: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		marginTop: 30,
		marginBottom: 25,
	},

	input: {
		borderWidth: 1,
		borderColor: '#b9e2f4',
		paddingBottom: 10,
		paddingTop: 10,
		paddingRight: 25,
		paddingLeft: 25,
		marginTop: 17,
		borderRadius: 25,
	},

	styleTouchable: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		
	},

	textInput: {
		fontSize: 14,
		color: '#1d94b2',
	},

	signin: {
		justifyContent: 'center',
		marginTop: 20,
		backgroundColor: '#29aca4',
		borderRadius: 5,
		marginBottom: 15,
	},

	signinText: {
		textAlign: 'center',
		fontSize: 20,
		paddingBottom: 10,
		paddingTop: 10,
		color: 'white',
  
	},

	remember: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},

	
	checkBox: {
		marginTop: -7,
	},

	or: {
		marginBottom: 15,
		marginTop: 15,
		position: 'relative',
		alignItems: 'center',

	},

	textOr: {
		backgroundColor: '#aae9fa',
		color: 'white',
		borderRadius: 30,
		padding: 7,
		justifyContent: 'center',
		width: 35,
		height: 35,
		marginTop: -20,
	},

	socialLink: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 15,
	},

	facebook: {
		backgroundColor: '#1a4a9f',
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 40,
		paddingLeft: 40,
		borderRadius: 5,
		flexDirection: 'row',
		justifyContent: 'center',
	},

	google: {
		backgroundColor: '#ff4141',
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 23,
		paddingLeft: 23,
		borderRadius: 5,
		flexDirection: 'row',
		justifyContent: 'center',
		
	},

	signup: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},

	modalContent: {
		flex: 1,
    backgroundColor: '#25a1a1',
		borderColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'flex-start',
		// marginRight: 200,
		width: Dimensions.get("window").width * 0.45,
		height: Dimensions.get("window").height,
	},
	
	close: {
		justifyContent: 'flex-end',
	},

	modalTop: {
		alignItems: 'center',
		
	},
	
	modalUnderTop: {
		alignItems: 'stretch',
		marginTop: 15,
	},

	modalItemText: {
		color: 'white',
		fontSize: 14,
	},

	modalItemView: {
		alignItems: 'stretch',
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderColor: '#8ec4d0',
		flexDirection: 'row',
		paddingLeft: 20,
		paddingTop: 5,
		paddingBottom: 5,
	},

	leftArrowImage: {
		width: 50,
		height: 40,
	}
});
