/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Signup from './components/pages/Signup'
import AuthController from './AuthController'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Signup);
