
import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, 
	Image, TextInput, CheckBox, Keyboard, KeyboardAvoidingView, ImageBackground } from 'react-native';
import { Form, TextValidator } from 'react-native-validator-form';
import BottomImage from '../BottomImage';

export default class SubscriberSignup extends Component {

	static navigationOptions = { header: null, };

	constructor(props) {
    super(props);
    this.state = { 
			name: '',
			email: '',
			password: '',
			confirm_password: '',
			phone: '',
			payment_info: '',
		};

		this.nameChange = this.nameChange.bind(this);
		this.emailChange = this.emailChange.bind(this);
		this.passwordChange = this.passwordChange.bind(this);
		this.confirmPasswordChange = this.confirmPasswordChange.bind(this);
		this.phoneChange = this.phoneChange.bind(this);
		this.paypalLinkChange = this.paypalLinkChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillMount() {
		// custom rule will have name 'isPasswordMatch'
		Form.addValidationRule('isPasswordMatch', (value) => {
				if (value !== this.state.password) {
						return false;
				}
				return true;
		});

		Form.addValidationRule('passwordLength', (value) => {
			if (value.length < 6 && value.length > 0) {
					return false;
			}
			return true;
	});
	}

	nameChange(event) {
			const name = event.nativeEvent.text;
			this.setState({ name });
	}

	emailChange(event) {
		const email = event.nativeEvent.text;
		this.setState({ email });
	}

	passwordChange(event) {
		const password = event.nativeEvent.text;
		this.setState({ password });
	}

	confirmPasswordChange(event) {
		const confirm_password = event.nativeEvent.text;
		this.setState({ confirm_password });
	}

	phoneChange(event) {
		const phone = event.nativeEvent.text;
		this.setState({ phone });
	}

	paypalLinkChange(event) {
		const payment_info = event.nativeEvent.text;
		this.setState({ payment_info });
	}

	submit() {
		// var data = {
		// 	"name": this.state.name,
		// 	"email"   : this.state.email,
		// 	"password": this.state.password,
		// 	"phone": this.state.phone,
		// 	"paypal_link": this.state.paypal_link,
		// }

		console.log('========test========');
	}

	handleSubmit() {
		console.log('========test========');
		
			this.refs.form.submit();
	}
	
	_submit = () => {
		var data = {
			"name": this.state.name,
			"email"   : this.state.email,
			"password": this.state.password,
			"phone": this.state.phone,
			"paypal_link": this.state.payment_info,
		}

		fetch('http://celebritycatcher.com/api/v1/subscriber/signup', {
			 method: 'post',
			 body:  JSON.stringify(data),
			 headers: {
				'Content-Type' : 'application/json',
			 },
		})
		.then((response) =>  response.json())
		.then((responseJson) => {
			
			if(responseJson.status === 200) {
				Keyboard.dismiss();
				 
				this.props.navigation.navigate('SubscriberPhotoCategories');
			} else {
				alert(responseJson.message);
				
			}
		})
		.catch((error) => {
			 console.error(error);
		});
  }

  render() {
		const { name, email, password, confirm_password, phone, paypal_link } = this.state;

		return(
			<View behavior='padding' style={styles.container}>
				
				<KeyboardAvoidingView style={styles.container1}>
					<Form ref="form" onSubmit={this.handleSubmit} >
						<View style={styles.title}>
							<Text style={{color: '#1d829e', fontSize: 24, marginRight: 10}}>Subscriber</Text>
							<Text style={{color: '#34d4a6', fontSize: 24}}>Sign Up</Text>
						</View>
		
						<View style={styles.input}>
							<Image style={{width: 16}}
									source={require('../../images/person.png')} 
									resizeMode="contain" />

							<TextValidator 
								style={styles.textInput}
								name="name"
								label="name"
								validators={['required']}
								errorMessages={['This field is required']}
								placeholder="Name"
								type="text"
								value={name}
								onChange={this.nameChange}
								placeholderTextColor="#3a96bd"
							/>

							{/* <TextInput onChangeText={(text) => this.setState({ name: text })} 
								style={styles.textInput} placeholderTextColor="#3a96bd" underlineColorAndroid='transparent' placeholder="User Name" /> */}
						</View>
		
						<View style={styles.input}>
							<Image style={{width: 16}}
									source={require('../../images/email-icon.png')} 
									resizeMode="contain" />
							
							<TextValidator 
								style={styles.textInput}
								name="email"
								label="email"
								validators={['isEmail', 'required']}
								errorMessages={['Invalid Email', 'This field is required']}
								placeholder="Email"
								type="text"
								keyboardType="email-address"
								value={email}
								onChange={this.emailChange}
								placeholderTextColor="#3a96bd"
								// underlineValidColor='#b9e2f4'
							/>
							
							{/* <TextInput onChangeText={(text) => this.setState({ email: text })} keyboardType='email-address' style={styles.textInput} placeholderTextColor="#3a96bd" underlineColorAndroid='transparent' placeholder="Email" /> */}
						</View>
		
						<View style={styles.input}>
							<Image style={{width: 15}}
									source={require('../../images/mobile-icon.png')} 
									resizeMode="contain" />
							<TextValidator 
								style={styles.textInput}
								name="mobile"
								label="mobile"
								validators={['isNumber', 'required']}
								errorMessages={['Invalid Number', 'This field is required']}
								placeholder="Mobile Number"
								type="text"
								value={phone}
								onChange={this.phoneChange}
								placeholderTextColor="#3a96bd"
							/>
							{/* <TextInput style={styles.textInput} placeholderTextColor="#3a96bd" underlineColorAndroid='transparent' placeholder="Mobile Number" /> */}
						</View>
		
						<View style={styles.input}>
							<Image style={{width: 16}}
									source={require('../../images/key.png')} 
									resizeMode="contain" />
						
							<TextValidator 
								style={styles.textInput}
								name="password"
								label="password"
								validators={['passwordLength', 'required']}
								errorMessages={['More 6 charactors', 'This field is required']}
								placeholder="Password"
								type="text"
								value={password}
								onChange={this.passwordChange}
								placeholderTextColor="#3a96bd"
								secureTextEntry={true}
							/>
							{/* <TextInput onChangeText={(text) => this.setState({ password: text })} style={styles.textInput} placeholder="Password" placeholderTextColor="#3a96bd" underlineColorAndroid='transparent' /> */}
						</View>
		
						<View style={styles.input}>
							<Image style={{width: 16}}
									source={require('../../images/confirm-icon.png')} 
									resizeMode="contain" />
							<TextValidator 
								style={styles.textInput}
								name="confirm"
								label="confirm"
								validators={['isPasswordMatch','required']}
								errorMessages={['Invalid Password', 'This field is required']}
								placeholder="Confirm Password"
								type="text"
								value={confirm_password}
								onChange={this.confirmPasswordChange}
								placeholderTextColor="#3a96bd"
								secureTextEntry={true}
							/>
							{/* <TextInput style={styles.textInput} placeholderTextColor="#3a96bd" underlineColorAndroid='transparent' placeholder="Confirm Password" /> */}
						</View>
		
						<View style={styles.input}>
							<Image style={{width: 16}}
									source={require('../../images/paypal-icon.png')} 
									resizeMode="contain" />
							<TextValidator 
								style={styles.textInput}
								name="paypal"
								label="paypal"
								validators={['required']}
								errorMessages={['This field is required']}
								placeholder="Paypal Link"
								type="text"
								value={paypal_link}
								onChange={this.paypalLinkChange}
								placeholderTextColor="#3a96bd"
							/>
							{/* <TextInput style={styles.textInput} placeholderTextColor="#3a96bd" underlineColorAndroid='transparent' placeholder="Paypal Link" /> */}
						</View>
						
						<ImageBackground style={{marginTop: 15}} imageStyle={{ borderRadius: 5 }}
							source={require('../../images/button-bg.png')}>
							<TouchableOpacity onPress={this._submit} style={styles.signin} >
								<Text style={styles.signinText}>SIGN UP</Text>
							</TouchableOpacity>
						</ImageBackground>
					
						</Form>
		
					</KeyboardAvoidingView>
				
	
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
    flex: 4,
		alignItems: 'stretch',
		marginRight: 35,
		marginLeft: 35,
		marginTop: 35,
	},

	container3 : {
    flex: 1,
	},

	title: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		marginTop: 30,
		marginBottom: 25,
	},

	input: {
		flexDirection: 'row',
		borderColor: '#b9e2f4',
		marginTop: 0,
	},

	textInput: {
		width: 400,
		marginLeft: 10,
		paddingBottom: 15,
		paddingLeft: 40,
		marginLeft: -30,
		fontSize: 12,
		
	},

	signin: {
		justifyContent: 'center',
		borderRadius: 5,
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
	}
	
});


