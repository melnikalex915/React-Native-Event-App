import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, 
	Image, TextInput, CheckBox, ImageBackground } from 'react-native';

import BottomImage from '../BottomImage';
import NavBar, { NavGroup, NavButton, NavButtonText, NavTitle } 
	from 'react-native-nav';


export default class CatcherCreateAuction extends Component {

	static navigationOptions = ({ navigation, navigationOptions }) => ({
	  title: 'Upload Photo',
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

					<View style={styles.input}>
						<TextInput style={styles.textInput} placeholderTextColor="#3a96bd" 
						underlineColorAndroid='transparent' placeholder="Name of Photo" />
					</View>

					<View style={{alignItems: 'center', marginTop: 15}}>
						<View style={styles.upload}>
							<Image style={{width: 50}}
								source={require('../../images/upload-icon-2.png')} 
								resizeMode="contain" />
						</View>
					</View>
					
					<ImageBackground style={{marginTop: 15}}
							source={require('../../images/button-bg.png')}>
						<TouchableOpacity style={styles.button}>
							<Text style={styles.buttonText}>SAVE</Text>
						</TouchableOpacity>
					</ImageBackground>
					
				</View>

				<BottomImage />
			</View>	
		)
	}
}
	

const styles = StyleSheet.create({
  container : {
		backgroundColor : '#ffffff',
    flex: 1,
	},
	
	container1 : {
		flex: 7,
		justifyContent: 'flex-start',
		alignItems: 'stretch',
		marginRight: 35,
		marginLeft: 35,
		paddingTop: 40,
	},

	input: {
		flexDirection: 'row',
		borderWidth: 1,
		borderColor: '#b9e2f4',
		paddingTop: 5,
		paddingRight: 10,
		paddingBottom: 5,
		marginTop: 15,
		justifyContent: 'space-between',
	},

	upload: {
		alignItems: 'center', 
		padding: 30,
		width: 100, 
		justifyContent: 'center',

		borderWidth: 1,
		borderColor: '#b9e2f4',
	},

	textInput: {
		width: 200,
		marginLeft: 10,
	},

	button: {
		justifyContent: 'center',
		borderRadius: 10,
	},

	buttonText: {
		textAlign: 'center',
		fontSize: 20,
		paddingBottom: 10,
		paddingTop: 10,
		color: 'white',
  
	},

});
