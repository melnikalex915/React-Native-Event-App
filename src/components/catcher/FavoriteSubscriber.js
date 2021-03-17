import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, 
	Image, TextInput, NavigationBar, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { TabNavigator } from 'react-navigation';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import BottomImage2 from '../BottomImage2';
import NavBar, { NavGroup, NavButton, NavButtonText, NavTitle } 
	from 'react-native-nav';



export default class FavoriteSubscriber extends Component {

	static navigationOptions = ({ navigation, navigationOptions }) => ({
    header: null,
  });


	render() {
		return(

			<View style={styles.container}>
				
				<ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{height: 0}}>
				
					<NavBar style={{paddingTop: 15}}>
						<NavGroup style={styles.navbarMenu}>
							<NavButton onPress={() => this.props.navigation.navigate('Popular')}>
								<NavButtonText>
									{"Popular"}
								</NavButtonText>
							</NavButton>
							<NavButton onPress={() => this.props.navigation.navigate('Latest')}>
								<NavButtonText>
									{"Latest"}
								</NavButtonText>
							</NavButton >
							<NavButton onPress={() => this.props.navigation.navigate('All')}>
								<NavButtonText >
									{"All"}
								</NavButtonText>
							</NavButton>
							<NavButton onPress={() => this.props.navigation.navigate('FavoriteCelebrity')}>
								<NavButtonText>
									{"Favorite Celebrity"}
								</NavButtonText>
							</NavButton>
							<NavButton onPress={() => this.props.navigation.navigate('FavoriteCatcher')}>
								<NavButtonText>
									{"Favorite Catcher"}
								</NavButtonText>
							</NavButton>
							<NavButton onPress={() => this.props.navigation.navigate('FavoriteSubscriber')}>
								<NavButtonText style={{color: '#7dddc2'}}>
									{"Favorite Subscriber"}
								</NavButtonText>
							</NavButton>
							
						</NavGroup>
					</NavBar>
				</ScrollView>

				<View style={styles.container1}>
					<View style={styles.item}>
						<View style={styles.itemTop}>
							<View style={styles.itemLeft}>
								<Image style={{marginRight: -2, marginTop: -5}}
										source={require('../../images/online-icon.png')} />
								<Image style={styles.photo}
										source={require('../../images/carter.png')} />
								<View style={{marginTop: -5,}}>
									<Text style={styles.itemLeftText}>Jhon Doe</Text>
									<View style={{flexDirection: 'row',}}>
										<Image style={{width: 10, height: 10, marginRight: 5, marginTop: 3,}}
											source={require('../../images/face-2.png')} />
										<Text style={{fontSize: 10, color: '#4ba9c5',}}>Rapper</Text>
									</View>	
								</View>
							</View>

							<View style={styles.followButton}>
								
								<View style={styles.buttonContent}>
									<Text style={styles.followText}>Following</Text>
									<Image style={styles.personPlus}
										source={require('../../images/heart.png')} />
								</View>
									
							</View>
						</View>
					</View>

					<View style={styles.item}>
						<View style={styles.itemTop}>
							<View style={styles.itemLeft}>
								<Image style={{marginRight: -2, marginTop: -5}}
										source={require('../../images/online-icon.png')} />
								<Image style={styles.photo}
										source={require('../../images/carter.png')} />
								<View style={{marginTop: -5,}}>
									<Text style={styles.itemLeftText}>Jhon Doe</Text>
									<View style={{flexDirection: 'row',}}>
										<Image style={{width: 10, height: 10, marginRight: 5, marginTop: 3,}}
											source={require('../../images/face-2.png')} />
										<Text style={{fontSize: 10, color: '#4ba9c5',}}>Rapper</Text>
									</View>	
								</View>
							</View>

							<View style={styles.followButton}>
								
								<View style={styles.buttonContent}>
									<Text style={styles.followText}>Following</Text>
									<Image style={styles.personPlus}
										source={require('../../images/heart.png')} />
								</View>
									
							</View>
						</View>
					</View>

					<View style={styles.item}>
						<View style={styles.itemTop}>
							<View style={styles.itemLeft}>
								<Image style={{marginRight: -2, marginTop: -5}}
										source={require('../../images/online-icon.png')} />
								<Image style={styles.photo}
										source={require('../../images/carter.png')} />
								<View style={{marginTop: -5,}}>
									<Text style={styles.itemLeftText}>Jhon Doe</Text>
									<View style={{flexDirection: 'row',}}>
										<Image style={{width: 10, height: 10, marginRight: 5, marginTop: 3,}}
											source={require('../../images/face-2.png')} />
										<Text style={{fontSize: 10, color: '#4ba9c5',}}>Rapper</Text>
									</View>	
								</View>
							</View>

							<View style={styles.followButton}>
								
								<View style={styles.buttonContent}>
									<Text style={styles.followText}>Following</Text>
									<Image style={styles.personPlus}
										source={require('../../images/heart.png')} />
								</View>
									
							</View>
						</View>
					</View>

					<View style={styles.item}>
						<View style={styles.itemTop}>
							<View style={styles.itemLeft}>
								<Image style={{marginRight: -2, marginTop: -5}}
										source={require('../../images/online-icon.png')} />
								<Image style={styles.photo}
										source={require('../../images/carter.png')} />
								<View style={{marginTop: -5,}}>
									<Text style={styles.itemLeftText}>Jhon Doe</Text>
									<View style={{flexDirection: 'row',}}>
										<Image style={{width: 10, height: 10, marginRight: 5, marginTop: 3,}}
											source={require('../../images/face-2.png')} />
										<Text style={{fontSize: 10, color: '#4ba9c5',}}>Rapper</Text>
									</View>	
								</View>
							</View>

							<View style={styles.followButton}>
								
								<View style={styles.buttonContent}>
									<Text style={styles.followText}>Following</Text>
									<Image style={styles.personPlus}
										source={require('../../images/heart.png')} />
								</View>
									
							</View>
						</View>
					</View>

					<View style={styles.item}>
						<View style={styles.itemTop}>
							<View style={styles.itemLeft}>
								<Image style={{marginRight: -2, marginTop: -5}}
										source={require('../../images/online-icon.png')} />
								<Image style={styles.photo}
										source={require('../../images/carter.png')} />
								<View style={{marginTop: -5,}}>
									<Text style={styles.itemLeftText}>Jhon Doe</Text>
									<View style={{flexDirection: 'row',}}>
										<Image style={{width: 10, height: 10, marginRight: 5, marginTop: 3,}}
											source={require('../../images/face-2.png')} />
										<Text style={{fontSize: 10, color: '#4ba9c5',}}>Rapper</Text>
									</View>	
								</View>
							</View>

							<View style={styles.followButton}>
								
								<View style={styles.buttonContent}>
									<Text style={styles.followText}>Following</Text>
									<Image style={styles.personPlus}
										source={require('../../images/heart.png')} />
								</View>
									
							</View>
						</View>
					</View>

					<View style={styles.item}>
						<View style={styles.itemTop}>
							<View style={styles.itemLeft}>
								<Image style={{marginRight: -2, marginTop: -5}}
										source={require('../../images/online-icon.png')} />
								<Image style={styles.photo}
										source={require('../../images/carter.png')} />
								<View style={{marginTop: -5,}}>
									<Text style={styles.itemLeftText}>Jhon Doe</Text>
									<View style={{flexDirection: 'row',}}>
										<Image style={{width: 10, height: 10, marginRight: 5, marginTop: 3,}}
											source={require('../../images/face-2.png')} />
										<Text style={{fontSize: 10, color: '#4ba9c5',}}>Rapper</Text>
									</View>	
								</View>
							</View>

							<View style={styles.followButton}>
								
								<View style={styles.buttonContent}>
									<Text style={styles.followText}>Following</Text>
									<Image style={styles.personPlus}
										source={require('../../images/heart.png')} />
								</View>
									
							</View>
						</View>
					</View>

					<View style={styles.item}>
						<View style={styles.itemTop}>
							<View style={styles.itemLeft}>
								<Image style={{marginRight: -2, marginTop: -5}}
										source={require('../../images/online-icon.png')} />
								<Image style={styles.photo}
										source={require('../../images/carter.png')} />
								<View style={{marginTop: -5,}}>
									<Text style={styles.itemLeftText}>Jhon Doe</Text>
									<View style={{flexDirection: 'row',}}>
										<Image style={{width: 10, height: 10, marginRight: 5, marginTop: 3,}}
											source={require('../../images/face-2.png')} />
										<Text style={{fontSize: 10, color: '#4ba9c5',}}>Rapper</Text>
									</View>	
								</View>
							</View>

							<View style={styles.followButton}>
								
								<View style={styles.buttonContent}>
									<Text style={styles.followText}>Following</Text>
									<Image style={styles.personPlus}
										source={require('../../images/heart.png')} />
								</View>
									
							</View>
						</View>
					</View>

				</View>

				<BottomImage2 />
			</View>	
		)
	}
}

