import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      data: [
        {username: 'nam', password: '21031998'},
        {username: '1', password: '1'},
        {username: 'admin', password: 'admin'}
      ],
    };
  }

  static navigationOptions = {
    title: 'Login System',
  };

  onLogin(u, p) {
    if (!this.checkInput(u, p)) {
      Alert.alert('Fill username and password');
      return;
    }
    let flag = false;
    for (obj of this.state.data) {
      if (u == obj.username && p == obj.password) {
        this.props.navigation.navigate('Home', {
          username: u,
        });
        flag = true;
      }
    }
    if (flag == false) {
      Alert.alert('Wrong username or password');
    }
  }

  onRegister(u, p) {
    if (this.checkInput(u, p)) {
      for (obj of this.state.data) {
        if (u == obj.username) {
          Alert.alert('Username already in used!');
          return;
        }
      }
      this.state.data.push({username: u, password: p});
      Alert.alert('Success');
    }
    else {
      Alert.alert('Fill username and password');
    }
  }

  checkInput(u, p) {
    if (u == '' || p == '') {
      return 0;
    }
    else return 1;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require('./../src/img/logo.png')}
            style = {styles.logoImage}
          />
        </View>
        
        <Text style={styles.welcome}>
          Welcome
        </Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid="transparent"
            onChangeText={(username) => this.setState({username})}
            placeholder='Username' />
          <TextInput
            style={styles.textInput}
            underlineColorAndroid="transparent"
            onChangeText={(password) => this.setState({password})}
            placeholder='Password' 
            secureTextEntry={true}/>

          <View
            style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.onLogin(this.state.username, this.state.password)}
              >
              <Text style={{fontSize: 20}}> Login </Text>
            </TouchableOpacity>
            <Text>
                Don't have an account?
            </Text>
            <TouchableOpacity
              style={[styles.button, styles.grey]}
              onPress={() => this.onRegister(this.state.username, this.state.password)}
              >
              <Text style={{fontSize: 20}}> Register </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logoContainer: {
    flex: 3,
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
  grey: {
    backgroundColor: '#ccc',
  },
});
