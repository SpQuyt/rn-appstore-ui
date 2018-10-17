
import React, { Component } from 'react';
import Login from './components/Login';
import Home from './components/Home';
import { createStackNavigator } from 'react-navigation';
import MasterNav from './components/NavService';

const RootStack = createStackNavigator(
  {
    Login: Login,
    Home: Home
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
    navigationOptions: ({navigation}) => {
      MasterNav.app = navigation;
      return {
        headerStyle: {
          backgroundColor: '#629231',
        },
          headerTintColor: '#fff',
          headerTitleStyle: {
        },
      }
    }
  },
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
