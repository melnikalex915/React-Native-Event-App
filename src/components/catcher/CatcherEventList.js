import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, 
	Image, TextInput, CheckBox, ImageBackground } from 'react-native';
import { Calendar, CalendarList, Agenda, } from 'react-native-calendars';
import BottomImage2 from '../BottomImage2';
import NavBar, { NavGroup, NavButton, NavButtonText, NavTitle } 
	from 'react-native-nav';


export default class CatcherEventList extends Component {

	static navigationOptions = ({ navigation, navigationOptions }) => ({
	  title: 'Event List',
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
					<Image style={styles.bg}
						source={require('../../images/events-top-bg.png')}
						 />
						
					<View style={styles.calendarView}>
						
						<TouchableOpacity onPress={() => this.props.navigation.navigate('CatcherFindEvent')}>
							<View style={styles.findButton}>
								<Image style={styles.findImage}
										source={require('../../images/find-icon.png')} />
								<Text style={styles.findEventsText}>Find Events</Text>
							</View>
						</TouchableOpacity>
						
						
						<Calendar style={styles.styleCalendar}
							theme={{
								arrowColor: 'white',
								backgroundColor: '#ffffff',
								calendarBackground: '#ffffff',
								textSectionTitleColor: '#b6c1cd',
								selectedDayBackgroundColor: '#00adf5',
								selectedDayTextColor: '#ffffff',
								todayTextColor: '#00adf5',
								margin: 0,
								dayTextColor: '#2d4150',
								textDisabledColor: '#d9e1e8',
								dotColor: '#00adf5',
								selectedDotColor: '#ffffff',
								arrowColor: 'orange',
								monthTextColor: 'blue',
								textDayFontFamily: 'monospace',
								textMonthFontFamily: 'monospace',
								textDayHeaderFontFamily: 'monospace',
								textMonthFontWeight: 'bold',
								textDayFontSize: 12,
								textMonthFontSize: 12,
								textDayHeaderFontSize: 12,
								'stylesheet.calendar.header': {
									week: {
										padding: 1,
										flexDirection: 'row',
										justifyContent: 'space-between'
									}
								}
							}}
 							// Initially visible month. Default = Date()
							current={'2018-07-01'}
							// Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
							minDate={'2012-05-10'}
							// Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
							maxDate={'2052-05-30'}
							// Handler which gets executed on day press. Default = undefined
							onDayPress={(day) => {console.log('selected day', day)}}
							// Handler which gets executed on day long press. Default = undefined
							onDayLongPress={(day) => {console.log('selected day', day)}}
							// Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
							monthFormat={'MMM yyyy'}
							// Handler which gets executed when visible month changes in calendar. Default = undefined
							onMonthChange={(month) => {console.log('month changed', month)}}
							// Hide month navigation arrows. Default = false
							// hideArrows={true}
							// Replace default arrows with custom ones (direction can be 'left' or 'right')
							// renderArrow={(direction) => (<Arrow />)}
							// Do not show days of other months in month page. Default = false
							// hideExtraDays={true}
							// If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
							// day from another month that is visible in calendar page. Default = false
							disableMonthChange={true}
							// If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
							firstDay={1}
							// Hide day names. Default = false
							// hideDayNames={true}
							// Show week numbers to the left. Default = false
							// showWeekNumbers={true}
							// Handler which gets executed when press arrow icon left. It receive a callback can go back month
							onPressArrowLeft={substractMonth => substractMonth()}
							// Handler which gets executed when press arrow icon left. It receive a callback can go next month
							onPressArrowRight={addMonth => addMonth()}
						/>
					</View>	

					<TouchableOpacity onPress={() => this.props.navigation.navigate('CatcherEventDetail')}>
						<View style={styles.item}>
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
							
						</View>
					</TouchableOpacity>	
					

					<View style={styles.item}>
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

						<ImageBackground style={{zIndex: 1}} resizeMode='stretch'
								source={require('../../images/auction-item-bottom-bg.png')}	>
							<View style={styles.itemBottom}>
								
									<Text style={styles.itemBottomText}>Keyword 1. Keyword 2. Keyword 3. Keyword 4.</Text>
							</View>
						</ImageBackground>
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

						<ImageBackground style={{zIndex: 1}} resizeMode='stretch'
								source={require('../../images/auction-item-bottom-bg.png')}	>
							<View style={styles.itemBottom}>
								
									<Text style={styles.itemBottomText}>Keyword 1. Keyword 2. Keyword 3. Keyword 4.</Text>
							</View>
						</ImageBackground>
					</View>	
				</View>
				
				{/* <View style={styles.container2}>
					
				</View> */}

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
		flex: 2,
	},

	container2: {
		flex: 1,
		position: 'relative',
	},

	bg: {
		height: 170,
		width: 430,
	},

	calendarView: {
		alignItems: 'center',
		marginTop: -150,
	},

	styleCalendar: {
		width: 250,
		borderColor: '#afafaf',
		borderWidth: 1,
		shadowColor: '#cccccc',
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

	findButton: {
		flexDirection: 'row',
		justifyContent: 'center',
		backgroundColor: '#2ca6cf',
		borderRadius: 3,
		paddingTop: 5,
		paddingBottom: 5,
		paddingRight: 15,
		paddingLeft: 15,
		marginBottom: 20,
	},

	findEventsText: {
		color: 'white',
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

	findImage: {
		marginRight: 5,
		width: 17,
		height: 17,
	},

	itemBottom: {
		paddingTop: 5,
		paddingBottom: 5,
		alignItems: 'center',
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5,
	},
	
	itemBottomText: {
		color: 'white',
		fontSize: 12,
	}

	
});
