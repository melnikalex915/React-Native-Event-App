import React, { Component } from 'react';
import { Switch, Text, Image, KeyboardAvoidingView, View, TextInput } from 'react-native';
import LogoImage from './Test1';

class MyScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false,
    };
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View>
        <TextInput style={{borderWidth: 1, width: 300, marginTop: 10}} placeholder='test' />
        <TextInput style={{borderWidth: 1, width: 300, marginTop: 10}} placeholder='test' />
        <TextInput style={{borderWidth: 1, width: 300, marginTop: 10}} placeholder='test' />
          {/* <View style={{}}>
                <Image style={{width: 16}}
                    source={require('./images/person.png')} 
                    resizeMode="contain" />

                <View>
                  <TextInput  
                    style={{}} 
                    placeholderTextColor="#3a96bd" underlineColorAndroid='transparent' 
                    placeholder="User Name"  />
                </View>
              </View> */}
          </View>
      </KeyboardAvoidingView>
    );
  }
}

export default MyScreen;