// import React from 'react';
// import { Button, View } from 'react-native';
// import { Form, TextValidator } from 'react-native-validator-form';
 
// export default class CatcherSignup extends React.Component {
 
//     constructor(props) {
// 				super(props);
// 				this.state = {
// 					email: ''
// 				}
				
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
// 		}
		
// 		componentWillMount() {
// 			Form.addValidationRule('passwordLength', (value) => {
// 				if (value.length < 1) {
// 						return false;
// 				}
// 				return true;
// 			});
// 		}
 
//     handleChange(event) {
			
//         const email = event.nativeEvent.text;
// 				this.setState({ email });
//     }
 
//     submit() {
//         console.log('================');
//     }
 
//     handleSubmit() {
// 			// if(!this.state.email) {
// 				console.log('=====', this.refs.form.childs[0]);
				
// 			// }
//     }
 
//     render() {
//         const { email } = this.state;
//         return (
// 					<View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
//             <Form
								
//                 ref="form"
//                 onSubmit={this.handleSubmit}
//             >
//                 <TextValidator
//                     name="email"
//                     label="email"
//                     validators={['isEmail']}
//                     errorMessages={['1']}
//                     placeholder="Your email"
//                     type="text"
// 										// keyboardType="email-address"
//                     value={email}
//                     onChange={this.handleChange}
//                 />
//                 <Button
//                     title="Submit"
//                     onPress={this.handleSubmit}
//                 />
//             </Form>
// 					</View>
//         );
//     }
// }



