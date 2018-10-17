import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import MasterNav from './NavService';

export default class Header extends Component {

  openProfile = () => {
    MasterNav.homeRoot.navigate('Profile');
    console.log('ok');
  }
  
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>
          {this.props.title}
        </Text>
        <TouchableOpacity style={styles.logoContainer}
          onPress={this.openProfile}>
          <Image source={require('./../src/img/logo.png')}
            style = {styles.logoImage}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    marginTop: 40,
    height: 70,
    flexDirection: 'row',
  },
  title: {
    height: 70,
    flex: 1,
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    paddingTop: 10,
    paddingLeft: 30
  },
  logoContainer: {
    height: 70,
    width: 70,
    justifyContent: 'center',
  },
  logoImage: {
    width: 50, 
    height: 50,
  },
});