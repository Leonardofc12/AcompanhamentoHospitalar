import 'react-native-gesture-handler';
import React from 'react';

import { View, StatusBar } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import AppProvider from './hooks';
// import AppProvider from './hooks';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
    <AppProvider>
      <View style={{ flex:1, backgroundColor: "#FAFAFA"}}>
      <Routes />
    </View> 
   </AppProvider> 
  </NavigationContainer>
);

export default App;