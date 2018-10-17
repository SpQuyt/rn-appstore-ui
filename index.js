import { AppRegistry } from 'react-native';
import App from './App';
//import Home from './components/Home';

AppRegistry.registerComponent('bug', () => App);


import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);