const goToAll = () => {
	Actions.all()
}

const goToLatest = () => {
	Actions.latest()
}

const goToPopular = () => {
	Actions.popular()
}

const goToFavoriteCelebrity = () => {
	Actions.favorite_celebrity()
}

const goToFavoriteCatcher = () => {
	Actions.favorite_catcher()
}

const goToFavoriteSubscriber = () => {
	Actions.favorite_subscriber()
}
	

const styles = StyleSheet.create({
  container : {
		backgroundColor : '#ffffff',
		flex: 1,
	},

	container1: {
		flex: 5,
		alignItems: 'stretch',
		marginTop: -20,
	},

	buttonBg: {
		width: 90,
		height: 25,
	},

	buttonContent: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},

	followButton: {
	},

	personPlus: {
		marginRight: 5,
		marginTop: 4,
		width: 15,
		height: 15,
	},

	followText: {
		color: '#b4b4b4',
		fontSize: 12,
		marginRight: 10,
	},

	item : {
		justifyContent: 'flex-start',
		alignItems: 'stretch',
		marginLeft: 25,
		marginRight: 25,
		marginTop: 15,
		borderRadius: 5,
		borderWidth: 1,	
		borderColor: '#ccf1fa',
		borderRadius: 5,
	},

	itemTop: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 12,
		paddingBottom: 7,
	},

	itemLeft: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},

	itemLeftText: {
		color: '#4ba9c5', 
		fontSize: 12,
	},

	itemRightText: {
		color: '#7bd8c6',
		fontSize: 12,
		
	},

	photo: {
		borderRadius: 30,
		marginRight: 15,
		width: 30,
		height: 30,
		marginTop: -7,
	},
	
});
