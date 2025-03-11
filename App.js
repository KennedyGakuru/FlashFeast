
import { StatusBar } from 'expo-status-bar';
import {View, Text, StyleSheet} from 'react-native';
import { Provider } from 'react-redux'
import './global.css';
import Navigation from './navigation';
import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
   
  );
}

