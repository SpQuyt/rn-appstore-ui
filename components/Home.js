import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { 
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import MasterNav from './NavService';
import Profile from './Profile';
import Movies from './Movies';
import Musics from './Musics';
import News from './News';

const MainStack = createBottomTabNavigator(
  {
    News: News,
    Movies: Movies,
    Musics: Musics
  },
  {
    initialRouteName: 'News',
    swipeEnabled: true,
    navigationOptions: ({ navigation }) => {
      MasterNav.homeMain = navigation;
      return ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          switch (routeName) {
            case 'Movies':
              iconName = `ios-film${focused ? '' : '-outline'}`;
              break;
            case 'Musics':
              iconName = `ios-musical-notes${focused ? '' : '-outline'}`;
              break;
            case 'News':
              iconName = `ios-paper${focused ? '' : '-outline'}`;
              break;
          }
          return <Icon name={iconName} size={25} color={tintColor} />;
        },
      })
    },
    tabBarOptions: {
      activeTintColor: '#007AFF',
      inactiveTintColor: 'gray',
    },
  },
);


const RootStack = createStackNavigator(
  {
    Main: MainStack,
    Profile: Profile,
  },
  {
    initialRouteName: 'Main',
    mode: 'modal',
    headerMode: 'none',
    navigationOptions: ({navigation}) => {
      MasterNav.homeRoot = navigation;
      return {};
    }
  }
);

export default class Home extends Component {
  render() {
    return (
      <RootStack />
    );
  }
}