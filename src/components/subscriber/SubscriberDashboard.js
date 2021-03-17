import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, 
	Image, ImageBackground, TextInput, NavigationBar, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import BottomImage2 from '../BottomImage2';
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph } 
	from 'react-native-chart-kit';
import NavBar, { NavGroup, NavButton, NavButtonText, NavTitle } 
	from 'react-native-nav';

export default class CatcherDashboard extends Component {

	static navigationOptions = ({ navigation, navigationOptions }) => ({
	  title: 'Dashboard',
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

				<Text style={{marginBottom: 10, textAlign: 'center', marginTop: 20}}>
					Sales Report
				</Text>

				<View style={{flexDirection: 'row', justifyContent: 'flex-end', marginRight: 25}}>
					<ImageBackground style={{marginRight: 10}}
								source={require('../../images/button-bg-4.png')}
								resizeMode='stretch' >
						<TouchableOpacity style={{justifyContent: 'center', paddingLeft: 15, paddingRight: 15, paddingTop: 5, paddingBottom: 5,}}>
							<Text style={{color: 'white', fontSize: 12}}>Day</Text>
						</TouchableOpacity>
					</ImageBackground>

					<TouchableOpacity style={{marginRight: 10, paddingTop: 5, paddingBottom: 5,}}>
						<Text style={{color: '#868686', fontSize: 12,}}>Week</Text>
					</TouchableOpacity>

					<TouchableOpacity style={{marginRight: 10, paddingTop: 5, paddingBottom: 5,}}>
						<Text style={{color: '#868686', fontSize: 12}}>Month</Text>
					</TouchableOpacity>
				</View>


				<View style={styles.chart}>
					<LineChart
						data={{
							labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
							datasets: [{
								data: [
									Math.random() * 100,
									Math.random() * 100,
									Math.random() * 100,
									Math.random() * 100,
									Math.random() * 100,
									Math.random() * 100
								]
							}]
						}}
						width={Dimensions.get('window').width - 50} // from react-native
						height={170}
						chartConfig={{
							backgroundColor: '#ffffff',
							backgroundGradientFrom: '#ffffff',
							backgroundGradientTo: '#ffffff',
							color: (opacity = 1) => `rgba(134, 134, 134, ${opacity})`,
							style: {
								borderRadius: 0
							}
						}}
						bezier
						style={{
							marginVertical: 8,
							borderRadius: 0,
						}}
					/>
				</View>

				<View style={styles.container1}>
					<View style={styles.imageView}>
						<View style={styles.block}>
							<Text style={{color: 'white', fontSize: 12}}>Revenue</Text>
							<Text style={{color: 'white', fontSize: 20, marginTop: 10, marginBottom: 10, fontWeight: 'bold'}}>$20000</Text>
							<Text style={{color: 'white', fontSize: 12}}>January</Text>
						</View>
						
						<View style={styles.block2}>
							<Text style={{color: 'white', fontSize: 12}}>Celebrity Followers</Text>
							<Text style={{color: 'white', fontSize: 20, marginTop: 10, marginBottom: 10, fontWeight: 'bold'}}>$20000</Text>
							<Text style={{color: 'white', fontSize: 12}}>January</Text>
						</View>

					</View>

					<View style={styles.imageView}>
						<View style={styles.block3}>
							<Text style={{color: 'white', fontSize: 12}}>Subscriber Followers</Text>
							<Text style={{color: 'white', fontSize: 20, marginTop: 10, marginBottom: 10, fontWeight: 'bold'}}>$20000</Text>
							<Text style={{color: 'white', fontSize: 12}}>January</Text>
						</View>

						<View style={styles.block4}>
							<Text style={{color: 'white', fontSize: 12}}>Catcher Followers</Text>
							<Text style={{color: 'white', fontSize: 20, marginTop: 10, marginBottom: 10, fontWeight: 'bold'}}>$20000</Text>
							<Text style={{color: 'white', fontSize: 12}}>January</Text>
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
	},

	container1: {
		flex: 5,
		alignItems: 'stretch',
		paddingTop: 15,
		paddingLeft: 20,
		paddingRight: 20,
	},

	chart: {
		alignItems: 'center',
		paddingLeft: 20,
		paddingRight: 20,
	},

	imageView: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		marginBottom: 20,
		
	},

	block: {
		borderRadius: 5, 
		backgroundColor: '#ff9373', 
		paddingTop: 10, paddingLeft: 15, 
		paddingRight: 15, 
		paddingBottom: 20,
		width: Dimensions.get('window').width / 2 - 40,
	},

	block2: {
		borderRadius: 5, 
		backgroundColor: '#59d4fc', 
		paddingTop: 10, paddingLeft: 15, 
		paddingRight: 15, 
		paddingBottom: 20,
		width: Dimensions.get('window').width / 2 - 40,
	},

	block3: {
		borderRadius: 5, 
		backgroundColor: '#916fca', 
		paddingTop: 10, paddingLeft: 15, 
		paddingRight: 15, 
		paddingBottom: 20,
		width: Dimensions.get('window').width / 2 - 40,
	},

	block4: {
		borderRadius: 5, 
		backgroundColor: '#41c5b9', 
		paddingTop: 10, paddingLeft: 15, 
		paddingRight: 15, 
		paddingBottom: 20,
		width: Dimensions.get('window').width / 2 - 40,
	},

	personImage: {
		width: 165,
		height: 150,
		borderWidth: 0,
		borderColor: '#edecea',
		borderRadius: 52,
		marginBottom: 10,
		backgroundColor: '#1e94b3',
		
	},

	optionImage: {
		width: 40,
		height: 30,
	},

	personImageContent: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 150, 
		opacity: 0.8, 
		backgroundColor: '#1e94b3'
	},

	itemCenterImage: {
		width: 80,
		height: 80,
		borderRadius: 45,
		borderWidth: 3,
		borderColor: '#ffffff',
		marginBottom: 15,
		marginTop: 10,		
	}


	
});

const chartConfig = {
	backgroundColor: '#ffffff',
  backgroundGradientFrom: '#1E2923',
  backgroundGradientTo: '#08130D',
  color: (opacity = 1) => 'rgba(26, 255, 146, ${opacity})'
}
