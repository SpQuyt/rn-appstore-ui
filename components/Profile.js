import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity
} from 'react-native';
import MasterNav from './NavService';


export default class Profile extends Component {
  back() {
    this.props.navigation.goBack();
  }

  logout() {
    MasterNav.app.popToTop();
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
        style={styles.doneContainer}
          onPress={() => this.back()}>
          <Text style={styles.doneText}>
            Done
          </Text>
        </TouchableOpacity>
        <View style={styles.logoContainer}>
            <Image source={require('./../src/img/logo.png')}
              style = {styles.logoImage}
            />
        </View>
        <View style={styles.header}>
          <Text style={styles.title}>
            Profile
          </Text>
        </View>
        
        
        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={() => this.logout()}>
          <Text style={styles.logoutText}>
            Log out
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
  },
  header: {
    height: '20%',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
  },
  btnText: {
    fontSize: 20
  },
  logoContainer: {
    height: '30%',
    justifyContent: 'flex-end',
  },
  logoImage: {
    width: 100, 
    height: 100,
  },
  welcome: {
    height: 50,
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    marginBottom: 30,
  },
  inputContainer: {
    flex: 6,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  textInput: {
    height: 50,
    width: '70%',
    margin: 5,
    paddingLeft: 20,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '70%',
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: '#82c3418f',
    borderRadius: 25,
  },
  doneContainer: {
    height: 60,
    width: '100%',
    padding: 15,
    alignItems: 'flex-end',
    backgroundColor: '#eee',
  },
  doneText: {
    fontSize: 20,
    color: '#007AFF',
  },
  logoutBtn: {
    height: 60,
    width: '60%',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff3b30',

  },
  logoutText: {
    fontSize: 30,
    color: 'white',
  },
});
