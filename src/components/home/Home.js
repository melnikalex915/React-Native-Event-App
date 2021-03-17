import React, { Component } from 'react';
import { StyleSheet, Text, StatusBar, View, TouchableOpacity, 
	Image, ImageBackground, BackHandler, TouchableHighlight } from 'react-native';

import Logo from '../Logo.js';
import BottomImage from '../BottomImage';
import Hide from '../Hide';


export default class Home extends Component {
	static navigationOptions = { header: null, };
	

	constructor(props) {
    super(props);
    this.state = { pressStatus: false };
	}
	
	_onHideUnderlay(){
    this.setState({ pressStatus: false });
  }
  _onShowUnderlay(){
    this.setState({ pressStatus: true });
	}
	
	// === Disable Backbutton === 
	// componentDidMount() {
  //   BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
	// }

	// componentWillUnmount() {
  //   BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  // }
	
	// handleBackPress = () => {
  //   return true;
	// }
	// ============================ 

	
	render() {
	
		return(
			<View style={styles.container}>
				<View style={styles.container1}>
					<Logo />
				</View>

				<View style={styles.container2}>
					<TouchableHighlight onPress={() => this.props.navigation.navigate('Login', {id: 'Catcher'})}
						onHideUnderlay={this._onHideUnderlay.bind(this)}
						onShowUnderlay={this._onShowUnderlay.bind(this)}
						style={ this.state.pressStatus ? styles.button : styles.button }>

						<View style={styles.catcher} imageStyle={{ borderRadius: 5 }}
							source={require('../../images/button-bg.png')}>
						
							<Image style={styles.icon}
									source={require('../../images/photography.png')} />
							<Text style={styles.text}>Catcher</Text>
						</View>
						
					</TouchableHighlight>
					
					<TouchableOpacity onPress={() => this.props.navigation.navigate('Login', {id: 'Subscriber'})}>
						<View style={styles.subscriber}>
							<Image style={styles.icon}
								source={require('../../images/person-group.png')} />
							<Text style={styles.text}>Subscriber</Text> 
						</View>
					</TouchableOpacity>
	
					<TouchableOpacity onPress={() => this.props.navigation.navigate('Login', {id: 'Celebrity'})}>
						<View style={styles.celebrity}>
							<Image style={styles.icon}
									source={require('../../images/star.png')}
									resizeMode="contain" />
							<Text style={styles.text}>Celebrity</Text> 
						</View>
					</TouchableOpacity>
				</View>
	
				<BottomImage />
				
			</View>
	
		)
	}
	
}



const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#ffffff',
	},

	container1: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-end',
				
	},

	container2: {
		flex: 1,
		alignItems: 'stretch',
		marginRight: 35,
		marginLeft: 35,
	},

	catcher: {
		borderWidth: 1,
		padding: 13,
		borderColor: '#1e869f',
		marginBottom: 20,
		borderRadius: 5,
		flexDirection: 'row',
		justifyContent: 'center',
		
		
	},

	catcher1: {
		borderWidth: 1,
		padding: 13,
		borderColor: '#1e869f',
		marginBottom: 20,
		borderRadius: 5,
		flexDirection: 'row',
		justifyContent: 'center',
    backgroundColor: '#2ab5a2',
		
		
	},

	subscriber: {
		borderWidth: 1,
		padding: 15,
		borderColor: '#1e869f',
		alignItems: 'center',
		marginBottom: 20,
		borderRadius: 5,
		flexDirection: 'row',
		justifyContent: 'center',
	},

	celebrity: {
		borderWidth: 1,
		padding: 15,
		borderColor: '#1e869f',
		alignItems: 'center',
		marginBottom: 20,
		borderRadius: 5,
		flexDirection: 'row',
		justifyContent: 'center',
		
	},

	icon: {
		marginRight: 10,
		width: 20, 
		height: 20,
		justifyContent: 'center',
	},

	text: {
		fontSize: 16,
		color: '#1d86a3',
		textAlignVertical: 'center',
	},

	buttonPress: {
    backgroundColor: '#2ab5a2',
    borderRadius: 10,
	},
	
	button: {
		
	}
})