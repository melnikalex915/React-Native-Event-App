import React from 'react';
import { Button, Image, View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation'; 


import Home from './src/components/home/Home';
import Loading from './src/components/Loading';

//=== Catcher ====
import Login from './src/components/catcher/Login';
import Signup from './src/components/catcher/Signup';

import CatcherLogin from './src/components/catcher/CatcherLogin';
import CatcherPassReset from './src/components/catcher/CatcherPassReset';
import CatcherSignup from './src/components/catcher/CatcherSignup';
import CatcherDetail from './src/components/catcher/CatcherDetail';
import CatcherAuction from './src/components/catcher/CatcherAuction';
import CatcherAuction2 from './src/components/catcher/CatcherAuction2';
import CatcherCreateAuction from './src/components/catcher/CatcherCreateAuction';
import CatcherPhotoPrice from './src/components/catcher/CatcherPhotoPrice';
import CatcherEventList from './src/components/catcher/CatcherEventList';
import CatcherFindEvent from './src/components/catcher/CatcherFindEvent';
import CatcherEventDetail from './src/components/catcher/CatcherEventDetail';
import CatcherSoldPhotos from './src/components/catcher/CatcherSoldPhotos';
import CatcherSoldPhoto from './src/components/catcher/CatcherSoldPhoto';
import ActiveBidPhotos from './src/components/catcher/ActiveBidPhotos';
import CatcherFollowers from './src/components/catcher/CatcherFollowers';
import CatcherFollowing from './src/components/catcher/CatcherFollowing';
import CelebrityFollowing from './src/components/catcher/CelebrityFollowing';
import CatcherPhotos from './src/components/catcher/CatcherPhotos';

import All from './src/components/catcher/All';
import Popular from './src/components/catcher/Popular';
import Latest from './src/components/catcher/Latest';
import FavoriteCatcher from './src/components/catcher/FavoriteCatcher';
import FavoriteCelebrity from './src/components/catcher/FavoriteCelebrity';
import FavoriteSubscriber from './src/components/catcher/FavoriteSubscriber';
import PhotoCategories from './src/components/catcher/PhotoCategories';
import CatcherDashboard from './src/components/catcher/CatcherDashboard';
import Athletes from './src/components/catcher/Athletes';
import Celebrities from './src/components/catcher/Celebrities';
import Musicians from './src/components/catcher/Musicians';
import Rappers from './src/components/catcher/Rappers';
import Fashion from './src/components/catcher/Fashion';
import Others from './src/components/catcher/Others';
import UploadPhoto from './src/components/catcher/UploadPhoto';


//=== Subscriber ===
import SubscriberLogin from './src/components/subscriber/SubscriberLogin';
import SubscriberPassReset from './src/components/subscriber/SubscriberPassReset';
import SubscriberSignup from './src/components/subscriber/SubscriberSignup';
import SubscriberDetail from './src/components/subscriber/SubscriberDetail';
import SubscriberAuction from './src/components/subscriber/SubscriberAuction';
import SubscriberAuction2 from './src/components/subscriber/SubscriberAuction2';
import SubscriberCreateAuction from './src/components/subscriber/SubscriberCreateAuction';
import SubscriberPhotoPrice from './src/components/subscriber/SubscriberPhotoPrice';
import SubscriberEventList from './src/components/subscriber/SubscriberEventList';
import SubscriberFindEvent from './src/components/subscriber/SubscriberFindEvent';
import SubscriberEventDetail from './src/components/subscriber/SubscriberEventDetail';
import SubscriberSoldPhotos from './src/components/subscriber/SubscriberSoldPhotos';
import SubscriberSoldPhoto from './src/components/subscriber/SubscriberSoldPhoto';
import SubscriberFollowers from './src/components/subscriber/SubscriberFollowers';
import SubscriberFollowing from './src/components/subscriber/SubscriberFollowing';
import SubscriberPhotos from './src/components/subscriber/SubscriberPhotos';
import SubscriberDashboard from './src/components/subscriber/SubscriberDashboard';
import SubscriberPhotoCategories from './src/components/subscriber/SubscriberPhotoCategories';


import Test from './src/Test';
import Test1 from './src/Test1';





export default class App extends React.Component {
  render() {
    return <Routes />;
  }
}

const Routes = createStackNavigator(
  {
    //=== Common Routes ===
    Login							   : { screen: Login },
    Signup							 : { screen: Signup },

    //=== Catcher Routes ===
    Loading							 : { screen: Loading },
    Home								 : { screen: Home },
    CatcherLogin				 : { screen: CatcherLogin },
    CatcherSignup				 : { screen: CatcherSignup },
    CatcherPassReset		 : { screen: CatcherPassReset },
    PhotoCategories			 : { screen: PhotoCategories },
    CatcherAuction			 : { screen: CatcherAuction },
    CatcherAuction2			 : { screen: CatcherAuction2 },
    ActiveBidPhotos			 : { screen: ActiveBidPhotos },
    All									 : { screen: All },
    Athletes						 : { screen: Athletes },
    CatcherCreateAuction : { screen: CatcherCreateAuction },
    CatcherDashboard		 : { screen: CatcherDashboard },
    CatcherDetail				 : { screen: CatcherDetail },
    CatcherEventDetail	 : { screen: CatcherEventDetail },
    CatcherEventList		 : { screen: CatcherEventList },
    CatcherFindEvent		 : { screen: CatcherFindEvent },
    CatcherFollowers		 : { screen: CatcherFollowers },
    CatcherFollowing		 : { screen: CatcherFollowing },
    CatcherPhotoPrice		 : { screen: CatcherPhotoPrice },
    CatcherPhotos				 : { screen: CatcherPhotos },
    CatcherSoldPhoto		 : { screen: CatcherSoldPhoto },
    CatcherSoldPhotos		 : { screen: CatcherSoldPhotos },
    Celebrities					 : { screen: Celebrities },
    CelebrityFollowing	 : { screen: CelebrityFollowing },
    Fashion							 : { screen: Fashion },
    FavoriteCatcher			 : { screen: FavoriteCatcher },
    FavoriteCelebrity		 : { screen: FavoriteCelebrity },
    FavoriteSubscriber	 : { screen: FavoriteSubscriber },
    Latest							 : { screen: Latest },
    Musicians						 : { screen: Musicians },
    Others							 : { screen: Others },
    Popular							 : { screen: Popular },
    Rappers							 : { screen: Rappers },
    UploadPhoto					 : { screen: UploadPhoto },


    //=== Subscriber Routes ===
    SubscriberLogin				  : { screen: SubscriberLogin },
    SubscriberSignup				: { screen: SubscriberSignup },
    SubscriberPassReset		  : { screen: SubscriberPassReset },
    SubscriberAuction			  : { screen: SubscriberAuction },
    SubscriberAuction2			: { screen: SubscriberAuction2 },
    SubscriberCreateAuction : { screen: SubscriberCreateAuction },
    SubscriberDashboard		  : { screen: SubscriberDashboard },
    SubscriberDetail				: { screen: SubscriberDetail },
    SubscriberEventDetail	  : { screen: SubscriberEventDetail },
    SubscriberEventList		  : { screen: SubscriberEventList },
    SubscriberFindEvent		  : { screen: SubscriberFindEvent },
    SubscriberFollowers		  : { screen: SubscriberFollowers },
    SubscriberFollowing		  : { screen: SubscriberFollowing },
    SubscriberPhotoPrice	  : { screen: SubscriberPhotoPrice },
    SubscriberPhotos			  : { screen: SubscriberPhotos },
    SubscriberSoldPhoto		  : { screen: SubscriberSoldPhoto },
    SubscriberSoldPhotos	  : { screen: SubscriberSoldPhotos },
    SubscriberPhotoCategories : { screen: SubscriberPhotoCategories },



    Test : { screen: Test },
    Test1 : { screen: Test1 },
    
    
	},
	
  {
    initialRouteName: 'Home',
    
  }
);



class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('./src/images/photography.png')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    // headerTitle: <LogoTitle />,
    title: 'Center Title',
    headerTitleStyle: { textAlign: 'center', flex: 1 },
    headerBackground: (
      <Image
        source={require('./src/images/nav-bg-2.png')}
      />
    ),
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={ require('./src/images/left-arrow.png') }/>
      </TouchableOpacity>
    ),
    header: null,
    
  });

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    console.log(navigationOptions);
    // Notice the logs ^
    // sometimes we call with the default navigationOptions and other times
    // we call this with the previous navigationOptions that were returned from
    // this very function
    return {
      title: 'Center Title',
    headerTitleStyle: { textAlign: 'center', flex: 1 },
    headerBackground: (
      <Image
        source={require('./src/images/nav-bg-2.png')}
      />
    ),
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={ require('./src/images/left-arrow.png') }/>
      </TouchableOpacity>
    )
    };
  };

  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID'); 
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Go to Details... again"
          onPress={() =>
            this.props.navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100),
            })}
        />
        <Button
          title="Update the title"
          onPress={() =>
            this.props.navigation.setParams({ otherParam: 'Updated!' })}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

